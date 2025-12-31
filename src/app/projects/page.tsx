import { projects } from "@/data/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Pedro Henrique",
  description: "Meus projetos recentes.",
};

export default function ProjectsPage() {
  return (
    <section className="py-12 animate-in fade-in duration-500">
      
      {/* Cabeçalho Limpo */}
      <div className="space-y-4 mb-12 text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Projetos
        </h1>
        <p className="text-muted-foreground text-lg">
          Uma seleção de projetos que desenvolvi para resolver problemas reais.
        </p>
      </div>
      
      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col h-full hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="gap-3 pt-4">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
              )}
              {project.preview && (
                <Button variant="default" size="sm" asChild>
                  <Link href={project.preview} target="_blank">
                    <Globe className="mr-2 h-4 w-4" /> Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}