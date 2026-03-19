"use client" // Componentes Radix UI precisam ser Componentes de Cliente

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react" // Ícone de "check"

import { clsx } from "clsx"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={clsx(
      // Estilo da caixinha (borda marrom)
      "peer h-5 w-5 shrink-0 rounded border border-occa-brown",
      // Estilo de foco para acessibilidade
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-occa-green focus-visible:ring-offset-2",
      // Estilo quando desabilitado
      "disabled:cursor-not-allowed disabled:opacity-50",
      // ESTILO QUANDO MARCADO (fundo verde, texto branco)
      "data-[state=checked]:bg-occa-green data-[state=checked]:text-white",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={clsx("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }