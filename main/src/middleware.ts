import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 1. Tenta pegar o token do cookie
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // 2. Define as rotas que PRECISAM de login (baseado nas suas pastas)
  // Note: Mesmo estando na pasta (main), na URL elas aparecem sem o parênteses
  const rotasPrivadas = ['/introducao', '/triagem', '/conduta', '/plano'];
  
  const ehRotaPrivada = rotasPrivadas.some(rota => pathname.startsWith(rota));

  // DEBUG: Isso vai aparecer no seu terminal do VS Code para sabermos o que está ocorrendo
  console.log(`[MIDDLEWARE] Rota: ${pathname} | Token: ${token ? '✅' : '❌'}`);

  // 3. Se for rota privada e NÃO tiver token, manda para o login
  if (ehRotaPrivada && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 4. Se já estiver logado e tentar ir para o login, manda para a introdução
  if (pathname === '/login' && token) {
  }

  return NextResponse.next();
}

// 5. Configuração do Matcher - O SEGREDO ESTÁ AQUI
export const config = {
  matcher: [
    /*
     * Coincide com todas as rotas, exceto:
     * - api (rotas de API)
     * - _next/static (arquivos estáticos)
     * - _next/image (otimização de imagens)
     * - favicon.ico (ícone da aba)
     * - logo.png (sua logo)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png).*)',
  ],
}