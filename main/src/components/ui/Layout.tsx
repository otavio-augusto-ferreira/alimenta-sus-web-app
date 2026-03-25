import React from "react";
// 1. Importamos os ícones que queremos usar
import { Volume2, Hand } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      <main>{children}</main>

      <div className="fixed bottom-4 right-4 flex flex-col gap-3">
        <button
          title="Ler em voz alta (Áudio)"
          className="bg-brand-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-opacity"
        >
          {/* 2. Usamos o componente de ícone */}
          <Volume2 size={28} />
        </button>
        <button
          title="Ativar LIBRAS"
          className="bg-brand-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-opacity"
        >
          {/* 3. Usamos o componente de ícone */}
          <Hand size={28} />
        </button>
      </div>
    </div>
  );
}
