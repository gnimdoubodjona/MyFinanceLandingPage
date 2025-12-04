import type { ReactNode } from "react";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";

// Définir le type des props
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            {/* Header toujours en haut */}
            <Header />

            {/* Contenu principal (flex-grow pour prendre l'espace restant) */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer toujours en bas */}
            <Footer />
        </>
    );
}