# QuantPilot V8.1 FINAL — Deploy

## 1. GitHub
Envie todo o conteúdo desta pasta para a raiz do repositório. Não envie `.env.local`, `node_modules` ou `.next`.

## 2. Supabase
Em um projeto novo, execute `supabase/schema-v8-final.sql` no SQL Editor. Se você já aplicou os schemas V4→V7, não precisa reaplicar o combinado.

## 3. Vercel — Environment Variables
Cadastre as variáveis de `.env.example` no projeto da Vercel. Em produção, use a URL pública real em `NEXT_PUBLIC_APP_URL` e em `ALPACA_REDIRECT_URI`.

Gere valores longos e aleatórios para `TOKEN_ENCRYPTION_KEY` e `CRON_SECRET`. Nunca coloque esses valores no GitHub.

## 4. Alpaca
Cadastre exatamente a mesma callback URL configurada em `ALPACA_REDIRECT_URI`. Esta versão permanece PAPER e non-custodial.

## 5. Build
A Vercel deve usar `npm run build`. O projeto requer Node.js 20+.

## 6. Cron
`vercel.json` solicita execução a cada 5 minutos. A disponibilidade/frequência de Cron depende do plano da Vercel. Se o plano não aceitar essa frequência, o deploy pode exigir alterar a agenda ou usar um worker/scheduler externo.

## Segurança
O QuantPilot não implementa carteira, depósito ou saque. Tokens OAuth ficam criptografados no banco e são acessados pelo backend com Service Role. Não habilite Live Trading sem revisão técnica, jurídica/regulatória e aprovação da corretora.
