import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Calio | Sisteme de Aluminiu, PVC și Sticlă",
    template: "%s | Calio",
  },
  description:
    "Calio — soluții premium de tâmplărie din aluminiu, PVC și sisteme de sticlă pentru arhitectură modernă. Ferestre, uși, fațade, balustrade, pergole.",
  keywords: ["aluminiu", "PVC", "sticlă", "ferestre", "uși", "sisteme glisante", "fațade", "balustrade", "pergole"],
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
      </body>
    </html>
  );
}
