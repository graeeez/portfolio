"use client";

import type { ShowroomModelConfig } from "@/data/showroomRooms";
import ProceduralFurniture from "./ProceduralFurniture";

interface ModelAssetProps {
  model: ShowroomModelConfig;
  loadRealGLB?: boolean;
}

/**
 * Renders crisp, proportionate multi-part 3D Scandinavian furniture for each room.
 */
export default function ModelAsset({ model }: ModelAssetProps) {
  const scaleVec: [number, number, number] =
    typeof model.scale === "number"
      ? [model.scale, model.scale, model.scale]
      : model.scale ?? [1, 1, 1];

  return (
    <group
      position={model.position}
      rotation={model.rotation ?? [0, 0, 0]}
      scale={scaleVec}
    >
      <ProceduralFurniture type={model.fallbackType} />
    </group>
  );
}
