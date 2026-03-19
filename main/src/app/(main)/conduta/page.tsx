"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/ui/Layout";

export default function CondutaPage() {
  return (
    <Layout>
      <main className="min-h-screen flex flex-col items-center justify-start pt-10 pb-12 px-6 bg-[#fbf8f2]">
        <div className="w-full max-w-md mx-auto text-center">
          <div className="mt-2">
            <Image src="/logo.png" alt="Alimenta SUS" width={260} height={260} className="mx-auto" priority />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl text-occa-green mt-6 leading-tight">
            Como podemos
            <br />
            te ajudar hoje?
          </h1>

          <div className="mt-8 space-y-4">
            <Link href="/triagem/1" className="block bg-[#0f4a2f] text-white rounded-2xl py-5 text-xl font-semibold shadow-md px-6">
              Iniciar triagem
            </Link>

            <Link href="/plano" className="block bg-[#d3b278] text-[#3b2b1f] rounded-2xl py-5 text-xl font-semibold shadow-md px-6">
              Ver plano/roteiro
            </Link>

            <Link href="/conduta/recomendacoes" className="block bg-[#ffd24a] text-[#3b2b1f] rounded-2xl py-5 text-xl font-semibold shadow-md px-6">
              Explorar recomendações
            </Link>
          </div>

          <div className="mt-8 flex justify-center gap-6">
            <button aria-label="Ativar áudio" className="w-12 h-12 rounded-full bg-[#0f4a2f] text-white flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            </button>

            <button aria-label="Libras" className="w-12 h-12 rounded-full bg-[#0f4a2f] text-white flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M6 8v8"/><path d="M18 8v8"/><path d="M6 16h12"/></svg>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}