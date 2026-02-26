import { create } from "zustand";
import { Agent } from "@/types/agent";

interface AgentState {
  agents: Agent[];
  addAgent: (agent: Agent) => void;
  updateAgent: (id: string, data: Partial<Agent>) => void;
}

export const useAgentStore = create<AgentState>((set) => ({
  agents: [],
  addAgent: (agent) =>
    set((state) => ({ agents: [...state.agents, agent] })),
  updateAgent: (id, data) =>
    set((state) => ({
      agents: state.agents.map((a) =>
        a.id === id ? { ...a, ...data } : a
      ),
    })),
}));
