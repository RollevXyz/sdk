import SpatialCanvas from "@/components/SpatialCanvas";
import ControlPanel from "@/components/ControlPanel";
import ResourcePanel from "@/components/ResourcePanel";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <SpatialCanvas />
      </div>
      <div className="col-span-1 space-y-4">
        <ControlPanel />
        <ResourcePanel />
      </div>
    </main>
  );
}
