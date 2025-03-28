"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const RevolvingGLBPage = ({ style }) => {
  const containerRef = useRef();
  const containerStyle = { 
    backgroundColor: 'transparent',
    overflow: 'hidden',
    borderRadius: '20px',
    width: '100%',
    height: '100%',
    ...style 
  };

  useEffect(() => {
    let container;
    let camera, scene, renderer;
    let model;
    let controls;
    let isRevolvingOut = false;
    let currentRadius = 15;
    let minRadius = 5;
    let maxRadius = 50;

    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight, false);
    };

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

      // Lights setup
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(container.clientWidth, container.clientHeight, false);
      container.appendChild(renderer.domElement);

      // Controls setup
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // GLTF Loader
      new GLTFLoader().load(
        "/dfl-loading3.glb",
        (gltf) => {
          model = gltf.scene;
          scene.add(model);
          animate();
        },
        undefined,
        (error) => console.error(error)
      );
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (model) model.rotation.y += 0.01;

      // Camera animation
      const time = Date.now() * 0.0005;
      currentRadius += isRevolvingOut ? -0.1 : 0.1;
      isRevolvingOut = currentRadius <= minRadius ? false : currentRadius >= maxRadius ? true : isRevolvingOut;

      camera.position.x = Math.cos(time) * currentRadius * 1.5;
      camera.position.z = Math.sin(time) * currentRadius * 0.5;
      camera.lookAt(scene.position);

      controls.update();
      renderer.render(scene, camera);
    };

    init();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} style={containerStyle} />;
};

export default RevolvingGLBPage;