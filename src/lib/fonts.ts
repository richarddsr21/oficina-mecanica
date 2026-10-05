import { Chakra_Petch, Inter } from "next/font/google";

/** Fonte dos títulos: sans "quadrada", técnica, ao estilo automóvel. */
export const displayFont = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

/** Fonte do texto corrido. */
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
