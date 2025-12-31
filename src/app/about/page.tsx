import { aboutData } from "@/data/about";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Trophy, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sobre | ${aboutData.name}`,
  description: aboutData.shortBio,
};

export default function AboutPage() {
  return (
    <section className="space-y-12 animate-in fade-in duration-500 py-8">
      
      {/* --- SEÇÃO DO TOPO: FOTO + BIO --- */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        
        {/* Foto */}
        <div className="shrink-0">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-muted shadow-lg">
            <Image
              src={aboutData.avatarUrl}
              alt={aboutData.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Texto (Nome e Bio) */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {aboutData.name}
          </h1>
          <p className="text-lg font-medium text-primary whitespace-pre-line leading-relaxed">
            {aboutData.shortBio}
          </p>


          {/* Botões Sociais */}
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            {aboutData.social?.linkedin && (
              <Button variant="outline" size="icon" asChild>
                <Link href={aboutData.social.linkedin} target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            )}
            {aboutData.social?.github && (
              <Button variant="outline" size="icon" asChild>
                <Link href={aboutData.social.github} target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            )}
            {aboutData.social?.email && (
              <Button variant="outline" size="icon" asChild>
                <Link href={aboutData.social.email}>
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* --- O RESTO: EXPERIÊNCIA E EDUCAÇÃO --- */}
      <div className="grid gap-8 md:grid-cols-2 pt-4">
        
        {/* Lado Esquerdo: Experiência com ícone de Maleta */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase className="h-6 w-6" /> Experiência
          </h2>
          <div className="space-y-4">
            {aboutData.experience.map((job, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:bg-accent/5 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{job.role}</CardTitle>
                      <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0 ml-2">{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Lado Direito: Educação e Conquistas */}
        <div className="space-y-8">
          
          {/* Educação com ícone de Capelo */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="h-6 w-6" /> Educação
            </h2>
            {aboutData.education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.institution}</CardTitle>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="outline">{edu.period}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Conquistas com ícone de Troféu */}
          <div className="space-y-6">
            {aboutData.achievements && aboutData.achievements.length > 0 && (
              <>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Trophy className="h-6 w-6" /> Conquistas
                </h2>
                {aboutData.achievements.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}