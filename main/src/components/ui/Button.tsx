import React from "react";

// Aqui definimos que o Button aceita tudo que um botão HTML normal aceita
// (onClick, type, disabled, className, etc.)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "sim" | "nao" | "default"; // Suas variantes personalizadas
  children: React.ReactNode;
}

export function Button({ 
  className = "", 
  variant = "default", 
  children, 
  ...props // Pega todas as outras propriedades (como type="submit")
}: ButtonProps) {

  // 1. Estilos Base (comuns a todos os botões)
  const baseStyles = "inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  // 2. Estilos das Variantes
  let variantStyles = "";
  
  switch (variant) {
    case "sim":
      // Estilo verde/positivo (ajuste as cores conforme seu design original)
      variantStyles = "bg-occa-green text-white hover:opacity-90 rounded-lg py-3";
      break;
    case "nao":
      // Estilo de destaque/vermelho/laranja
      variantStyles = "bg-[#d94b2b] text-white hover:opacity-90";
      break;
    default:
      // Estilo padrão
      variantStyles = "bg-gray-200 text-gray-900 hover:bg-gray-300";
      break;
  }

  return (
    <button
      // Combina: Estilo Base + Estilo da Variante + Classes passadas no uso (className)
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props} // AQUI ESTÁ A MÁGICA: Repassa type="submit", disabled, etc.
    >
      {children}
    </button>
  );
}