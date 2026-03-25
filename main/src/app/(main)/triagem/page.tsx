"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Layout } from "main/src/components/ui/Layout";

export default function TriagemIntroPage() {
  const router = useRouter();

  return (
    <Layout>
      <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#fbf8f2] px-4 pb-[6vh] pt-[6vh] md:px-8 lg:px-10">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 md:opacity-[0.08]">
          <Image
            src="/logo.png"
            alt="Marca d'água Alimenta SUS"
            width={600}
            height={600}
            className="w-[90%] max-w-lg object-contain md:w-[66%] lg:w-[54%]"
            priority
          />
        </div>

        <div className="relative z-10 flex w-full max-w-[820px] flex-col items-center gap-y-5 text-center md:gap-y-7">
          <h1 className="max-w-[16ch] text-3xl font-extrabold leading-tight text-[#004D33] md:text-5xl">
            No
            <br className="md:hidden" /> Alimenta SUS
          </h1>

          <p className="max-w-[38ch] text-base font-medium leading-relaxed text-[#004D33] md:text-xl md:leading-9">
            faremos perguntas breves a você, e com isso passar-lhe dicas e orientações para apoiar
            na sua alimentação.
          </p>

          <button
            onClick={() => router.push("/triagem/perfil")}
            className="mt-2 w-full max-w-[27rem] rounded-2xl bg-orange-500 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-orange-600 active:scale-95 md:py-5 md:text-2xl"
          >
            Continuar
          </button>
        </div>

        <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4">
          <button className="rounded-full bg-[#005bb5] p-4 text-white shadow-xl transition-transform hover:scale-110">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          </button>
          <button className="rounded-full bg-[#005bb5] p-4 text-white shadow-xl transition-transform hover:scale-110">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
          </button>
        </div>
      </main>
    </Layout>
  );
}
