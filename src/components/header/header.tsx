import { Navigation } from "./navigation";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex flex-col gap-4 md:flex-row md:justify-between items-center py-4 relative z-50">
            {/* Efeito de vidro sutil no fundo */}
            <div className="absolute inset-0 backdrop-blur-sm -z-10 h-20 pointer-events-none" />
            
            {/* Logo Estilo Code <PH/> */}
            <Link 
                href="/" 
                className="font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity flex items-center bg-background/50 px-2 rounded-md"
            >
                <span className="text-primary mr-[2px]">&lt;</span>
                <span className="text-foreground">PH</span>
                <span className="text-primary ml-[2px]">{`/>`}</span>
            </Link>
            
            <Navigation />
            
            {/* Espaçador para desktop */}
            <div className="hidden md:block w-10" />
        </header>
    );
}