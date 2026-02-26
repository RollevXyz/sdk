"use client";

import { useAgentStore } from "@/store/agentStore";

export default function ResourcePanel() {
  const agents = useAgentStore((state) => state.agents);

  const totalResources = agents.reduce(
    (sum, agent) => sum + agent.resourcesUsed,
    0
  );

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="font-bold">Resource Usage</h2>
      <p>Total Resources Used: {totalResources}</p>
    </div>
  );
}
