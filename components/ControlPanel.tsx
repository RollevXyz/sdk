"use client";

import { useAgentStore } from "@/store/agentStore";
import { runAgent } from "@/lib/agentEngine";
import { v4 as uuid } from "uuid";

export default function ControlPanel() {
  const addAgent = useAgentStore((state) => state.addAgent);
  const agents = useAgentStore((state) => state.agents);

  const createAgent = () => {
    addAgent({
      id: uuid(),
      name: "Worker",
      objective: "Analyze data",
      status: "idle",
      resourcesUsed: 0,
    });
  };

  return (
    <div className="p-4 space-y-4">
      <button
        onClick={createAgent}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Agent
      </button>

      {agents.map((agent) => (
        <div key={agent.id} className="border p-2 rounded">
          <p>{agent.name}</p>
          <p>Status: {agent.status}</p>
          <button
            onClick={() => runAgent(agent.id)}
            className="bg-green-500 text-white px-2 py-1 mt-2 rounded"
          >
            Run
          </button>
        </div>
      ))}
    </div>
  );
}
