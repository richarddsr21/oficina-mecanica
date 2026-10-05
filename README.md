# Template Atlanvo: Oficina Auto

Site de página única para oficinas mecânicas: estático (SSG), sem backend, em português de Portugal.
Feito com Next.js 16 (App Router), TypeScript estrito, Tailwind CSS 4 e lucide-react.

## Duplicar para um novo cliente (≈ 20–30 min)

1. Copie a pasta do projeto (ou faça um fork/novo repositório a partir dela).
2. Edite **apenas** `src/config/site.ts`: nome, contactos, WhatsApp (`351…`, sem `+`), morada, coordenadas,
   link do Google Maps, horário, serviços, marcas, perguntas, NIF, razão social, SEO (`siteUrl`) e cores (`theme`).
3. Substitua as imagens em `public/images/`:
   - `hero.jpg`: carro ou peça sobre **fundo escuro/preto** (o preto funde-se com o fundo do site), ≈ 1600×900.
   - `oficina.jpg`: foto da oficina ou de um motor (vertical ou 4:3).
   - `elevador.jpg`: foto da oficina, usada muito escurecida no fundo de "Como funciona".
   - Logo opcional: ponha o ficheiro em `public/` e preencha `logo` no config (sem logo, o nome aparece em texto).
   - Favicon: `public/favicon.svg` (ou mude `favicon` no config).
4. Demonstração: `demo.active: true` mostra a barra "Proposta de site criada pela Atlanvo para…".
   Quando o cliente comprar, mude para `false`.
5. Avaliações: copie **só avaliações reais** do Google do cliente para `reviews`. Lista vazia = a secção não aparece.
6. `stats` (números do topo): use apenas números verdadeiros. Lista vazia = escondido.
   Para esconder o selo "anos de experiência", apague `hero.yearsOfExperience`.

Os ícones disponíveis para serviços e diferenciais estão em `src/components/ui/Icon.tsx`.
As fontes (Chakra Petch + Inter) estão em `src/lib/fonts.ts`.

## Correr localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build      # build de produção (tem de passar sem erros)
```

## Deploy na Vercel

1. Envie o projeto para um repositório no GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório. Não é preciso configuração extra.
3. Depois de ter o domínio final, atualize `seo.siteUrl` no config (usado no sitemap, robots, Open Graph e JSON-LD)
   e faça novo deploy.

## Checklist antes de entregar ao cliente

- [ ] Telefone (`phoneDisplay` e `phoneHref`) correto, com uma chamada de teste
- [ ] `phoneNote` correto (rede fixa ou móvel nacional)
- [ ] WhatsApp correto: carregar no botão e confirmar que abre a conversa certa
- [ ] Formulário de orçamento testado no telemóvel
- [ ] Morada, código postal, coordenadas e link do Google Maps
- [ ] Horário de todos os dias (incluindo os dias fechados)
- [ ] NIF e razão social no rodapé
- [ ] Link do Livro de Reclamações Eletrónico
- [ ] Fotos reais da oficina (substituir as fotos de banco de imagens)
- [ ] Avaliações reais (ou lista vazia), nunca inventadas
- [ ] Números de `stats` e anos de experiência confirmados pelo cliente
- [ ] Política de privacidade revista por um jurista (`src/app/privacidade/page.tsx`)
- [ ] `demo.active: false`
- [ ] `seo.siteUrl` com o domínio final
- [ ] Redes sociais preenchidas (ou vazias para esconder)

## Créditos das imagens de exemplo (Unsplash, licença Unsplash)

- `hero.jpg`: unsplash.com/photos/Nv8-Oq1TQPA (recortada)
- `oficina.jpg`: unsplash.com/photos/6tYlbu3pE6M
- `elevador.jpg`: unsplash.com/photos/Hv_gKPOXmwE
