import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, FileText, Code } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="text-center max-w-6xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 mb-8">
          <Code className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Component Integration Task</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-black">
          React Component Integration
        </h2>
        
        <div className="text-left max-w-4xl mx-auto mb-12 bg-white border border-gray-300 rounded-2xl p-8 shadow-lg">
          <p className="text-lg text-gray-800 mb-6 font-semibold">
            You are given a task to integrate an existing React component in the codebase
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The codebase should support:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>shadcn project structure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>TypeScript</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-6">
              <p className="text-gray-800 mb-4">
                If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or TypeScript.
              </p>
              <p className="text-gray-800 mb-4">
                Determine the default path for components and styles. If default path for components is not <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">/components/ui</code>, provide instructions on why it's important to create this folder.
              </p>
              <p className="text-gray-800">
                Copy-paste this component to <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">/components/ui</code> folder:
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-gray-600" />
                <span className="font-mono text-sm text-gray-800 font-semibold">hero-futuristic.tsx</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-xs text-gray-600 whitespace-pre-wrap">
{`'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three/webgpu';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import { Mesh } from 'three';

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
  mix,
  add
} from 'three/tsl';

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

extend(THREE as any);

// Post Processing component
const PostProcessing = ({
  strength = 1,
  threshold = 1,
  fullScreenEffect = true,
}: {
  strength?: number;
  threshold?: number;
  fullScreenEffect?: boolean;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new THREE.PostProcessing(gl as any);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode('output');
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    // Create the scanning effect uniform
    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    // Create a red overlay that follows the scan line
    const scanPos = float(uScanProgress.value);
    const uvY = uv().y;
    const scanWidth = float(0.05);
    const scanLine = smoothstep(0, scanWidth, abs(uvY.sub(scanPos)));
    const redOverlay = vec3(1, 0, 0).mul(oneMinus(scanLine)).mul(0.4);

    // Mix the original scene with the red overlay
    const withScanEffect = mix(
      scenePassColor,
      add(scenePassColor, redOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0
    );

    // Add bloom effect after scan effect
    const final = withScanEffect.add(bloomPass);

    postProcessing.outputNode = final;

    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    // Animate the scan line from top to bottom
    progressRef.current.value = (Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5);
    render.renderAsync();
  }, 1);

  return null;
};

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

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const strength = 0.01;

    const tDepthMap = texture(depthMap);

    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const depth = tDepthMap;

    const flow = oneMinus(smoothstep(0, 0.02, abs(depth.sub(uProgress))));

    const mask = dot.mul(flow).mul(vec3(10, 0, 0));

    const final = blendScreen(tMap, mask);

    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
    });

    return {
      material,
      uniforms: {
        uPointer,
        uProgress,
      },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value = (Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5);
    if (meshRef.current && 'material' in meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as any;
      if ('opacity' in mat) {
        mat.opacity = THREE.MathUtils.lerp(
          mat.opacity,
          visible ? 1 : 0,
          0.07
        );
      }
    }
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
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
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

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
    <div className="h-svh">
      <div className="h-svh uppercase items-center w-full absolute z-60 pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? 'fade-in' : ''}
                style={{ animationDelay: \`\${index * 0.13 + (delays[index] || 0)}s\`, opacity: index < visibleWords ? undefined : 0 }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold">
          <div
            className={subtitleVisible ? 'fade-in-subtitle' : ''}
            style={{ animationDelay: \`\${titleWords.length * 0.13 + 0.2 + subtitleDelay}s\`, opacity: subtitleVisible ? undefined : 0 }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <Canvas
        flat
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer(props as any);
          await renderer.init();
          return renderer;
        }}
      >
        <PostProcessing fullScreenEffect={true} />
        <Scene />
      </Canvas>
    </div>
  );
};`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Install NPM dependencies:</h3>
              <div className="bg-black border border-gray-300 rounded-lg p-4">
                <code className="text-white font-mono">npm install three @react-three/fiber @react-three/drei</code>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Implementation Guidelines</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Analyze the component structure and identify all required dependencies</li>
                <li>Review the component's arguments and state</li>
                <li>Identify any required context providers or hooks and install them</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Questions to Ask</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>What data/props will be passed to this component?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Are there any specific state management requirements?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Are there any required assets (images, icons, etc.)?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>What is the expected responsive behavior?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>What is the best place to use this component in the app?</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Steps to integrate</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Copy paste all the code above in the correct directories</li>
                <li>Install external dependencies</li>
                <li>Fill image assets with Unsplash stock images you know exist</li>
                <li>Use lucide-react icons for svgs or logos if component requires them</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 shadow-2xl border-0 px-8 py-6 text-lg font-semibold group">
            <Link to="/login" className="flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white border-gray-300 text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
            <Link to="/register">Create Account</Link>
          </Button>
        </div>
      </div>

      {/* Simple Demo Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-black mb-4">Component Demo</h3>
          <p className="text-gray-600 text-lg">Example of integrated component functionality</p>
        </div>
        
        <div className="relative h-[400px] mb-12 flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-full rounded-3xl bg-white border border-gray-300 overflow-hidden shadow-2xl flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-black mb-2">Component Ready</h4>
              <p className="text-gray-600">Your React component integration workspace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage