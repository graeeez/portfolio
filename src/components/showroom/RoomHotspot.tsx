"use client";

import { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import type { ShowroomRoomConfig } from "@/data/showroomRooms";

interface RoomHotspotProps {
  room: ShowroomRoomConfig;
  isActive: boolean;
  anyRoomActive: boolean;
  onSelect: (roomId: string) => void;
}

export default function RoomHotspot({
  room,
  isActive,
  anyRoomActive,
  onSelect,
}: RoomHotspotProps) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  if (anyRoomActive) return null;

  return (
    <group position={room.hotspotOffset}>
      {/* Glowing Summer-Night Pin Sphere */}
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onSelect(room.id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.25 : 1}
      >
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial
          color={hovered ? "#F79B02" : "#CE0058"}
          emissive={hovered ? "#F79B02" : "#CE0058"}
          emissiveIntensity={hovered ? 0.75 : 0.45}
          roughness={0.3}
        />
      </mesh>

      {/* Outer Ring Accent */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} scale={hovered ? 1.35 : 1}>
        <ringGeometry args={[0.3, 0.39, 32]} />
        <meshBasicMaterial color="#F79B02" side={2} />
      </mesh>

      {/* Floating Editorial Label */}
      <Html
        center
        distanceFactor={15}
        position={[0, 0.72, 0]}
        zIndexRange={[20, 0]}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(room.id);
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`group flex items-center gap-2 whitespace-nowrap rounded-xl border px-3 py-1.5 text-left transition-all duration-300 ${
            hovered || isActive
              ? "-translate-y-1 border-[#F79B02] bg-[#CE0058] text-[#FFF5EB] shadow-xl"
              : "border-white/20 bg-[#1C0F1C]/95 text-[#FFF5EB] shadow-lg"
          }`}
        >
          <span
            className={`rounded-md px-1.5 py-0.5 font-mono text-[9px] font-bold ${
              hovered || isActive
                ? "bg-[#F79B02] text-[#120912]"
                : "bg-[#DF5000] text-[#FFF5EB]"
            }`}
          >
            {room.catalogNo}
          </span>
          <div>
            <span className="block font-display text-xs font-extrabold leading-tight">
              {room.title}
            </span>
            <span className="block font-mono text-[9px] font-semibold uppercase tracking-wider text-[#F79B02]">
              {room.roomLabel}
            </span>
          </div>
        </button>
      </Html>
    </group>
  );
}
