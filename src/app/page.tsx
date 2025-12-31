import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[60vh] animate-in fade-in duration-500">
      <div className="space-y-4 flex flex-col items-center text-center">
        
        {/* Nome Principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Pedro Henrique
        </h1>
        
        {/* Subtítulo Limpo (Sem ícone) */}
        <p className="font-light text-muted-foreground text-lg">
          Desenvolvedor de Software
        </p>

        {/* Botão Único */}
        <div className="flex items-center justify-center w-full mt-6">
          <Link href={"/about"}>
            <Button size="lg" className="font-semibold shadow-lg hover:shadow-primary/25 transition-all">
              Conheça minha história <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}