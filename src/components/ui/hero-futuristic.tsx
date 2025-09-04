'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Mesh } from 'three';

const TEXTUREMAP = { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop' };
const DEPTHMAP = { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&auto=format' };

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) {
      setVisible(true);
    }
  }, [rawMap, depthMap]);

  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: rawMap,
      transparent: true,
      opacity: 0.8,
    });
  }, [rawMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    if (meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as any;
      if ('opacity' in mat) {
        mat.opacity = visible ? 0.8 : 0;
      }
    }
  });

  const scaleFactor = 0.40;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

export const Html = () => {
  const titleWords = 'Build Your Dreams'.split(' ');
  const subtitle = 'AI-powered creativity for the next generation.';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="h-screen relative overflow-hidden bg-black">
      <div className="h-screen uppercase items-center w-full absolute z-10 pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ${index < visibleWords ? 'opacity-100' : 'opacity-0'}`}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold">
          <div className={`transition-opacity duration-1000 ${subtitleVisible ? 'opacity-100' : 'opacity-0'}`}>
            {subtitle}
          </div>
        </div>
      </div>

      <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center space-x-2">
        <span>Scroll to explore</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 12L11 17L16 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <Canvas className="absolute inset-0">
        <Scene />
      </Canvas>
    </div>
  );
};

export default Html;