"use client";

import ReactFlow, {
  Background,
  Controls,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { useAgentStore } from "@/store/agentStore";

export default function SpatialCanvas() {
  const agents = useAgentStore((state) => state.agents);

  const nodes: Node[] = agents.map((agent, index) => ({
    id: agent.id,
    position: { x: 100 * index, y: 100 },
    data: { label: `${agent.name} (${agent.status})` },
    type: "default",
  }));

  return (
    <div className="w-full h-[600px] border">
      <ReactFlow nodes={nodes} edges={[]}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
