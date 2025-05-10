import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { darkMode } = useTheme();
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup with wider field of view for more dramatic effect
    const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;
    
    // Renderer setup with better quality
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    
    // Create multiple particle systems for depth
    const createParticleSystem = (count: number, spread: number, size: number, opacity: number) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      
      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * spread;
        positions[i + 1] = (Math.random() - 0.5) * spread;
        positions[i + 2] = (Math.random() - 0.5) * spread;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.PointsMaterial({
        size,
        color: darkMode ? 0x64FFDA : 0x10B981,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
      });
      
      return new THREE.Points(geometry, material);
    };
    
    // Create three layers of particles for depth effect
    const particleSystem1 = createParticleSystem(2000, 30, 0.02, 0.8);
    const particleSystem2 = createParticleSystem(1500, 25, 0.03, 0.6);
    const particleSystem3 = createParticleSystem(1000, 20, 0.04, 0.4);
    
    scene.add(particleSystem1, particleSystem2, particleSystem3);
    
    // Mouse movement effect with parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation with smooth parallax effect
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth mouse movement
      targetX += (mouseX - targetX) * 0.02;
      targetY += (mouseY - targetY) * 0.02;
      
      // Rotate particle systems at different speeds for depth effect
      particleSystem1.rotation.x += 0.0002;
      particleSystem1.rotation.y += 0.0003;
      particleSystem1.rotation.z += targetY * 0.0002;
      
      particleSystem2.rotation.x += 0.0003;
      particleSystem2.rotation.y += 0.0004;
      particleSystem2.rotation.z += targetX * 0.0003;
      
      particleSystem3.rotation.x += 0.0004;
      particleSystem3.rotation.y += 0.0005;
      particleSystem3.rotation.z += (targetX + targetY) * 0.0004;
      
      // Move particle systems based on mouse position
      particleSystem1.position.x = targetX * 0.2;
      particleSystem1.position.y = targetY * 0.2;
      
      particleSystem2.position.x = -targetX * 0.1;
      particleSystem2.position.y = -targetY * 0.1;
      
      particleSystem3.position.x = targetX * 0.15;
      particleSystem3.position.y = targetY * 0.15;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      
      // Dispose of geometries and materials
      particleSystem1.geometry.dispose();
      particleSystem2.geometry.dispose();
      particleSystem3.geometry.dispose();
      (particleSystem1.material as THREE.Material).dispose();
      (particleSystem2.material as THREE.Material).dispose();
      (particleSystem3.material as THREE.Material).dispose();
    };
  }, [darkMode]);
  // return <div ref={mountRef} className="w-full h-full bg-red-500"></div>;

  return <div ref={mountRef} className="w-full h-full"></div>;
};

export default ThreeScene;