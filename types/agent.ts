export type AgentStatus = "idle" | "working" | "completed";

export interface Agent {
  id: string;
  name: string;
  objective: string;
  status: AgentStatus;
  resourcesUsed: number;
}
