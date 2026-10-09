export interface Command {
  tenantId: string;
  userId: string;
  text: string;
  idempotencyKey?: string;
}

export interface AgentTask {
  agentId: string;
  objective: string;
  priority: number;
  requiresApproval: boolean;
}

export function routeCommand(command: Command): AgentTask[] {
  const text = command.text.toLocaleLowerCase("pt");
  const tasks: AgentTask[] = [];

  if (text.includes("venda") || text.includes("vender")) {
    tasks.push(
      { agentId: "sales", objective: command.text, priority: 1, requiresApproval: false },
      { agentId: "stock", objective: "Verificar e preparar actualização do stock decorrente da venda.", priority: 2, requiresApproval: false },
      { agentId: "finance", objective: "Preparar registo do impacto financeiro da venda.", priority: 2, requiresApproval: false },
      { agentId: "accounting", objective: "Preparar informação para tratamento contabilístico.", priority: 3, requiresApproval: false }
    );
  }

  if (text.includes("salário") || text.includes("salario") || text.includes("folha salarial")) {
    tasks.push(
      { agentId: "payroll", objective: command.text, priority: 1, requiresApproval: true },
      { agentId: "hr", objective: "Validar dados dos trabalhadores e período.", priority: 2, requiresApproval: false },
      { agentId: "finance", objective: "Preparar validação da disponibilidade financeira.", priority: 2, requiresApproval: false }
    );
  }

  if (text.includes("transferência bancária") || text.includes("transferencia bancaria") || text.includes("pagar salário") || text.includes("pagar salario")) {
    tasks.push({ agentId: "master-orchestrator", objective: "Suspender execução e solicitar aprovação humana explícita.", priority: 0, requiresApproval: true });
  }

  if (tasks.length === 0) {
    tasks.push({
      agentId: "master-orchestrator",
      objective: command.text,
      priority: 1,
      requiresApproval: false
    });
  }

  return tasks;
}