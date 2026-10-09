# HIPERNOVA AI BUSINESS

**AI Business Operating System — Uma empresa inteira dentro da sua IA.**

Plataforma SaaS empresarial multiagente, multi-tenant e preparada para internacionalização, começando por Angola.

## Estado actual

Esta é a estrutura inicial de desenvolvimento (starter v0.1). Inclui uma API Fastify com verificação de saúde, definições dos agentes centrais, encaminhamento determinístico de comandos e um esquema Prisma inicial. **Não é ainda uma versão pronta para produção.**

## Princípios fundamentais

- A IA não substitui motores determinísticos de contabilidade, fiscalidade ou processamento salarial.
- Regras legais devem ser versionadas por país, fonte e período de vigência.
- Operações críticas exigem aprovação humana.
- Dados de cada empresa (tenant) devem permanecer isolados.
- Acções relevantes devem gerar registos de auditoria.
- O sistema não deve inventar dados, legislação, preços ou resultados.
- Segredos e credenciais não devem ser guardados no repositório.

## Estrutura do projecto

- `apps/api` — API HTTP baseada em Node.js, TypeScript e Fastify.
- `packages/core` — definições dos agentes e encaminhador inicial.
- `prisma` — esquema inicial da base de dados PostgreSQL.
- `docs/ARCHITECTURE.md` — visão de arquitectura e limites de autonomia.
- `docs/ROADMAP.md` — etapas de implementação.

## Tecnologias previstas

TypeScript, Node.js, Fastify, PostgreSQL, Prisma, Docker e Railway. Redis e fornecedores de modelos de IA serão integrados em fases posteriores, após configuração e validação.

## Execução local

1. Instalar Node.js 22 ou superior.
2. Copiar `.env.example` para `.env` e configurar `DATABASE_URL`.
3. Instalar dependências com `npm install`.
4. Gerar o cliente Prisma com `npm run db:generate`.
5. Compilar com `npm run build`.
6. Iniciar a API com `npm start`.

A API expõe `GET /health` e `GET /api/v1`.

## Segurança e estado

A autenticação, autorização robusta, isolamento de tenant ao nível das consultas, migrações, testes automatizados, gestão de segredos e monitorização ainda precisam de implementação e validação antes de qualquer utilização real. Não usar esta versão para processar pagamentos, salários ou dados sensíveis em produção.
