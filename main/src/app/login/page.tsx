"use client"

import { Button } from "main/src/components/ui/Button";
import { Layout } from "main/src/components/ui/Layout";
import Image from 'next/image';
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "main/src/components/ui/Input";
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [show, setShow] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Salva o cookie permitindo acesso global (path: '/')
    Cookies.set("auth_token", "simulado", { expires: 1, path: '/', sameSite: 'Lax' });
    
    // 2. O Pulo do Gato: Trocar o router.push pelo window.location.href
    // Isso força o navegador a fazer um carregamento real, levando o cookie junto sem travar!
    window.location.href = "/introducao";
  };

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-start px-4 md:px-6 pt-4 pb-6 bg-[#fbf8f2]">
        <div className="w-full max-w-md mx-auto">
           <div className="bg-white rounded-3xl shadow-xl p-3 md:p-4 -mt-3">
            <div className="flex flex-col items-center">
               <Image src="/logo.png" alt="Alimenta SUS" width={200} height={200} className="w-32 md:w-40 h-auto mb-0 -mt-4" priority />
              <h1 className="text-center text-occa-green font-semibold text-lg tracking-wide mb-2">LOGIN</h1>
            </div>

            <form onSubmit={handleLogin} className="w-full">
               <div className="space-y-1">
                <Input id="cpf" type="text" placeholder="Digite o CPF" />

                <div className="relative">
                  <Input id="password" type={show ? "text" : "password"} placeholder="Digite a Senha" />
                  <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-occa-brown">
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="text-right pb-4">
                  <span className="text-occa-brown hover:underline text-sm cursor-pointer">Esqueceu a senha?</span>
                </div>

                <div>
                  <Button 
                    type="submit"
                    variant="sim" 
                    className="w-full text-lg mt-2"
                  >
                    Entrar
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}
