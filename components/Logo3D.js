import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeJSReactComponent = ({ glbFile }) => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    // Create the scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add the glb model to the scene
    const loader = new GLTFLoader();
    loader.load(glbFile, (gltf) => {
      const model = gltf.scene;
      scene.add(model);
    });

    // Render the scene
    renderer.render(scene, camera);

    // Update the scene on every frame
    function animate() {
      requestAnimationFrame(animate);

      // Rotate the model
      sceneRef.current.rotation.y += 0.01;

      // Render the scene
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }

    animate();

    // Clean up the scene when the component unmounts
    return () => {
      // Dispose of the objects in the scene
      sceneRef.current.children.forEach((object) => {
        if (object.isMesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });

      // Remove the scene from the DOM
      const parentElement = sceneRef.current?.parent;
      if (parentElement) {
        parentElement.remove(sceneRef.current);
      }

      // Dispose of the renderer
      rendererRef.current.dispose();
    };
  }, [glbFile]);

  return <div id="threejs-react-component"></div>;
};

export default ThreeJSReactComponent;