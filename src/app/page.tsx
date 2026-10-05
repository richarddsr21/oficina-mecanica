import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { HowItWorks } from "@/components/HowItWorks";
import { Packages } from "@/components/Packages";
import { QuoteForm } from "@/components/QuoteForm";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Tips } from "@/components/Tips";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Showcase />
      <Packages />
      <Highlights />
      <HowItWorks />
      <Reviews />
      <Tips />
      <Faq />
      <Contact />
      <QuoteForm />
    </>
  );
}
