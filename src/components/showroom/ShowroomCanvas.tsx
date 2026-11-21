"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/components/ThemeProvider";
import {
  OVERVIEW_CAMERA,
  ROOM_SPACING,
  SHOWROOM_ROOMS,
} from "@/data/showroomRooms";
import CameraRig from "./CameraRig";
import ShowroomRoom from "./ShowroomRoom";

interface ShowroomCanvasProps {
  scrollProgressRef: React.MutableRefObject<number>;
  activeStopIndex: number;
  onJumpToStop: (stopIndex: number) => void;
}

/**
 * Sleek horizontal IKEA showroom gallery corridor floor & subtle walkway guide strips.
 */
function HorizontalGalleryFloor({ isLight }: { isLight: boolean }) {
  const totalWidth = SHOWROOM_ROOMS.length * ROOM_SPACING + 22;
  const centerX = ((SHOWROOM_ROOMS.length - 1) * ROOM_SPACING) / 2;

  return (
    <group>
      {/* Continuous Horizontal Showroom Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[centerX, -0.02, 1.5]}
        receiveShadow
      >
        <planeGeometry args={[totalWidth, 26]} />
        <meshStandardMaterial
          color={isLight ? "#E8DDD2" : "#1A0D1A"}
          roughness={0.88}
        />
      </mesh>

      {/* Horizontal Walkway Guide Rail (Sunset Orange & Fuchsia Accent Line) */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[centerX, 0.002, 2.75]}
        receiveShadow
      >
        <planeGeometry args={[SHOWROOM_ROOMS.length * ROOM_SPACING + 4, 0.1]} />
        <meshStandardMaterial
          color="#CE0058"
          emissive="#CE0058"
          emissiveIntensity={0.25}
          roughness={0.5}
        />
      </mesh>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[centerX, 0.002, 3.05]}
        receiveShadow
      >
        <planeGeometry args={[SHOWROOM_ROOMS.length * ROOM_SPACING + 4, 0.04]} />
        <meshStandardMaterial color="#F79B02" roughness={0.5} />
      </mesh>
    </group>
  );
}

export default function ShowroomCanvas({
  scrollProgressRef,
  activeStopIndex,
  onJumpToStop,
}: ShowroomCanvasProps) {
  const { isLight } = useTheme();
  const anyRoomFocused = activeStopIndex > 0;
  const centerX = ((SHOWROOM_ROOMS.length - 1) * ROOM_SPACING) / 2;
  const bgHex = isLight ? "#F4ECE4" : "#120912";

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        position: OVERVIEW_CAMERA.position,
        fov: 42,
        near: 0.1,
        far: 140,
      }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: isLight ? 1.12 : 1.06,
      }}
      className="h-full w-full"
    >
      <color attach="background" args={[bgHex]} />
      <fog attach="fog" args={[bgHex, 22, 54]} />

      {/* Warm Summer Night / Daylight Gallery Ambient + Golden Key + Rose Rim */}
      <ambientLight intensity={isLight ? 0.85 : 0.58} color="#FFF0E0" />
      <directionalLight
        position={[centerX + 8, 22, 16]}
        intensity={1.35}
        color="#FFE9C8"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-28}
        shadow-camera-right={28}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
        shadow-bias={-0.0005}
      />
      <directionalLight
        position={[centerX - 12, 10, -10]}
        intensity={0.48}
        color="#F7A8C9"
      />

      {/* Procedural Indoor Environment Reflections (zero external HDR fetch) */}
      <Suspense fallback={null}>
        <Environment resolution={256} environmentIntensity={0.6}>
          <Lightformer
            form="rect"
            intensity={2.2}
            color="#FFF2E0"
            scale={[14, 6, 1]}
            position={[0, 8, 4]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <Lightformer
            form="rect"
            intensity={1.1}
            color="#F7A8C9"
            scale={[10, 6, 1]}
            position={[-10, 4, -6]}
            rotation={[0, Math.PI / 3, 0]}
          />
          <Lightformer
            form="circle"
            intensity={1.4}
            color="#F79B02"
            scale={6}
            position={[10, 5, 6]}
            rotation={[0, -Math.PI / 3, 0]}
          />
        </Environment>
      </Suspense>

      {/* Soft Grounded Contact Shadows */}
      <ContactShadows
        position={[centerX, 0.01, 0]}
        opacity={0.42}
        scale={48}
        blur={2.1}
        far={8}
        resolution={512}
        color="#0A040A"
      />

      <HorizontalGalleryFloor isLight={isLight} />

      {SHOWROOM_ROOMS.map((room, idx) => (
        <ShowroomRoom
          key={room.id}
          room={room}
          isActive={activeStopIndex === idx + 1}
          anyRoomActive={anyRoomFocused}
          shouldLoadModels={false}
          onSelect={() => onJumpToStop(idx + 1)}
        />
      ))}

      {/* Smooth Horizontal CatmullRomCurve3 Camera Glide */}
      <CameraRig scrollProgressRef={scrollProgressRef} />
    </Canvas>
  );
}
