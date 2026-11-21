"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroSceneProps {
  /** Warm glow hex color for the pendant lamps (changes subtly with active featured item) */
  glowColor?: string;
  /** Light gallery mode adaptation */
  isLight?: boolean;
}

/**
 * Editorial Pendant Lamp 3D Hero Scene
 * - Left matte cream dome pendant lamp + Right dark espresso & copper wide-cone pendant lamp
 * - Aspect-aware framing so both sculptural lamp shades frame the hero cleanly on any viewport
 * - Soft volumetric light cones casting warm illumination downward onto the content & portrait
 * - Sleek entrance drop-in, ultra-smooth pendulum sway & pointer parallax with full GPU disposal
 */
export default function HeroScene({
  glowColor = "#F79B02",
  isLight = false,
}: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowColorRef = useRef(glowColor);
  const isLightRef = useRef(isLight);

  useEffect(() => {
    glowColorRef.current = glowColor;
  }, [glowColor]);

  useEffect(() => {
    isLightRef.current = isLight;
  }, [isLight]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const fov = 38;
    const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    container.appendChild(renderer.domElement);

    // Studio lighting for crisp sculptural lamp silhouettes
    const ambientLight = new THREE.AmbientLight(0xfff1e4, 0.72);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff2e0, 1.55);
    keyLight.position.set(4, 6, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xce0058, 0.85);
    rimLight.position.set(-7, 2, 4);
    scene.add(rimLight);

    const warmFill = new THREE.DirectionalLight(0xf79b02, 0.45);
    warmFill.position.set(6, -2, 5);
    scene.add(warmFill);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    // Shared cord material
    const cordMat = new THREE.MeshStandardMaterial({
      color: 0xd9c3b8,
      roughness: 0.55,
      metalness: 0.15,
    });
    materials.push(cordMat);

    // Helper to compute aspect-aware lamp anchor positions
    const getLampLayout = (w: number, h: number) => {
      const aspect = w / Math.max(h, 1);
      const halfH = Math.tan(THREE.MathUtils.degToRad(fov / 2)) * camera.position.z;
      const halfW = halfH * aspect;
      const isDesktop = w >= 1024;
      return {
        leftX: isDesktop ? -Math.min(halfW * 0.84, 4.65) : -halfW * 0.72,
        rightX: isDesktop ? Math.min(halfW * 0.74, 4.1) : halfW * 0.72,
        ceilingY: halfH + 0.55,
        leftScale: isDesktop ? 0.94 : 0.72,
        rightScale: isDesktop ? 0.92 : 0.7,
      };
    };

    const layout = getLampLayout(width, height);

    // 1. LEFT PENDANT LAMP (Matte Cream Dome — Scandinavian silhouette)
    const leftPivot = new THREE.Group();
    leftPivot.position.set(layout.leftX, layout.ceilingY + (prefersReducedMotion ? 0 : 1.8), 0);
    leftPivot.scale.setScalar(layout.leftScale);
    scene.add(leftPivot);

    const leftCordGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.9, 12);
    const leftCord = new THREE.Mesh(leftCordGeo, cordMat);
    leftCord.position.set(0, -0.95, 0);
    leftPivot.add(leftCord);
    geometries.push(leftCordGeo);

    const leftCapGeo = new THREE.CylinderGeometry(0.15, 0.21, 0.19, 24);
    const leftDomeMat = new THREE.MeshStandardMaterial({
      color: 0xf7f0e9,
      roughness: 0.4,
      metalness: 0.06,
    });
    const leftCap = new THREE.Mesh(leftCapGeo, leftDomeMat);
    leftCap.position.set(0, -1.92, 0);
    leftPivot.add(leftCap);
    geometries.push(leftCapGeo);
    materials.push(leftDomeMat);

    const domePoints = [
      new THREE.Vector2(0.18, 0.0),
      new THREE.Vector2(0.42, -0.06),
      new THREE.Vector2(0.68, -0.22),
      new THREE.Vector2(0.84, -0.48),
      new THREE.Vector2(0.92, -0.78),
      new THREE.Vector2(0.95, -1.04),
    ];
    const leftShadeGeo = new THREE.LatheGeometry(domePoints, 48);
    const leftShade = new THREE.Mesh(leftShadeGeo, leftDomeMat);
    leftShade.position.set(0, -1.98, 0);
    leftPivot.add(leftShade);
    geometries.push(leftShadeGeo);

    // Subtle warm brass trim ring at bottom lip of left shade
    const leftRimGeo = new THREE.TorusGeometry(0.94, 0.016, 12, 48);
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xf79b02,
      roughness: 0.32,
      metalness: 0.7,
    });
    const leftRim = new THREE.Mesh(leftRimGeo, brassMat);
    leftRim.rotation.x = Math.PI / 2;
    leftRim.position.set(0, -3.02, 0);
    leftPivot.add(leftRim);
    geometries.push(leftRimGeo);
    materials.push(brassMat);

    // Glowing inner bulb disc
    const leftBulbGeo = new THREE.CircleGeometry(0.88, 36);
    const leftBulbMat = new THREE.MeshBasicMaterial({
      color: 0xfff3d1,
      side: THREE.DoubleSide,
    });
    const leftBulb = new THREE.Mesh(leftBulbGeo, leftBulbMat);
    leftBulb.rotation.x = Math.PI / 2;
    leftBulb.position.set(0, -2.99, 0);
    leftPivot.add(leftBulb);
    geometries.push(leftBulbGeo);
    materials.push(leftBulbMat);

    // Soft volumetric light cone beneath left pendant
    const leftConeGeo = new THREE.ConeGeometry(2.85, 5.2, 44, 1, true);
    const leftConeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(glowColorRef.current),
      transparent: true,
      opacity: prefersReducedMotion ? 0.075 : 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const leftCone = new THREE.Mesh(leftConeGeo, leftConeMat);
    leftCone.position.set(0, -5.58, 0);
    leftPivot.add(leftCone);
    geometries.push(leftConeGeo);
    materials.push(leftConeMat);

    // 2. RIGHT PENDANT LAMP (Dark Espresso & Copper Wide Cone — hangs gracefully above portrait)
    const rightPivot = new THREE.Group();
    rightPivot.position.set(
      layout.rightX,
      layout.ceilingY + (prefersReducedMotion ? 0 : 2.1),
      -0.35
    );
    rightPivot.scale.setScalar(layout.rightScale);
    scene.add(rightPivot);

    const rightCordGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.55, 12);
    const rightCord = new THREE.Mesh(rightCordGeo, cordMat);
    rightCord.position.set(0, -0.775, 0);
    rightPivot.add(rightCord);
    geometries.push(rightCordGeo);

    const rightShadeMat = new THREE.MeshStandardMaterial({
      color: 0x2b1726,
      roughness: 0.28,
      metalness: 0.58,
    });
    materials.push(rightShadeMat);

    const rightShadeGeo = new THREE.ConeGeometry(1.18, 0.82, 48, 1, true);
    const rightShade = new THREE.Mesh(rightShadeGeo, rightShadeMat);
    rightShade.position.set(0, -1.9, 0);
    rightPivot.add(rightShade);
    geometries.push(rightShadeGeo);

    // Warm copper collar on top of right shade
    const rightCollarGeo = new THREE.CylinderGeometry(0.14, 0.22, 0.22, 24);
    const rightCollarMat = new THREE.MeshStandardMaterial({
      color: 0xdf5000,
      roughness: 0.32,
      metalness: 0.65,
    });
    const rightCollar = new THREE.Mesh(rightCollarGeo, rightCollarMat);
    rightCollar.position.set(0, -1.48, 0);
    rightPivot.add(rightCollar);
    geometries.push(rightCollarGeo);
    materials.push(rightCollarMat);

    // Subtle copper rim around the wide cone edge
    const rightRimGeo = new THREE.TorusGeometry(1.17, 0.015, 12, 48);
    const rightRim = new THREE.Mesh(rightRimGeo, rightCollarMat);
    rightRim.rotation.x = Math.PI / 2;
    rightRim.position.set(0, -2.31, 0);
    rightPivot.add(rightRim);
    geometries.push(rightRimGeo);

    const rightBulbGeo = new THREE.CircleGeometry(1.06, 36);
    const rightBulb = new THREE.Mesh(rightBulbGeo, leftBulbMat);
    rightBulb.rotation.x = Math.PI / 2;
    rightBulb.position.set(0, -2.29, 0);
    rightPivot.add(rightBulb);
    geometries.push(rightBulbGeo);

    const rightConeGeo = new THREE.ConeGeometry(3.1, 5.4, 44, 1, true);
    const rightConeMat = new THREE.MeshBasicMaterial({
      color: 0xce0058,
      transparent: true,
      opacity: prefersReducedMotion ? 0.075 : 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const rightCone = new THREE.Mesh(rightConeGeo, rightConeMat);
    rightCone.position.set(0, -4.98, 0);
    rightPivot.add(rightCone);
    geometries.push(rightConeGeo);
    materials.push(rightConeMat);

    // Pointer parallax
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointerMove = (e: PointerEvent) => {
      pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    let currentTargetY = layout.ceilingY;

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      const next = getLampLayout(w, h);
      leftPivot.position.x = next.leftX;
      rightPivot.position.x = next.rightX;
      leftPivot.scale.setScalar(next.leftScale);
      rightPivot.scale.setScalar(next.rightScale);
      currentTargetY = next.ceilingY;
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const clock = new THREE.Clock();
    let animId = 0;
    const targetColor = new THREE.Color();

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();

      const damp = 1 - Math.exp(-3.0 * delta);
      const entranceDamp = 1 - Math.exp(-2.4 * delta);
      pointer.x += (pointer.targetX - pointer.x) * damp;
      pointer.y += (pointer.targetY - pointer.y) * damp;

      // Sleek drop-in settle from ceiling
      leftPivot.position.y += (currentTargetY - leftPivot.position.y) * entranceDamp;
      rightPivot.position.y += (currentTargetY - rightPivot.position.y) * (entranceDamp * 0.88);

      // Adapt cord, shade, and cone blending smoothly for light/dark studio mode
      const lightMode = isLightRef.current;
      const desiredLeftBlending = lightMode
        ? THREE.NormalBlending
        : THREE.AdditiveBlending;
      if (leftConeMat.blending !== desiredLeftBlending) {
        leftConeMat.blending = desiredLeftBlending;
        rightConeMat.blending = desiredLeftBlending;
        leftConeMat.needsUpdate = true;
        rightConeMat.needsUpdate = true;
        cordMat.color.set(lightMode ? 0x5e4a54 : 0xd9c3b8);
        leftDomeMat.color.set(lightMode ? 0xefe2d4 : 0xf7f0e9);
      }

      // Gentle light cone fade-in
      const targetLeftOpacity = lightMode ? 0.11 : 0.075;
      const targetRightOpacity = lightMode ? 0.085 : 0.07;
      leftConeMat.opacity += (targetLeftOpacity - leftConeMat.opacity) * (damp * 0.7);
      rightConeMat.opacity += (targetRightOpacity - rightConeMat.opacity) * (damp * 0.65);

      // Subtle pendulum sway + pointer responsiveness
      leftPivot.rotation.z = Math.sin(elapsed * 0.7) * 0.022 + pointer.x * 0.04;
      leftPivot.rotation.x = pointer.y * 0.018;

      rightPivot.rotation.z = Math.cos(elapsed * 0.62) * 0.02 + pointer.x * 0.032;
      rightPivot.rotation.x = pointer.y * 0.018;

      // Smoothly transition light cone color
      targetColor.set(glowColorRef.current);
      leftConeMat.color.lerp(targetColor, damp * 1.4);

      renderer.render(scene, camera);

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
    />
  );
}
