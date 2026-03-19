import { Layout } from "main/src/components/ui/Layout";
import React from "react";

// Layout simples que fornece o fundo bege e os botões de acesso
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}