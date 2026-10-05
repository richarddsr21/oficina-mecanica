"use client";

import { ShieldCheck } from "lucide-react";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { site, type DayKey } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Section, SectionHeading } from "@/components/ui/Section";

type Fields = {
  name: string;
  vehicle: string;
  date: string;
  period: string;
  problem: string;
};

type FieldName = keyof Fields;
type Errors = Partial<Record<FieldName, string>>;

const emptyFields: Fields = { name: "", vehicle: "", date: "", period: "", problem: "" };
const fieldOrder: FieldName[] = ["name", "vehicle", "date", "period", "problem"];

// Date.getDay(): 0 = domingo
const weekDays: DayKey[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

/** "2026-10-12" → Date local (sem desvio de fuso horário) */
function parseDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function todayIso(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Indique o seu nome.";
  if (fields.vehicle.trim().length < 2) errors.vehicle = "Indique a marca e o modelo do carro.";
  if (fields.date) {
    const date = parseDate(fields.date);
    if (!date) {
      errors.date = "Data inválida.";
    } else if (fields.date < todayIso()) {
      errors.date = "Escolha uma data a partir de hoje.";
    } else {
      const day = site.openingHours.find((d) => d.day === weekDays[date.getDay()]);
      if (day && day.periods.length === 0) {
        const article = day.day === "saturday" || day.day === "sunday" ? "ao" : "à";
        errors.date = `Estamos fechados ${article} ${day.label.toLowerCase()}. Escolha outro dia.`;
      }
    }
  }
  if (fields.problem.trim().length < 10) errors.problem = "Descreva o problema em pelo menos 10 caracteres.";
  return errors;
}

function buildMessage(fields: Fields): string {
  const lines = [
    `Olá! Gostaria de marcar uma visita à oficina.`,
    ``,
    `Nome: ${fields.name.trim()}`,
    `Carro: ${fields.vehicle.trim()}`,
  ];
  const date = parseDate(fields.date);
  if (date) {
    const formatted = date.toLocaleDateString("pt-PT", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" });
    lines.push(`Data preferida: ${formatted}${fields.period ? ` (${fields.period.toLowerCase()})` : ""}`);
  } else if (fields.period) {
    lines.push(`Período preferido: ${fields.period.toLowerCase()}`);
  }
  lines.push(``, `Problema: ${fields.problem.trim()}`);
  return lines.join("\n");
}

export function QuoteForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function update(name: FieldName, value: string) {
    const next = { ...fields, [name]: value };
    setFields(next);
    // Depois de o campo ter sido visitado, a validação acompanha a escrita
    if (touched[name]) setErrors(validate(next));
  }

  function blur(name: FieldName) {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(fields));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    setTouched({ name: true, vehicle: true, date: true, period: true, problem: true });

    const firstInvalid = fieldOrder.find((name) => found[name]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const url = buildWhatsAppUrl(site.contact.whatsapp, buildMessage(fields));
    // Com "noopener" o window.open devolve sempre null, por isso cortamos o opener à mão
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;
    else window.location.href = url;
    setSent(true);
  }

  const showError = (name: FieldName) => (touched[name] ? errors[name] : undefined);
  const control = (name: FieldName) => ({
    id: `field-${name}`,
    name,
    value: fields[name],
    "aria-invalid": showError(name) ? true : undefined,
    "aria-describedby": showError(name) ? `field-${name}-error` : undefined,
    onBlur: () => blur(name),
  });

  return (
    <Section id="orcamento" className="border-t border-line">
      <SectionHeading id="orcamento" copy={site.sections.quote} />

      <form ref={formRef} onSubmit={submit} noValidate className="reveal grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <Field name="name" label="Nome" required error={showError("name")}>
          <input
            {...control("name")}
            type="text"
            required
            autoComplete="name"
            placeholder="O seu nome"
            onChange={(e) => update("name", e.target.value)}
            className="field field-line"
          />
        </Field>
        <Field name="vehicle" label="Marca e modelo" required error={showError("vehicle")}>
          <input
            {...control("vehicle")}
            type="text"
            required
            placeholder="Ex.: Renault Clio 2015"
            onChange={(e) => update("vehicle", e.target.value)}
            className="field field-line"
          />
        </Field>
        <Field name="date" label="Data preferida" hint="Opcional" error={showError("date")}>
          <input
            {...control("date")}
            type="date"
            min={todayIso()}
            suppressHydrationWarning
            onChange={(e) => update("date", e.target.value)}
            className="field field-line [color-scheme:dark]"
          />
        </Field>
        <Field name="period" label="Período" hint="Opcional" error={showError("period")}>
          <select {...control("period")} onChange={(e) => update("period", e.target.value)} className="field field-line">
            <option value="">Indiferente</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
          </select>
        </Field>
        <Field name="problem" label="Mensagem" required error={showError("problem")} wide>
          <textarea
            {...control("problem")}
            required
            rows={3}
            placeholder="Descreva o problema. Ex.: barulho ao travar, luz do motor acesa…"
            onChange={(e) => update("problem", e.target.value)}
            className="field field-line min-h-24 resize-y"
          />
        </Field>

        <div className="sm:col-span-2">
          <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto sm:min-w-60">
            <WhatsAppIcon />
            <span>Enviar pedido</span>
          </button>
          <p role="status" aria-live="polite" className="mt-4 text-sm text-muted empty:hidden">
            {sent ? "A abrir o WhatsApp com a sua mensagem. Só tem de carregar em enviar." : ""}
          </p>
          <p className="mt-5 flex max-w-xl gap-3 text-sm leading-relaxed text-muted">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            Este site não guarda os seus dados. A mensagem é enviada apenas por si, através do seu WhatsApp.
          </p>
        </div>
      </form>
    </Section>
  );
}

type FieldProps = {
  name: FieldName;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  wide?: boolean;
  children: ReactNode;
};

function Field({ name, label, error, hint, required = false, wide = false, children }: FieldProps) {
  const id = `field-${name}`;
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between font-display text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-fg"
      >
        <span>
          {label}
          {required ? (
            <span className="text-accent" aria-hidden="true">
              {" "}*
            </span>
          ) : null}
        </span>
        {hint ? <span className="font-sans text-xs font-normal normal-case tracking-normal text-muted">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
