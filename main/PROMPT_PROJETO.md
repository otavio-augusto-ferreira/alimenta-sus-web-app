# Prompt Consolidado do Projeto

Este documento descreve, em detalhe, a stack, estrutura e componentes usados para criar a aplicação `alimenta-sus-webapp`. Use-o como referência ou como prompt para replicação/documentação.

## Resumo da stack

- Linguagem: TypeScript
- Framework: Next.js (App Router) — versão 14.x
- Biblioteca UI: React v18
- Estilização: Tailwind CSS (v3) com PostCSS
- Ferramentas de build/lint: `next`, `eslint`, `typescript`
- Dependências principais de UI/auxiliares:
  - `@radix-ui/react-checkbox`
  - `@radix-ui/react-radio-group`
  - `lucide-react` (ícones)
  - `clsx` (condicional de classes)
  - `class-variance-authority` (CVA para variantes de componentes)

## Scripts npm relevantes

Use os scripts definidos em `package.json`:

```bash
npm run dev    # inicia em modo desenvolvimento
npm run build  # gera build de produção
npm run start  # inicia servidor de produção
npm run lint   # executa eslint
```

## Estrutura de pastas (essencial)

- `src/app/` — App Router com `layout.tsx` e `page.tsx`
  - `src/app/(main)/` — área principal da aplicação
    - `conduta/page.tsx`
    - `triagem/page.tsx`
    - `triagem/[step]/page.tsx`
    - `triagem/conduta/page.tsx`
  - `src/app/login/` — telas de login
- `src/components/ui/` — componentes reutilizáveis
  - `Button.tsx`, `Checkbox.tsx`, `RadioGroup.tsx`, `Layout.tsx`
- `src/contexts/` — contextos de estado (ex.: `TriagemContext.tsx`)
- `src/app/fonts/` — fontes otimizadas
- `public/` — assets estáticos

## Componentes e padrões de implementação

- Componentes baseados em Radix quando precisa de acessibilidade (`Checkbox`, `RadioGroup`).
- Ícones via `lucide-react`.
- Gerenciamento de classes e variantes via `clsx` + `class-variance-authority` (CVA).
- Estilos utilitários com Tailwind; tema/global em `src/app/globals.css`.
- Tipagem completa via TypeScript e pacotes `@types/*`.

## Contexto de aplicação

- `TriagemContext.tsx`: provedor de estado para passos de triagem, compartilhando dados entre rotas e componentes.

## Exemplos rápidos de uso

- Exemplo mínimo de `Button` (JSX):

```tsx
<Button variant="primary" onClick={() => { /* ação */ }}>
  Avançar
</Button>
```

- Exemplo mínimo de `Checkbox`:

```tsx
<Checkbox checked={checked} onCheckedChange={setChecked} />
```

- Exemplo mínimo de `RadioGroup`:

```tsx
<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroup.Item value="sim">Sim</RadioGroup.Item>
  <RadioGroup.Item value="nao">Não</RadioGroup.Item>
</RadioGroup>
```

## Instruções de instalação (rápido)

```bash
npm install
npm run dev
```

## Prompt final (use este texto para descrever/replicar o projeto)

"Descreva um projeto web construído em TypeScript com Next.js (App Router v14) e React v18, estilizado com Tailwind CSS e configurado com PostCSS. O projeto usa `@radix-ui/react-checkbox`, `@radix-ui/react-radio-group`, `lucide-react`, `clsx` e `class-variance-authority` para componentes UI e variantes. A estrutura inclui `src/app/` com layouts aninhados em `(main)` e rotas para `conduta` e `triagem` (incluindo rota dinâmica `[step]`), componentes reutilizáveis em `src/components/ui/` e um contexto `src/contexts/TriagemContext.tsx`. Forneça também comandos de instalação, scripts npm e exemplos de uso para `Button`, `Checkbox`, `RadioGroup` e para consumir o `TriagemContext`."

---

Arquivo criado para referência e documentação do projeto. Para abrir: [main/PROMPT_PROJETO.md](main/PROMPT_PROJETO.md)
