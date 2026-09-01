# Personal AI Hub

Seu segundo cérebro para ferramentas, skills, agentes, automações e recursos de IA.

Sistema pessoal de gestão de conhecimento sobre IA — não é um marketplace, SaaS, plataforma multiusuário ou runtime de agentes. Veja a especificação completa em [`docs/SPEC-V1.md`](docs/SPEC-V1.md) e o progresso das fases em [`docs/PROGRESS.md`](docs/PROGRESS.md).

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui
- Supabase (banco e autenticação, a partir da Fase 3)
- Vercel (deploy)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — inicia o build de produção
- `npm run lint` — validação de lint

## Status

Projeto em construção incremental por fases, conforme `docs/SPEC-V1.md` (seção 28). Fase atual: **Fase 1 — Design System + Shell** concluída (dados mockados, sem backend).
