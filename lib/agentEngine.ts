import { useAgentStore } from "@/store/agentStore";

export const runAgent = async (id: string) => {
  const { updateAgent } = useAgentStore.getState();

  updateAgent(id, { status: "working" });

  // Simulate work
  await new Promise((res) => setTimeout(res, 3000));

  updateAgent(id, {
    status: "completed",
    resourcesUsed: Math.floor(Math.random() * 100),
  });
};
