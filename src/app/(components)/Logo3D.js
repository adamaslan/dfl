"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const RevolvingGLBPage = ({style}) => {
  const containerRef = useRef();
  const containerStyle = { backgroundColor: 'transparent', ...style };

  useEffect(() => {
    let container;
    let camera, scene, renderer;
    let model;
    let controls;
    let isRevolvingOut = false;
    let currentRadius = 15;
    let minRadius = 5;
    let maxRadius = 50;

    const init = () => {
      container = containerRef.current;
      camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        1,
        1000
      );
      camera.position.z = 80;

      scene = new THREE.Scene();

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const loader = new GLTFLoader();
      loader.load(
        "/dfl-loading3.glb",
        (gltf) => {
          model = gltf.scene;
          scene.add(model);

          animate();
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );

     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        model.rotation.y += 0.01; // Rotate the model
      }

      const time = Date.now() * 0.0005; // Time for the revolving motion

      if (isRevolvingOut) {
        currentRadius -= 0.1; // Decrease the radius to move out
        if (currentRadius <= minRadius) {
          isRevolvingOut = false;
        }
      } else {
        currentRadius += 0.1; // Increase the radius to move in
        if (currentRadius >= maxRadius) {
          isRevolvingOut = true;
        }
      }

    camera.position.x = Math.cos(time) * currentRadius * 1.5; // Increase x-axis movement
    camera.position.z = Math.sin(time) * currentRadius * 0.5; // Reduce z-axis movement
      camera.lookAt(scene.position); // Keep camera looking at the center of the scene

      controls.update(); // Update orbit controls

      renderer.render(scene, camera);
    };

    init();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

return (
  <div
    ref={containerRef}
    style={containerStyle}
    
  />
);
};

export default RevolvingGLBPage;