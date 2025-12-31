import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header"; // Importação obrigatória
import { Footer } from "@/components/footer/footer";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pedro Henrique | Desenvolvedor",
  description: "Portfólio de Pedro Henrique - Desenvolvedor Fullstack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning className="dark">
      <body
        className={`${poppins.className} font-light antialiased scroll-smooth flex flex-col min-h-screen bg-background text-foreground`}
      >
        {/* O Header PRECISA estar aqui */}
        <div className="max-w-3xl w-full mx-auto px-6">
           <Header />
        </div>

        <main className="flex-1 flex flex-col pb-12 mt-8 max-w-3xl px-6 mx-auto w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}