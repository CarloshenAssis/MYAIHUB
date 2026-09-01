# Progresso das Fases

Acompanhamento da implementação do Personal AI Hub conforme `docs/SPEC-V1.md` (seção 28).

- [x] **FASE 0 — Arquitetura**: projeto Next.js (App Router) + TypeScript + TailwindCSS inicializado, build/lint/typecheck validados.
- [x] **FASE 1 — Design System + Shell**: shadcn/ui manual (registry bloqueado na rede), dark mode padrão, AppShell/Sidebar/Header, busca global funcional sobre dados mockados, dashboard, listagem com filtros, detalhe de item, categorias, favoritos, recentes, estados vazios e de loading, 404. Tudo com dados locais em `src/lib/mock-data.ts` — sem Supabase, auth, backend ou CRUD funcional.
- [ ] **FASE 2 — CRUD completo de Itens**: criar, editar, excluir, listar, pesquisar (dados locais).
- [ ] **FASE 3 — Supabase + Auth**: login, persistência, banco.
- [ ] **FASE 4 — Favoritos, Categorias, Avaliações, Relacionamentos**.
- [ ] **FASE 5 — Importação GitHub**: apenas metadados, nunca executar código.

Cada fase deve ser implementada isoladamente e validada (build, TypeScript, lint) antes de avançar para a próxima, conforme a seção 27 do spec.
