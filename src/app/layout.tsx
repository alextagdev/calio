import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Calio | Sisteme de aluminiu, PVC si sticla",
    template: "%s | Calio",
  },
  description:
    "Calio — solutii premium de tamplarie din aluminiu, PVC si sisteme de sticla pentru arhitectura moderna. Ferestre, usi, fatade, balustrade, pergole.",
  keywords: ["aluminiu", "PVC", "sticla", "ferestre", "usi", "sisteme glisante", "fatade", "balustrade", "pergole"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${geist.variable} antialiased`}>
      <body className="bg-[#0a0a0a] text-[#f5f5f0] flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-[92px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
