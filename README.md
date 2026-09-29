# QuantPilot V8.1 FINAL

Aplicação Next.js de automação de trading **non-custodial**, atualmente limitada a **Alpaca Paper Trading**.

## V8
- Landing page comercial responsiva e onboarding mais claro.
- Dashboard V8 com identificação permanente PAPER / NON-CUSTODIAL.
- OAuth individual Alpaca; o usuário não fornece a senha da corretora ao QuantPilot.
- Tokens armazenados criptografados no backend.
- Risk Engine, Kill Switch, limites por ordem/exposição/dia e eventos de risco.
- Backtest, posições, ordens, logs e health monitor.
- Supabase Auth + RLS.
- Sem carteira, depósito, saque ou saldo custodiado pelo QuantPilot.

## Instalação
```bash
npm install
npm run dev
```

Copie `.env.example` para `.env.local` e configure Supabase, Alpaca Connect e segredos. Execute os schemas SQL na ordem indicada em `V8-DEPLOY-CHECKLIST.md`.

## Segurança
Nunca faça commit de `.env.local`, client secret, access tokens ou service-role key. A troca do authorization code OAuth ocorre somente no backend.

## Ambiente
Esta versão usa somente Paper Trading. Backtests e resultados simulados não garantem resultados futuros.
