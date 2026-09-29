# QuantPilot V8.1 FINAL — checklist de publicação

## Antes do GitHub
- Não envie `.env.local` nem segredos.
- Revise `.env.example` e mantenha apenas nomes de variáveis.
- Execute `npm install`, `npm run typecheck` e `npm run build`.

## Supabase
Execute os schemas em ordem: `schema.sql`, `schema-v5.sql`, `schema-v6.sql`, `schema-v7.sql`.
Confirme RLS ativo e teste dois usuários diferentes para garantir isolamento.

## Alpaca Connect
Registre o app no Alpaca Connect, cadastre exatamente o callback da aplicação e use OAuth no backend.
V8 deve continuar com `env=paper`. Não troque para live apenas alterando uma variável.

## Vercel
Cadastre as variáveis descritas em `.env.example`, gere um `TOKEN_ENCRYPTION_KEY` forte e um `CRON_SECRET` independente.
Após o deploy, teste login, conexão OAuth, desconexão, Kill Switch, Risk Engine e cron.

## Produto
Não crie saldo, carteira, depósito ou saque dentro do QuantPilot. A interface deve sempre identificar o patrimônio como mantido na corretora.
Antes de oferta comercial/live trading, faça revisão jurídica/regulatória e conclua as aprovações exigidas pela corretora.
