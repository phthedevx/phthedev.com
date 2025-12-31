import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre | Pedro Henrique",
    description:
        "Conheça Pedro Henrique, Desenvolvedor de Software e Low-Code Specialist, apaixonado por tecnologia e inovação.",
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="max-w-3xl px-6 mx-auto flex-1">{children}</main>;
}
