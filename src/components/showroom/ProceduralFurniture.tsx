"use client";

import type { FallbackFurnitureType } from "@/data/showroomRooms";

interface ProceduralFurnitureProps {
  type: FallbackFurnitureType;
}

const OAK = "#C9A679";
const OAK_DARK = "#9E7B52";
const LINEN = "#EDE9E0";
const CHARCOAL = "#232B35";
const WHITE = "#F7F7F5";
const NAVY = "#10375C";
const GOLD = "#F3C623";
const TERRACOTTA = "#C97B5D";
const LEAF = "#4A7C59";
const LEAF_LIGHT = "#619970";
const METAL = "#B5BDC4";
const LAMP_GLOW = "#FFF2CC";

/**
 * Clean, multi-part PBR Scandinavian furniture fallbacks.
 * Rendered automatically whenever a room's real .glb model has not been placed in /public/models yet.
 */
export default function ProceduralFurniture({ type }: ProceduralFurnitureProps) {
  switch (type) {
    case "sofa":
      return (
        <group>
          {/* Legs */}
          {[
            [-0.95, 0.08, -0.32],
            [0.95, 0.08, -0.32],
            [-0.95, 0.08, 0.32],
            [0.95, 0.08, 0.32],
          ].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]} castShadow>
              <cylinderGeometry args={[0.03, 0.022, 0.16, 10]} />
              <meshStandardMaterial color={OAK_DARK} roughness={0.6} />
            </mesh>
          ))}
          {/* Base frame */}
          <mesh position={[0, 0.28, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.2, 0.24, 0.88]} />
            <meshStandardMaterial color={LINEN} roughness={0.9} />
          </mesh>
          {/* Seat cushions (3) */}
          {[-0.68, 0, 0.68].map((x, i) => (
            <mesh key={i} position={[x, 0.44, 0.04]} castShadow receiveShadow>
              <boxGeometry args={[0.64, 0.14, 0.72]} />
              <meshStandardMaterial color={WHITE} roughness={0.92} />
            </mesh>
          ))}
          {/* Backrest */}
          <mesh position={[0, 0.68, -0.32]} castShadow receiveShadow>
            <boxGeometry args={[2.16, 0.56, 0.22]} />
            <meshStandardMaterial color={LINEN} roughness={0.9} />
          </mesh>
          {/* Armrests */}
          <mesh position={[-1.02, 0.52, 0]} castShadow>
            <boxGeometry args={[0.18, 0.38, 0.88]} />
            <meshStandardMaterial color={LINEN} roughness={0.9} />
          </mesh>
          <mesh position={[1.02, 0.52, 0]} castShadow>
            <boxGeometry args={[0.18, 0.38, 0.88]} />
            <meshStandardMaterial color={LINEN} roughness={0.9} />
          </mesh>
          {/* Accent throw pillow */}
          <mesh position={[-0.72, 0.62, -0.14]} rotation={[0.15, 0.25, 0.08]} castShadow>
            <boxGeometry args={[0.34, 0.34, 0.12]} />
            <meshStandardMaterial color={GOLD} roughness={0.85} />
          </mesh>
          <mesh position={[0.74, 0.62, -0.14]} rotation={[0.12, -0.3, -0.05]} castShadow>
            <boxGeometry args={[0.32, 0.32, 0.12]} />
            <meshStandardMaterial color={NAVY} roughness={0.85} />
          </mesh>
        </group>
      );

    case "coffee-table":
      return (
        <group>
          <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.56, 0.56, 0.05, 32]} />
            <meshStandardMaterial color={OAK} roughness={0.55} />
          </mesh>
          {[
            [-0.28, 0.2, -0.28],
            [0.28, 0.2, -0.28],
            [-0.28, 0.2, 0.28],
            [0.28, 0.2, 0.28],
          ].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]} castShadow>
              <cylinderGeometry args={[0.025, 0.018, 0.4, 10]} />
              <meshStandardMaterial color={OAK_DARK} roughness={0.6} />
            </mesh>
          ))}
          {/* Lifestyle book & ceramic mug */}
          <mesh position={[-0.12, 0.445, 0.05]} rotation={[0, 0.2, 0]} castShadow>
            <boxGeometry args={[0.26, 0.04, 0.18]} />
            <meshStandardMaterial color={NAVY} roughness={0.7} />
          </mesh>
          <mesh position={[0.18, 0.47, -0.08]} castShadow>
            <cylinderGeometry args={[0.045, 0.04, 0.09, 14]} />
            <meshStandardMaterial color={WHITE} roughness={0.35} />
          </mesh>
        </group>
      );

    case "tv-unit":
      return (
        <group>
          <mesh position={[0, 0.28, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.55, 0.4, 0.42]} />
            <meshStandardMaterial color={WHITE} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.49, 0]} castShadow>
            <boxGeometry args={[1.58, 0.04, 0.44]} />
            <meshStandardMaterial color={OAK} roughness={0.55} />
          </mesh>
          {/* TV Stand + Flat Screen */}
          <mesh position={[0, 0.58, -0.05]} castShadow>
            <boxGeometry args={[0.3, 0.14, 0.14]} />
            <meshStandardMaterial color={CHARCOAL} roughness={0.4} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.96, -0.05]} castShadow>
            <boxGeometry args={[1.18, 0.66, 0.05]} />
            <meshStandardMaterial color={CHARCOAL} roughness={0.3} metalness={0.4} />
          </mesh>
          <mesh position={[0, 0.96, -0.02]}>
            <planeGeometry args={[1.1, 0.58]} />
            <meshStandardMaterial color={NAVY} emissive={NAVY} emissiveIntensity={0.35} roughness={0.2} />
          </mesh>
        </group>
      );

    case "floor-lamp":
      return (
        <group>
          <mesh position={[0, 0.025, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.22, 0.05, 24]} />
            <meshStandardMaterial color={CHARCOAL} roughness={0.4} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.85, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 1.65, 12]} />
            <meshStandardMaterial color={CHARCOAL} roughness={0.35} metalness={0.6} />
          </mesh>
          <mesh position={[0, 1.65, 0]} castShadow>
            <cylinderGeometry args={[0.14, 0.24, 0.3, 24, 1, true]} />
            <meshStandardMaterial
              color={LAMP_GLOW}
              emissive={LAMP_GLOW}
              emissiveIntensity={0.65}
              roughness={0.7}
              side={2}
            />
          </mesh>
        </group>
      );

    case "rug":
      return (
        <mesh position={[0, 0.01, 0]} receiveShadow>
          <boxGeometry args={[2.5, 0.02, 1.85]} />
          <meshStandardMaterial color="#E6DFD3" roughness={0.98} />
        </mesh>
      );

    case "desk":
      return (
        <group>
          {/* Tabletop */}
          <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.85, 0.06, 0.78]} />
            <meshStandardMaterial color={OAK} roughness={0.5} />
          </mesh>
          {/* Left & Right Trestle Legs */}
          {[-0.82, 0.82].map((x, i) => (
            <mesh key={i} position={[x, 0.37, 0]} castShadow>
              <boxGeometry args={[0.06, 0.74, 0.7]} />
              <meshStandardMaterial color={WHITE} roughness={0.45} />
            </mesh>
          ))}
          {/* Drawer unit under right side */}
          <mesh position={[0.56, 0.37, 0]} castShadow>
            <boxGeometry args={[0.42, 0.68, 0.66]} />
            <meshStandardMaterial color={WHITE} roughness={0.5} />
          </mesh>
        </group>
      );

    case "office-chair":
      return (
        <group>
          {/* Base star */}
          <mesh position={[0, 0.08, 0]} castShadow>
            <cylinderGeometry args={[0.28, 0.3, 0.05, 16]} />
            <meshStandardMaterial color={CHARCOAL} roughness={0.4} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.26, 0]} castShadow>
            <cylinderGeometry args={[0.035, 0.035, 0.36, 12]} />
            <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Seat */}
          <mesh position={[0, 0.46, 0]} castShadow>
            <boxGeometry args={[0.5, 0.08, 0.48]} />
            <meshStandardMaterial color={NAVY} roughness={0.85} />
          </mesh>
          {/* Backrest */}
          <mesh position={[0, 0.78, -0.22]} castShadow>
            <boxGeometry args={[0.46, 0.56, 0.07]} />
            <meshStandardMaterial color={NAVY} roughness={0.85} />
          </mesh>
        </group>
      );

    case "monitor":
      return (
        <group>
          <mesh position={[0, 0.02, 0]} castShadow>
            <boxGeometry args={[0.28, 0.02, 0.2]} />
            <meshStandardMaterial color={METAL} metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.16, -0.05]} castShadow>
            <boxGeometry args={[0.05, 0.28, 0.04]} />
            <meshStandardMaterial color={METAL} metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.36, -0.02]} castShadow>
            <boxGeometry args={[0.88, 0.46, 0.035]} />
            <meshStandardMaterial color={CHARCOAL} roughness={0.35} />
          </mesh>
          <mesh position={[0, 0.36, 0.002]}>
            <planeGeometry args={[0.82, 0.4]} />
            <meshStandardMaterial color="#10375C" emissive="#1B4F7A" emissiveIntensity={0.45} />
          </mesh>
        </group>
      );

    case "shelves":
      return (
        <group>
          {/* Side frames */}
          {[-0.45, 0.45].map((x, i) => (
            <mesh key={i} position={[x, 0.95, 0]} castShadow>
              <boxGeometry args={[0.05, 1.9, 0.34]} />
              <meshStandardMaterial color={WHITE} roughness={0.5} />
            </mesh>
          ))}
          {/* 5 Shelves */}
          {[0.08, 0.5, 0.95, 1.4, 1.85].map((y, i) => (
            <mesh key={i} position={[0, y, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.92, 0.04, 0.34]} />
              <meshStandardMaterial color={OAK} roughness={0.55} />
            </mesh>
          ))}
          {/* Books & decor */}
          <mesh position={[-0.22, 1.07, 0]} castShadow>
            <boxGeometry args={[0.24, 0.2, 0.18]} />
            <meshStandardMaterial color={NAVY} roughness={0.7} />
          </mesh>
          <mesh position={[0.18, 1.52, 0]} castShadow>
            <boxGeometry args={[0.28, 0.2, 0.2]} />
            <meshStandardMaterial color={GOLD} roughness={0.7} />
          </mesh>
        </group>
      );

    case "desk-lamp":
      return (
        <group>
          <mesh position={[0, 0.02, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.09, 0.04, 16]} />
            <meshStandardMaterial color={GOLD} roughness={0.35} metalness={0.4} />
          </mesh>
          <mesh position={[0, 0.2, -0.02]} rotation={[0.15, 0, 0]} castShadow>
            <cylinderGeometry args={[0.012, 0.012, 0.36, 10]} />
            <meshStandardMaterial color={CHARCOAL} roughness={0.4} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.36, 0.03]} rotation={[0.4, 0, 0]} castShadow>
            <coneGeometry args={[0.09, 0.12, 16]} />
            <meshStandardMaterial color={GOLD} emissive={LAMP_GLOW} emissiveIntensity={0.3} roughness={0.4} />
          </mesh>
        </group>
      );

    case "dining-table":
      return (
        <group>
          <mesh position={[0, 0.74, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.9, 0.07, 1.05]} />
            <meshStandardMaterial color={OAK} roughness={0.52} />
          </mesh>
          {[
            [-0.84, 0.36, -0.42],
            [0.84, 0.36, -0.42],
            [-0.84, 0.36, 0.42],
            [0.84, 0.36, 0.42],
          ].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]} castShadow>
              <cylinderGeometry args={[0.035, 0.025, 0.72, 10]} />
              <meshStandardMaterial color={OAK_DARK} roughness={0.58} />
            </mesh>
          ))}
          {/* Centerpiece ceramic bowl */}
          <mesh position={[0, 0.82, 0]} castShadow>
            <cylinderGeometry args={[0.15, 0.1, 0.1, 18]} />
            <meshStandardMaterial color={WHITE} roughness={0.3} />
          </mesh>
        </group>
      );

    case "dining-chair":
      return (
        <group>
          {[
            [-0.18, 0.22, -0.18],
            [0.18, 0.22, -0.18],
            [-0.18, 0.22, 0.18],
            [0.18, 0.22, 0.18],
          ].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]} castShadow>
              <cylinderGeometry args={[0.022, 0.018, 0.44, 8]} />
              <meshStandardMaterial color={OAK_DARK} roughness={0.6} />
            </mesh>
          ))}
          <mesh position={[0, 0.45, 0]} castShadow>
            <boxGeometry args={[0.42, 0.05, 0.42]} />
            <meshStandardMaterial color={OAK} roughness={0.55} />
          </mesh>
          <mesh position={[0, 0.72, -0.18]} castShadow>
            <boxGeometry args={[0.4, 0.48, 0.04]} />
            <meshStandardMaterial color={OAK} roughness={0.55} />
          </mesh>
        </group>
      );

    case "pendant-light":
      return (
        <group>
          <mesh position={[0, 0.32, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 0.65, 8]} />
            <meshStandardMaterial color={CHARCOAL} roughness={0.4} />
          </mesh>
          <mesh position={[0, -0.02, 0]} castShadow>
            <sphereGeometry args={[0.24, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
            <meshStandardMaterial color={GOLD} roughness={0.35} metalness={0.35} side={2} />
          </mesh>
          <mesh position={[0, -0.08, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={LAMP_GLOW} emissive={LAMP_GLOW} emissiveIntensity={1.2} />
          </mesh>
        </group>
      );

    case "bed":
      return (
        <group>
          {/* Wooden platform frame */}
          <mesh position={[0, 0.18, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.68, 0.24, 2.08]} />
            <meshStandardMaterial color={OAK} roughness={0.55} />
          </mesh>
          {/* Headboard */}
          <mesh position={[0, 0.68, -0.98]} castShadow>
            <boxGeometry args={[1.72, 0.92, 0.1]} />
            <meshStandardMaterial color={OAK} roughness={0.55} />
          </mesh>
          {/* Mattress & Duvet */}
          <mesh position={[0, 0.4, 0.04]} castShadow receiveShadow>
            <boxGeometry args={[1.58, 0.22, 1.94]} />
            <meshStandardMaterial color={WHITE} roughness={0.9} />
          </mesh>
          <mesh position={[0, 0.45, 0.32]} castShadow>
            <boxGeometry args={[1.6, 0.16, 1.32]} />
            <meshStandardMaterial color="#D8E0EA" roughness={0.92} />
          </mesh>
          {/* Pillows */}
          <mesh position={[-0.38, 0.57, -0.68]} castShadow>
            <boxGeometry args={[0.62, 0.14, 0.38]} />
            <meshStandardMaterial color={WHITE} roughness={0.92} />
          </mesh>
          <mesh position={[0.38, 0.57, -0.68]} castShadow>
            <boxGeometry args={[0.62, 0.14, 0.38]} />
            <meshStandardMaterial color={GOLD} roughness={0.9} />
          </mesh>
        </group>
      );

    case "nightstand":
      return (
        <group>
          <mesh position={[0, 0.28, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.48, 0.44, 0.42]} />
            <meshStandardMaterial color={WHITE} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.52, 0]} castShadow>
            <boxGeometry args={[0.5, 0.04, 0.44]} />
            <meshStandardMaterial color={OAK} roughness={0.55} />
          </mesh>
        </group>
      );

    case "wardrobe":
      return (
        <group>
          <mesh position={[0, 1.08, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.45, 2.16, 0.58]} />
            <meshStandardMaterial color={WHITE} roughness={0.48} />
          </mesh>
          {/* Center door seam + handles */}
          <mesh position={[0, 1.08, 0.295]}>
            <boxGeometry args={[0.015, 2.08, 0.01]} />
            <meshStandardMaterial color="#D0D5DD" />
          </mesh>
          <mesh position={[-0.08, 1.08, 0.31]}>
            <boxGeometry args={[0.025, 0.22, 0.03]} />
            <meshStandardMaterial color={OAK_DARK} />
          </mesh>
          <mesh position={[0.08, 1.08, 0.31]}>
            <boxGeometry args={[0.025, 0.22, 0.03]} />
            <meshStandardMaterial color={OAK_DARK} />
          </mesh>
        </group>
      );

    case "kitchen-counter":
      return (
        <group>
          {/* Lower cabinets */}
          <mesh position={[0, 0.44, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.5, 0.88, 0.65]} />
            <meshStandardMaterial color={WHITE} roughness={0.45} />
          </mesh>
          {/* Butcher block countertop */}
          <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.54, 0.05, 0.68]} />
            <meshStandardMaterial color={OAK} roughness={0.5} />
          </mesh>
          {/* Upper wall cabinets */}
          <mesh position={[0, 1.85, -0.14]} castShadow>
            <boxGeometry args={[2.4, 0.65, 0.36]} />
            <meshStandardMaterial color={WHITE} roughness={0.45} />
          </mesh>
          {/* Sink basin */}
          <mesh position={[-0.45, 0.93, 0]}>
            <boxGeometry args={[0.56, 0.02, 0.42]} />
            <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.25} />
          </mesh>
        </group>
      );

    case "kitchen-island":
      return (
        <group>
          <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.65, 0.88, 0.78]} />
            <meshStandardMaterial color={NAVY} roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.91, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.74, 0.06, 0.86]} />
            <meshStandardMaterial color={OAK} roughness={0.48} />
          </mesh>
        </group>
      );

    case "bar-stool":
      return (
        <group>
          {[
            [-0.14, 0.33, -0.14],
            [0.14, 0.33, -0.14],
            [-0.14, 0.33, 0.14],
            [0.14, 0.33, 0.14],
          ].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]} castShadow>
              <cylinderGeometry args={[0.018, 0.015, 0.66, 8]} />
              <meshStandardMaterial color={CHARCOAL} roughness={0.4} metalness={0.5} />
            </mesh>
          ))}
          <mesh position={[0, 0.67, 0]} castShadow>
            <cylinderGeometry args={[0.19, 0.19, 0.05, 20]} />
            <meshStandardMaterial color={OAK} roughness={0.55} />
          </mesh>
        </group>
      );

    case "fridge":
      return (
        <group>
          <mesh position={[0, 1.0, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.8, 2.0, 0.72]} />
            <meshStandardMaterial color="#D8DEE4" metalness={0.45} roughness={0.32} />
          </mesh>
          <mesh position={[0, 0.72, 0.365]}>
            <boxGeometry args={[0.78, 0.015, 0.01]} />
            <meshStandardMaterial color={CHARCOAL} />
          </mesh>
          <mesh position={[-0.3, 1.25, 0.38]}>
            <boxGeometry args={[0.03, 0.38, 0.04]} />
            <meshStandardMaterial color={CHARCOAL} metalness={0.6} roughness={0.3} />
          </mesh>
        </group>
      );

    case "vanity-sink":
      return (
        <group>
          <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.15, 0.84, 0.52]} />
            <meshStandardMaterial color={OAK} roughness={0.55} />
          </mesh>
          <mesh position={[0, 0.86, 0]} castShadow>
            <boxGeometry args={[1.18, 0.05, 0.54]} />
            <meshStandardMaterial color={WHITE} roughness={0.25} />
          </mesh>
          {/* Vessel basin */}
          <mesh position={[0, 0.94, 0.02]} castShadow>
            <cylinderGeometry args={[0.22, 0.18, 0.12, 24]} />
            <meshStandardMaterial color={WHITE} roughness={0.2} />
          </mesh>
          {/* Faucet */}
          <mesh position={[0, 1.0, -0.18]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.22, 12]} />
            <meshStandardMaterial color={CHARCOAL} metalness={0.7} roughness={0.25} />
          </mesh>
        </group>
      );

    case "mirror":
      return (
        <group>
          {/* Backlit glow halo */}
          <mesh position={[0, 0, -0.015]}>
            <cylinderGeometry args={[0.46, 0.46, 0.02, 32]} />
            <meshStandardMaterial
              color={LAMP_GLOW}
              emissive={LAMP_GLOW}
              emissiveIntensity={0.6}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.42, 0.42, 0.03, 32]} />
            <meshStandardMaterial color="#E6EEF5" metalness={0.92} roughness={0.08} />
          </mesh>
        </group>
      );

    case "bathtub":
      return (
        <group>
          <mesh position={[0, 0.32, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.62, 0.62, 0.84]} />
            <meshStandardMaterial color={WHITE} roughness={0.22} />
          </mesh>
          {/* Inner water/basin recess */}
          <mesh position={[0, 0.635, 0]}>
            <boxGeometry args={[1.44, 0.02, 0.66]} />
            <meshStandardMaterial color="#D6E6F2" roughness={0.15} metalness={0.1} />
          </mesh>
        </group>
      );

    case "plant":
    default:
      return (
        <group>
          <mesh position={[0, 0.18, 0]} castShadow>
            <cylinderGeometry args={[0.17, 0.13, 0.36, 16]} />
            <meshStandardMaterial color={TERRACOTTA} roughness={0.8} />
          </mesh>
          <mesh position={[0, 0.52, 0]} castShadow>
            <dodecahedronGeometry args={[0.25, 1]} />
            <meshStandardMaterial color={LEAF} roughness={0.82} />
          </mesh>
          <mesh position={[0.1, 0.72, 0.05]} castShadow>
            <dodecahedronGeometry args={[0.18, 1]} />
            <meshStandardMaterial color={LEAF_LIGHT} roughness={0.8} />
          </mesh>
        </group>
      );
  }
}
