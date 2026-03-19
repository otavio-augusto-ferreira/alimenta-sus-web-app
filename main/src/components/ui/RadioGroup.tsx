"use client" // Componentes Radix UI precisam ser Componentes de Cliente

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react" // Usaremos o ícone de círculo

import { clsx } from "clsx"

// --- Componente Principal (O "Container") ---
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={clsx("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

// --- Componente do Item (A "Bolinha") ---
// --- Componente do Item (A "Bolinha") ---
// --- Componente do Item (A "Bolinha") ---
// --- Componente do Item (A "Bolinha") ---
// --- Componente do Item (A "Bolinha") ---
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={clsx(
        // Estilo da bolinha externa
        "aspect-square h-5 w-5 rounded-full border border-occa-brown",
        // Estilo de foco para acessibilidade
        "focus:outline-none focus:ring-2 focus:ring-occa-green focus:ring-offset-2",
        // Estilo quando desabilitado
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Estilo da bolinha interna (quando marcada) */}
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        {/* A MUDANÇA ESTÁ AQUI:
          Usamos um "valor arbitrário" do Tailwind para forçar a cor.
          Isso diz: "Use a cor de preenchimento #2E7D32, não importa o que".
        */}
        <Circle className="h-3 w-3 fill-[#2E7D32]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// Exportamos os dois componentes
export { RadioGroup, RadioGroupItem }