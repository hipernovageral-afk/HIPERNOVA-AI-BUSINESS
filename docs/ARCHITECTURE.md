# Arquitectura

```text
Web / Mobile / WhatsApp / Email
             |
          API Gateway
             |
     Master Orchestrator
             |
    Agent Runtime / Router
             |
  +----------+----------+
  |          |          |
Finance   HR/Payroll   Sales/CRM
  |          |          |
Fiscal   Compliance   Stock
             |
      Workflow Engine
             |
 PostgreSQL + Enterprise Memory
             |
       Audit / Events / BI
```

## Agentes iniciais

Master Orchestrator, Finance, Accounting, Tax, HR, Payroll, Sales, Procurement, Stock, CRM e Audit.

## Autonomia e aprovação

- Nível 0: responder.
- Nível 1: preparar operações.
- Nível 2: executar operações não críticas autorizadas.
- Nível 3: executar workflows previamente aprovados.
- Nível 4: autonomia limitada por políticas explícitas.

Transferências bancárias, pagamentos salariais, alterações fiscais, exclusões, alterações de permissões, fecho contabilístico e outras operações críticas exigem aprovação humana.

## Conhecimento legal

Cada regra deve registar país, código/regulamento, versão, fonte e datas de vigência. Não codificar taxas ou escalões directamente no código. O cálculo fiscal e salarial deve ser determinístico e baseado em parâmetros validados.
