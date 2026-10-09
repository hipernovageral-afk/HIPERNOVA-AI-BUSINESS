export type AgentStatus = "active" | "paused" | "disabled";

export interface AgentDefinition {
  id: string;
  name: string;
  domain: string;
  status: AgentStatus;
  canExecute: boolean;
  requiresApprovalFor: string[];
}

export const CORE_AGENTS: AgentDefinition[] = [
  { id: "master-orchestrator", name: "Master Orchestrator", domain: "orchestration", status: "active", canExecute: true, requiresApprovalFor: ["bank_transfer", "salary_payment", "tax_rule_change", "data_deletion", "permission_change", "accounting_close"] },
  { id: "finance", name: "Finance Agent", domain: "finance", status: "active", canExecute: true, requiresApprovalFor: ["bank_transfer", "salary_payment"] },
  { id: "accounting", name: "Accounting Agent", domain: "accounting", status: "active", canExecute: true, requiresApprovalFor: ["accounting_close"] },
  { id: "tax", name: "Tax Agent", domain: "tax", status: "active", canExecute: true, requiresApprovalFor: ["tax_rule_change", "tax_submission"] },
  { id: "hr", name: "HR Agent", domain: "hr", status: "active", canExecute: true, requiresApprovalFor: ["termination"] },
  { id: "payroll", name: "Payroll Agent", domain: "payroll", status: "active", canExecute: true, requiresApprovalFor: ["salary_payment"] },
  { id: "sales", name: "Sales Agent", domain: "sales", status: "active", canExecute: true, requiresApprovalFor: [] },
  { id: "procurement", name: "Procurement Agent", domain: "procurement", status: "active", canExecute: true, requiresApprovalFor: ["purchase_order"] },
  { id: "stock", name: "Stock Agent", domain: "stock", status: "active", canExecute: true, requiresApprovalFor: ["stock_adjustment"] },
  { id: "crm", name: "CRM Agent", domain: "crm", status: "active", canExecute: true, requiresApprovalFor: [] },
  { id: "audit", name: "Audit Agent", domain: "audit", status: "active", canExecute: true, requiresApprovalFor: [] }
];