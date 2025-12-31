import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative glass-effect border-t border-border/50 mt-auto">
            {/* Linha decorativa superior */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <div className="container py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Links sociais */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://www.linkedin.com/in/phdevx/"
                            target="_blank"
                            className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all"
                        >
                            <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </Link>
                        
                        <Link
                            href="https://github.com/phthedevx"
                            target="_blank"
                            className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all"
                        >
                            <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium">GitHub</span>
                        </Link>
                        
                        <Link
                            href="mailto:contatopedrohenrique.dev@gmail.com"
                            className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all"
                        >
                            <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium">Email</span>
                        </Link>
                    </div>
                    
                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Desenvolvido por phthedev</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}