import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "@/components/ui/globe"
import { ArrowRight, Code, Terminal, Folder, FileText } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="min-h-[80vh] space-y-16 pb-16">
      {/* Hero Section */}
      <div className="text-center max-w-6xl mx-auto mb-16 relative">
        <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-gray-600 rounded-full px-4 py-2 mb-8">
          <Code className="w-4 h-4 text-gray-300" />
          <span className="text-sm font-medium text-gray-300">Component Integration Task</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
          React Component Integration
        </h2>
        
        <div className="text-left max-w-4xl mx-auto mb-12 bg-black/40 backdrop-blur-sm border border-gray-600 rounded-2xl p-8">
          <p className="text-lg text-gray-200 mb-6">
            You are given a task to integrate an existing React component in the codebase
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The codebase should support:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>shadcn project structure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>TypeScript</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or TypeScript.
              </p>
              <p className="text-gray-300 mb-4">
                Determine the default path for components and styles. If default path for components is not <code className="bg-gray-800 px-2 py-1 rounded text-gray-200">/components/ui</code>, provide instructions on why it's important to create this folder.
              </p>
              <p className="text-gray-300">
                Copy-paste this component to <code className="bg-gray-800 px-2 py-1 rounded text-gray-200">/components/ui</code> folder:
              </p>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-gray-400" />
                <span className="font-mono text-sm text-gray-300">hero-futuristic.tsx</span>
              </div>
              <div className="bg-black/60 border border-gray-800 rounded-lg p-4 mb-4">
                <p className="text-gray-400 text-sm font-mono">React Three Fiber Component</p>
                <div className="mt-2 text-xs text-gray-500">
                  <p>import React, { useRef, useMemo } from 'react';</p>
                  <p>import { Canvas, useFrame, useThree } from '@react-three/fiber';</p>
                  <p>import * as THREE from 'three';</p>
                  <p className="mt-2 text-gray-600">// Component code with shader implementation...</p>
                  <p className="text-gray-600">// (Full implementation available in components/ui)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Install NPM dependencies:</h3>
              <div className="bg-black border border-gray-700 rounded-lg p-4">
                <code className="text-green-400 font-mono">npm install three @react-three/fiber @react-three/drei</code>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Implementation Guidelines</h3>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Analyze the component structure and identify all required dependencies</li>
                <li>Review the component's arguments and state</li>
                <li>Identify any required context providers or hooks and install them</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Questions to Ask</h3>
              <ul className="space-y-2 text-gray-300">
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
              <h3 className="text-xl font-bold text-white mb-3">Steps to integrate</h3>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Copy paste all the code above in the correct directories</li>
                <li>Install external dependencies</li>
                <li>Fill image assets with Unsplash stock images you know exist</li>
                <li>Use lucide-react icons for svgs or logos if component requires them</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 shadow-2xl border-0 px-8 py-6 text-lg font-semibold group">
            <Link to="/login" className="flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-transparent border-gray-600 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
            <Link to="/register">Create Account</Link>
          </Button>
        </div>
      </div>

      {/* Globe Component Demo */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">Interactive Globe Component</h3>
          <p className="text-gray-400 text-lg">Experience the integrated component in action</p>
        </div>
        
        <div className="relative h-[500px] mb-12 flex items-center justify-center">
          <div className="relative w-[500px] h-[500px] rounded-3xl bg-black/40 backdrop-blur-sm border border-gray-600 overflow-hidden shadow-2xl">
            <Globe className="top-0" />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-700">
                <span className="text-sm font-medium text-white">
                  Interactive 3D Globe • Drag to rotate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage