"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/about" },
  { name: "Projetos", href: "/projects" },
  { name: "Jornada", href: "/journey" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-4 py-2 rounded-lg text-sm font-medium transition-all",
              "hover:bg-primary/10",
              isActive 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* Texto */}
            <span className="relative z-10">{item.name}</span>
            
            {/* Indicador de página ativa */}
            {isActive && (
              <>
                <span className="absolute inset-0 bg-primary/10 rounded-lg" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </>
            )}
          </Link>
        );
      })}
    </nav>
  );
}