# Personal AI Hub

Seu segundo cérebro para ferramentas, skills, agentes, automações e recursos de IA

**Versão:** 1.0
**Status:** Planejamento
**Objetivo:** Uso pessoal
**Metodologia:** Construção incremental e pragmática

## 1. PROPÓSITO

### Problema

Hoje o conhecimento fica espalhado entre:

- GitHub
- YouTube
- Reddit
- Discord
- Claude Code
- ChatGPT
- Gemini
- Blogs
- Favoritos do navegador
- Notion
- Anotações

Com o tempo acontece:

- esqueço ferramentas interessantes;
- não lembro onde vi determinada solução;
- testo a mesma ferramenta duas vezes;
- não consigo comparar alternativas;
- perco contexto sobre porque salvei algo.

### Missão do projeto

O Personal AI Hub existe para permitir que Carlos encontre, organize, avalie e reutilize rapidamente qualquer ferramenta, skill, agente ou recurso de IA descoberto ao longo do tempo.

### Regra principal

Este projeto NÃO é um marketplace.
Este projeto NÃO é um SaaS.
Este projeto NÃO é uma plataforma multiusuário.
Este projeto NÃO é um runtime de agentes.

Este projeto é um sistema pessoal de gestão de conhecimento sobre IA.

## 2. OBJETIVOS DA V1

A V1 deve resolver apenas um problema:

> "Eu vi uma ferramenta meses atrás e quero encontrá-la em menos de 10 segundos."

Se isso funcionar, a V1 é um sucesso.

## 3. NÃO OBJETIVOS

Não implementar:

- OpenHands integrado
- execução de agentes
- execução de skills
- GPU
- containers
- workflows
- marketplace
- billing
- multiusuário complexo
- infraestrutura distribuída

Tudo isso fica para um roadmap futuro.

## 4. STACK

**Frontend:**

- Next.js
- TypeScript
- TailwindCSS
- shadcn/ui

**Banco:**

- Supabase

**Autenticação:**

- Supabase Auth

**Deploy:**

- Vercel

**Controle de versão:**

- GitHub

## 5. CONCEITO CENTRAL

Tudo será tratado como um **Item**.

Não importa se é:

- ferramenta
- skill
- agente
- framework
- biblioteca
- automação
- modelo

Para a V1 tudo é apenas um Item.

## 6. ESTRUTURA DO ITEM

```
Item
├── id
├── name
├── slug
├── description
├── type
├── category
├── source
├── repository_url
├── website_url
├── documentation_url
├── image_url
├── notes
├── personal_review
├── rating
├── status
├── tags
├── created_at
└── updated_at
```

## 7. TIPOS

Tipos iniciais:

- Tool
- Skill
- Agent
- Workflow
- Resource

Tipos existem apenas para organização visual. Nenhum comportamento especial será criado na V1.

## 8. CATEGORIAS

Categorias iniciais:

- **Coding** — Programação e desenvolvimento.
- **AI** — Modelos, LLMs e IA.
- **Design** — Design e UX.
- **Automation** — Automação e integrações.
- **Data** — Dados e analytics.
- **Productivity** — Produtividade pessoal.
- **Business** — Negócios e gestão.
- **Research** — Pesquisa e aprendizado.

## 9. STATUS

Cada item possui um status. Valores:

- Discovered
- Testing
- Approved
- Archived

**Significado:**

- **Discovered** — Encontrei mas ainda não usei.
- **Testing** — Estou avaliando.
- **Approved** — Aprovado e recomendado.
- **Archived** — Não quero mais usar.

## 10. AVALIAÇÃO PESSOAL

Cada item deverá possuir avaliação. Exemplo: `★★★★★`

Escala:

- 1 estrela
- 2 estrelas
- 3 estrelas
- 4 estrelas
- 5 estrelas

## 11. NOTAS PESSOAIS

Campo obrigatório na interface. Exemplo:

```
Testei para geração de código.

Pontos fortes:
- rápido
- simples

Pontos fracos:
- documentação limitada

Usaria novamente:
Sim
```

O objetivo é preservar contexto. Não apenas salvar links.

## 12. FONTE DA DESCOBERTA

Cada item deve registrar onde foi encontrado. Exemplos:

- GitHub
- YouTube
- Claude Code
- ChatGPT
- Reddit
- Discord
- LinkedIn
- Blog
- Indicação

Isso ajuda a recuperar contexto posteriormente.

## 13. RELACIONAMENTOS

Itens poderão possuir relações simples. Exemplos:

```
OpenHands
  ↓ Alternativa de
Claude Code

n8n
  ↓ Integra com
Supabase
```

Objetivo: criar um mapa mental do ecossistema.

## 14. DASHBOARD

A página inicial será o Dashboard.

**Header**

- logo
- busca global
- botão adicionar item
- perfil

