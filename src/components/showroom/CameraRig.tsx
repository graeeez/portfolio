"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OVERVIEW_CAMERA, SHOWROOM_ROOMS } from "@/data/showroomRooms";

interface CameraRigProps {
  /** Ref holding normalized scroll progress 0..1 across the showroom runway */
  scrollProgressRef: React.MutableRefObject<number>;
}

/**
 * Eased dwell mapping across N segments so the camera naturally slows down
 * and settles at each room stop before gliding smoothly into the next room.
 */
function easeStops(t: number, segmentCount: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  const scaled = clamped * segmentCount;
  const segIndex = Math.min(segmentCount - 1, Math.floor(scaled));
  const local = scaled - segIndex;
  // Quintic S-curve creates a calm plateau at 0 and 1 (each room stop)
  const easedLocal =
    local * local * local * (local * (local * 6 - 15) + 10);
  // Blend 75% eased plateau + 25% linear so motion always feels responsive
  const blended = easedLocal * 0.75 + local * 0.25;
  return (segIndex + blended) / segmentCount;
}

/**
 * Scroll-driven CatmullRomCurve3 camera rig.
 * - Glides continuously from Intro Overview -> Room 01 -> ... -> Room 06
 * - Exponential damping eliminates any wheel/trackpad jitter
 * - Subtle organic camera sway & pointer parallax for a natural walkthrough feel
 */
export default function CameraRig({ scrollProgressRef }: CameraRigProps) {
  const { camera } = useThree();

  const { posCurve, targetCurve, segmentCount } = useMemo(() => {
    const posPoints: THREE.Vector3[] = [
      new THREE.Vector3(...OVERVIEW_CAMERA.position),
      ...SHOWROOM_ROOMS.map((r) => new THREE.Vector3(...r.cameraPosition)),
    ];
    const targetPoints: THREE.Vector3[] = [
      new THREE.Vector3(...OVERVIEW_CAMERA.target),
      ...SHOWROOM_ROOMS.map((r) => new THREE.Vector3(...r.cameraTarget)),
    ];

    return {
      posCurve: new THREE.CatmullRomCurve3(posPoints, false, "centripetal", 0.5),
      targetCurve: new THREE.CatmullRomCurve3(targetPoints, false, "centripetal", 0.5),
      segmentCount: SHOWROOM_ROOMS.length,
    };
  }, []);

  const dampedProgress = useRef(0);
  const currentPos = useRef(new THREE.Vector3(...OVERVIEW_CAMERA.position));
  const currentTarget = useRef(new THREE.Vector3(...OVERVIEW_CAMERA.target));
  const desiredPos = useMemo(() => new THREE.Vector3(), []);
  const desiredTarget = useMemo(() => new THREE.Vector3(), []);
  const pointer = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      pointer.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    const elapsed = state.clock.getElapsedTime();

    // Smoothly damp scroll progress (fluid, zero-jerk feel)
    dampedProgress.current = THREE.MathUtils.damp(
      dampedProgress.current,
      scrollProgressRef.current,
      4.5,
      delta
    );

    const curveT = easeStops(dampedProgress.current, segmentCount);
    posCurve.getPointAt(curveT, desiredPos);
    targetCurve.getPointAt(curveT, desiredTarget);

    // Smooth pointer parallax
    pointer.current.x = THREE.MathUtils.damp(
      pointer.current.x,
      pointer.current.targetX,
      3.5,
      delta
    );
    pointer.current.y = THREE.MathUtils.damp(
      pointer.current.y,
      pointer.current.targetY,
      3.5,
      delta
    );

    // Subtle organic breathing & walking sway
    const swayX = Math.sin(elapsed * 0.55) * 0.07 + pointer.current.x * 0.24;
    const swayY = Math.cos(elapsed * 0.45) * 0.05 + pointer.current.y * 0.14;

    desiredPos.x += swayX;
    desiredPos.y += swayY;

    // Damp camera position & lookAt target independently for silky-smooth turns
    currentPos.current.lerp(desiredPos, 1 - Math.exp(-6.5 * delta));
    currentTarget.current.lerp(desiredTarget, 1 - Math.exp(-6.5 * delta));

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
}
