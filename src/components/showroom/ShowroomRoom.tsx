"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ShowroomRoomConfig } from "@/data/showroomRooms";
import ModelAsset from "./ModelAsset";
import RoomHotspot from "./RoomHotspot";

interface ShowroomRoomProps {
  room: ShowroomRoomConfig;
  isActive: boolean;
  anyRoomActive: boolean;
  shouldLoadModels: boolean;
  onSelect: (roomId: string) => void;
}

const ROOM_W = 4.8;
const ROOM_D = 3.8;
const WALL_H = 2.85;
const WALL_T = 0.14;

export default function ShowroomRoom({
  room,
  isActive,
  anyRoomActive,
  shouldLoadModels,
  onSelect,
}: ShowroomRoomProps) {
  const [hovered, setHovered] = useState(false);
  const lightRef = useRef<THREE.PointLight | null>(null);

  // Smooth theatrical light fade-in when this room comes into scroll focus
  useFrame((_, rawDelta) => {
    if (!lightRef.current) return;
    const delta = Math.min(rawDelta, 0.05);
    const targetIntensity = isActive ? 8.2 : anyRoomActive ? 1.8 : 3.8;
    lightRef.current.intensity = THREE.MathUtils.damp(
      lightRef.current.intensity,
      targetIntensity,
      4.5,
      delta
    );
  });

  return (
    <group
      position={room.worldPosition}
      rotation={[0, room.worldRotationY, 0]}
    >
      {/* Warm Wood/Stone Room Floor */}
      <mesh
        position={[0, 0.04, 0]}
        receiveShadow
        onClick={(e) => {
          e.stopPropagation();
          onSelect(room.id);
        }}
        onPointerOver={(e) => {
          if (!anyRoomActive) {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = "pointer";
          }
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <boxGeometry args={[ROOM_W, 0.08, ROOM_D]} />
        <meshStandardMaterial color={room.floorColor} roughness={0.72} />
      </mesh>

      {/* Glowing Jewel-Tone Floor Trim */}
      <mesh position={[0, 0.015, 0]} receiveShadow>
        <boxGeometry args={[ROOM_W + 0.18, 0.03, ROOM_D + 0.18]} />
        <meshStandardMaterial
          color={hovered || isActive ? "#F79B02" : room.accentColor}
          emissive={hovered || isActive ? "#F79B02" : room.accentColor}
          emissiveIntensity={hovered || isActive ? 0.4 : 0.12}
          roughness={0.45}
        />
      </mesh>

      {/* Back Wall */}
      <mesh
        position={[0, WALL_H / 2 + 0.04, -ROOM_D / 2 + WALL_T / 2]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[ROOM_W, WALL_H, WALL_T]} />
        <meshStandardMaterial color={room.wallColor} roughness={0.85} />
      </mesh>

      {/* Left Wall */}
      <mesh
        position={[-ROOM_W / 2 + WALL_T / 2, WALL_H / 2 + 0.04, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[WALL_T, WALL_H, ROOM_D]} />
        <meshStandardMaterial color={room.wallColor} roughness={0.85} />
      </mesh>

      {/* Right Wall */}
      <mesh
        position={[ROOM_W / 2 - WALL_T / 2, WALL_H / 2 + 0.04, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[WALL_T, WALL_H, ROOM_D]} />
        <meshStandardMaterial color={room.wallColor} roughness={0.85} />
      </mesh>

      {/* Crisp Baseboard */}
      <mesh position={[0, 0.14, -ROOM_D / 2 + WALL_T + 0.01]}>
        <boxGeometry args={[ROOM_W - WALL_T * 2, 0.12, 0.025]} />
        <meshStandardMaterial color="#FFF9F2" roughness={0.4} />
      </mesh>

      {/* Framed Summer-Night Artwork */}
      <group position={[0, 1.82, -ROOM_D / 2 + WALL_T + 0.02]}>
        <mesh castShadow>
          <boxGeometry args={[0.92, 0.64, 0.03]} />
          <meshStandardMaterial color="#1C0F1C" roughness={0.45} />
        </mesh>
        <mesh position={[0, 0, 0.018]}>
          <planeGeometry args={[0.8, 0.52]} />
          <meshStandardMaterial color="#FFF5EB" roughness={0.7} />
        </mesh>
        <mesh position={[-0.12, 0, 0.021]}>
          <planeGeometry args={[0.32, 0.32]} />
          <meshStandardMaterial color={room.accentColor} roughness={0.6} />
        </mesh>
        <mesh position={[0.18, -0.05, 0.021]}>
          <planeGeometry args={[0.2, 0.2]} />
          <meshStandardMaterial color="#F79B02" roughness={0.6} />
        </mesh>
      </group>

      {/* Warm Summer Night Interior Lamp (fades smoothly in/out with scroll focus) */}
      <pointLight
        ref={lightRef}
        position={[0, 2.45, 0.2]}
        color={room.lampTint}
        intensity={3.8}
        distance={9.5}
        decay={2}
      />

      {/* Realistic Poly Haven 3D Furniture & Props */}
      <group position={[0, 0.08, 0]}>
        {room.models.map((model) => (
          <ModelAsset
            key={model.id}
            model={model}
            loadRealGLB={shouldLoadModels}
          />
        ))}
      </group>

      {/* Clickable 3D Hotspot (shown in overview so visitors can also click directly) */}
      <RoomHotspot
        room={room}
        isActive={isActive}
        anyRoomActive={anyRoomActive}
        onSelect={onSelect}
      />
    </group>
  );
}