**Sidebar**

- Dashboard
- Todos os itens
- Favoritos
- Categorias
- Recentes
- Configurações

**Área principal**

Mostrar:

- quantidade de itens
- itens recentes
- itens favoritos
- categorias
- busca rápida

## 15. BUSCA

A busca será a funcionalidade mais importante do sistema.

Deve pesquisar:

- nome
- descrição
- tags
- notas
- categoria
- status

Objetivo: encontrar qualquer item em poucos segundos.

## 16. FAVORITOS

Permitir favoritar itens.

Página: `/favorites`

Objetivo: acesso rápido às ferramentas mais utilizadas.

## 17. FILTROS

Filtros:

- categoria
- tipo
- status
- favorito
- avaliação

Combinação livre.

## 18. DETALHE DO ITEM

Página: `/items/[slug]`

Mostrar:

- nome
- descrição
- imagens
- categoria
- tipo
- status
- avaliação
- notas
- GitHub
- documentação
- site oficial
- relacionamentos
- data de criação

## 19. ADICIONAR ITEM

Fluxo: `Novo Item`

Campos:

- nome
- descrição
- categoria
- tipo
- tags
- GitHub
- website
- documentação
- notas
- avaliação
- status
- fonte

Validação básica.

## 20. IMPORTAÇÃO DE GITHUB

Fase posterior da V1.

Fluxo:

```
Colar URL GitHub
  ↓
Buscar metadados
  ↓
Mostrar preview
  ↓
Confirmar
  ↓
Salvar
```

Importar apenas:

- nome
- descrição
- linguagem principal
- estrelas
- licença
- URL

NUNCA executar código.
NUNCA clonar automaticamente.
NUNCA rodar scripts.

## 21. BANCO DE DADOS

Tabelas:

- users
- items
- categories
- tags
- item_tags
- favorites
- relationships

## 22. DESIGN

O sistema deve parecer:

- moderno
- premium
- limpo
- organizado

Não deve parecer:

- painel administrativo genérico
- CRUD sem identidade visual

Prioridades:

- excelente tipografia;
- leitura rápida;
- espaçamento consistente;
- uso eficiente de cores.

## 23. RESPONSIVIDADE

O sistema deve funcionar perfeitamente em:

- desktop
- notebook
- tablet
- celular

Mobile deve ser prioridade desde o início.

## 24. PRINCÍPIO DE SIMPLICIDADE

Sempre escolher:

```
Mais simples
  ↓
Mais rápido
  ↓
Mais útil
```

Antes de: `Mais sofisticado`

## 25. ROADMAP FUTURO

Depois da V1 poderão existir:

**V2**

- importação automática GitHub
- leitura de SKILL.md
- sincronização

**V3**

- execução limitada de ações

**V4**

- integração com agentes

**V5**

- orquestração

Nenhuma dessas fases deve impactar a construção da V1.

## 26. DEFINIÇÃO DE PRONTO

A V1 estará pronta quando Carlos conseguir:

- ✅ Encontrar rapidamente qualquer ferramenta salva
- ✅ Registrar novas descobertas em menos de 1 minuto
- ✅ Adicionar observações pessoais
- ✅ Avaliar ferramentas
- ✅ Organizar por categorias
- ✅ Pesquisar tudo
- ✅ Usar no celular
- ✅ Usar no computador
- ✅ Nunca mais depender da memória para lembrar onde viu uma ferramenta

## 27. REGRA DE TRABALHO DO CLAUDE CODE

Antes de qualquer implementação:

1. Ler este SPEC completo.
2. Identificar a fase atual.
3. Implementar apenas a fase autorizada.
4. Não antecipar funcionalidades futuras.
5. Validar build.
6. Validar TypeScript.
7. Validar lint.
8. Atualizar documentação.

## 28. FASES

**FASE 0 — Arquitetura**

- Next.js
- TypeScript
- Tailwind
- Git
- documentação

Parar ao concluir.

**FASE 1 — Design System**

- layout
- sidebar
- dashboard mockado
- busca visual
- cards
- responsividade

Parar ao concluir.

**FASE 2 — CRUD completo de Itens**

- criar
- editar
- excluir
- listar
- pesquisar

Usando dados locais. Parar ao concluir.

**FASE 3 — Supabase + Auth**

- login
- persistência
- banco

Parar ao concluir.

**FASE 4 — Favoritos, Categorias, Avaliações, Relacionamentos**

Parar ao concluir.

**FASE 5 — Importação GitHub**

Somente metadados. Nunca executar código. Parar ao concluir.

## RESUMO

O projeto não é um sistema de agentes.
O projeto não é uma plataforma de IA.

O projeto é: um segundo cérebro para organizar, encontrar, avaliar e reutilizar o conhecimento acumulado sobre ferramentas, skills, agentes e recursos de IA.
