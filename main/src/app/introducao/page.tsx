import Link from 'next/link';
import Image from 'next/image';
// Note que removemos todas aquelas importações de hooks (useState, useEffect, useRouter)
// pois a proteção agora é feita pelo Middleware no servidor.

export default function Introducao() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 bg-[#fbf8f2]">

      <div className="w-full max-w-sm mx-auto flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Alimenta SUS"
          width={420}
          height={420}
          className="w-44 sm:w-52 h-auto mb-0"
          priority
        />

        <h2 className="text-3xl sm:text-4xl font-semibold text-[#165b2f] -mt-3 mb-3 text-center">Bem-vindo</h2>

        <p className="text-sm sm:text-base text-[#3b2a1a] max-w-prose mt-2 mb-6 px-6 text-center">
          O Alimenta SUS é um aplicativo de orientação alimentar.
        </p>

        <div className="w-full px-6">
          <Link 
            href="/triagem"
              className="inline-block w-full max-w-md mx-auto bg-[#d94b2b] text-white rounded-full py-3 text-xl shadow-md text-center"
          >
            Vamos começar?
          </Link>
        </div>
      </div>

    </main>
  )
}
