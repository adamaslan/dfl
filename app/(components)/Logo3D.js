"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const RevolvingGLBPage = ({ style }) => {
  const containerRef = useRef();
  const containerStyle = { backgroundColor: 'transparent', ...style };

  useEffect(() => {
    let container, camera, scene, renderer, model, controls;
    let isRevolvingOut = false;
    let currentRadius = 15;
    const minRadius = 5;
    const maxRadius = 50;

    const initScene = () => {
      container = containerRef.current;
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        1,
        1000
      );
      camera.position.z = 80;

      // Lighting
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      // Load model
      const loader = new GLTFLoader();
      loader.load(
        '/dfl-loading3.glb',
        (gltf) => {
          model = gltf.scene;
          scene.add(model);
          animate();
        },
        undefined,
        (error) => console.error(error)
      );

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
    };

    const animate = () => {
      if (!model) return;

      model.rotation.y += 0.01; // Rotate model

      const time = Date.now() * 0.0005;

      currentRadius = isRevolvingOut ? Math.max(currentRadius - 0.1, minRadius) : Math.min(currentRadius + 0.1, maxRadius);
      isRevolvingOut = currentRadius === minRadius || currentRadius === maxRadius ? !isRevolvingOut : isRevolvingOut;

      camera.position.x = Math.cos(time) * currentRadius * 1.5;
      camera.position.z = Math.sin(time) * currentRadius * 0.5;
      camera.lookAt(scene.position);

      controls.update();
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    initScene();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return <div ref={containerRef} style={containerStyle} />;
};

export default RevolvingGLBPage;
