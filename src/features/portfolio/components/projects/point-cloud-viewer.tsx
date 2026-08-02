"use client";

import { LoaderCircleIcon, RotateCcwIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { PLYLoader } from "three/addons/loaders/PLYLoader.js";

type ViewerStatus = "loading" | "ready" | "error";

export function PointCloudViewer({ src }: { src: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const resetViewRef = useRef<() => void>(() => undefined);
  const [status, setStatus] = useState<ViewerStatus>("loading");

  useEffect(() => {
    const host = hostRef.current;

    if (!host) return;

    let disposed = false;
    let frameId = 0;
    let geometry: THREE.BufferGeometry | undefined;
    let material: THREE.PointsMaterial | undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.01, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x101713, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.className = "h-full w-full touch-none";
    host.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enablePan = false;

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();

      if (!width || !height) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const loader = new PLYLoader();
    loader.load(
      src,
      (loadedGeometry) => {
        if (disposed) {
          loadedGeometry.dispose();
          return;
        }

        geometry = loadedGeometry;
        geometry.rotateX(-Math.PI / 2);
        geometry.center();
        geometry.computeBoundingSphere();

        const radius = Math.max(geometry.boundingSphere?.radius ?? 1, 0.001);
        const hasVertexColors = Boolean(geometry.getAttribute("color"));

        material = new THREE.PointsMaterial({
          color: hasVertexColors ? 0xffffff : 0xb7d19f,
          size: radius / 90,
          sizeAttenuation: true,
          vertexColors: hasVertexColors,
        });

        const pointCloud = new THREE.Points(geometry, material);
        scene.add(pointCloud);

        const initialPosition = new THREE.Vector3(
          radius * 0.4,
          radius * 0.5,
          radius * 2.15,
        );
        const initialTarget = new THREE.Vector3(0, radius * 0.04, 0);

        camera.near = radius / 100;
        camera.far = radius * 20;
        camera.position.copy(initialPosition);
        camera.updateProjectionMatrix();

        controls.minDistance = radius * 0.55;
        controls.maxDistance = radius * 5;
        controls.target.copy(initialTarget);
        controls.update();

        resetViewRef.current = () => {
          camera.position.copy(initialPosition);
          controls.target.copy(initialTarget);
          controls.update();
        };

        setStatus("ready");
      },
      undefined,
      () => {
        if (!disposed) setStatus("error");
      },
    );

    const render = () => {
      controls.update();
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      geometry?.dispose();
      material?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      resetViewRef.current = () => undefined;
    };
  }, [src]);

  return (
    <div className="relative aspect-video overflow-hidden bg-[oklch(0.16_0.015_150)]">
      <div
        ref={hostRef}
        className="absolute inset-0"
        role="img"
        aria-label="Interactive colored point-cloud reconstruction of a forest"
      />

      {status === "loading" && (
        <div
          className="absolute inset-0 flex items-center justify-center gap-2 bg-[oklch(0.16_0.015_150)] text-sm text-[oklch(0.82_0.02_145)]"
          role="status"
        >
          <LoaderCircleIcon className="size-4 animate-spin" aria-hidden />
          Loading reconstruction
        </div>
      )}

      {status === "error" && (
        <div
          className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-[oklch(0.82_0.02_145)]"
          role="status"
        >
          The interactive reconstruction could not be loaded.
        </div>
      )}

      {status === "ready" && (
        <button
          type="button"
          onClick={() => resetViewRef.current()}
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full border border-white/15 bg-[oklch(0.2_0.015_150/0.88)] text-[oklch(0.9_0.01_145)] shadow-sm transition-colors hover:bg-[oklch(0.26_0.02_150/0.94)] focus-visible:ring-2 focus-visible:ring-[oklch(0.78_0.1_135)] focus-visible:outline-none"
          aria-label="Reset 3D view"
          title="Reset view"
        >
          <RotateCcwIcon className="size-4" aria-hidden />
        </button>
      )}
    </div>
  );
}
