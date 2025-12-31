import { journeyData } from "@/data/journey";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minha Jornada | Pedro Henrique",
  description: "Minha história na programação.",
};

export default function JourneyPage() {
  return (
    <section className="py-12 animate-in fade-in duration-500 max-w-4xl mx-auto">
      
      {/* Cabeçalho Limpo */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Minha Jornada
        </h1>
        <p className="text-xl text-muted-foreground">
          Minha trajetória profissional e acadêmica até aqui.
        </p>
      </div>

      <div className="relative border-l-4 border-muted/50 ml-4 md:ml-8 space-y-12 pb-4">
        
        {journeyData.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-16 group">
            
            {/* Marcador da Timeline */}
            <div className={`absolute -left-[10px] top-2 h-5 w-5 rounded-full border-4 transition-all duration-300 
              ${index === journeyData.length - 1 
                ? "bg-primary border-primary scale-125" 
                : "bg-background border-muted-foreground/50 group-hover:border-primary"}`} 
            />
            
            <Card className="hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex flex-col">
                     <span className="text-sm font-bold text-primary tracking-wider uppercase mb-1">
                        {item.year}
                     </span>
                    <CardTitle className="text-xl md:text-2xl font-bold">
                      {item.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conector visual (setinha) */}
            {index !== journeyData.length - 1 && (
               <div className="absolute left-[0px] -bottom-8 transform -translate-x-1/2 text-muted/30">
                 <ArrowDown size={16} />
               </div>
            )}

          </div>
        ))}
      </div>
      {/* Sem frases de rodapé aqui */}
    </section>
  );
}