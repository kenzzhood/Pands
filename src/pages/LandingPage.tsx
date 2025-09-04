import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "@/components/ui/globe"
import { ArrowRight, User, Building2, Code, Palette, Terminal } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="min-h-[80vh] space-y-16 pb-16">
      {/* Hero Section */}
      <div className="text-center max-w-6xl mx-auto mb-16 relative">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
          <Code className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-300">React Component Integration</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Component Integration
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Task Guide
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <p className="text-lg text-slate-300 leading-relaxed">
            You are given a task to integrate an existing React component in the codebase
          </p>
          
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">The codebase should support:</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>shadcn project structure</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
                <span>TypeScript</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6">
            <p className="text-slate-300 leading-relaxed">
              If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or TypeScript.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6">
            <p className="text-slate-300 leading-relaxed mb-4">
              Determine the default path for components and styles. If default path for components is not <code className="bg-slate-800/50 px-2 py-1 rounded text-emerald-300">/components/ui</code>, provide instructions on why it's important to create this folder.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Copy-paste this component to <code className="bg-slate-800/50 px-2 py-1 rounded text-emerald-300">/components/ui</code> folder:
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">fluid-blob.tsx</h4>
              <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">React Three Fiber Component</span>
            </div>
            <div className="bg-slate-800/80 rounded-lg p-4 max-h-40 overflow-y-auto">
              <code className="text-cyan-300 text-sm">
                {`import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Component code with shader implementation...
// (Full implementation available in components/ui)`}
              </code>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/5 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6">
            <h4 className="text-white font-semibold mb-3">Install NPM dependencies:</h4>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-white/10">
              <code className="text-blue-300 text-sm">npm install three @react-three/fiber</code>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/5 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6">
            <h4 className="text-white font-semibold mb-4">Implementation Guidelines</h4>
            <ol className="space-y-2 text-slate-300 text-sm">
              <li>1. Analyze the component structure and identify all required dependencies</li>
              <li>2. Review the component's arguments and state</li>
              <li>3. Identify any required context providers or hooks and install them</li>
            </ol>
            
            <h5 className="text-white font-semibold mt-6 mb-3">Questions to Ask</h5>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>- What data/props will be passed to this component?</li>
              <li>- Are there any specific state management requirements?</li>
              <li>- Are there any required assets (images, icons, etc.)?</li>
              <li>- What is the expected responsive behavior?</li>
              <li>- What is the best place to use this component in the app?</li>
            </ul>
            
            <h5 className="text-white font-semibold mt-6 mb-3">Steps to integrate</h5>
            <ol className="space-y-2 text-slate-300 text-sm">
              <li>0. Copy paste all the code above in the correct directories</li>
              <li>1. Install external dependencies</li>
              <li>2. Fill image assets with Unsplash stock images you know exist</li>
              <li>3. Use lucide-react icons for svgs or logos if component requires them</li>
            </ol>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-2xl shadow-purple-500/25 border-0 px-8 py-6 text-lg font-semibold group">
            <Link to="/login" className="flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-white/5 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
            <Link to="/register">Create Account</Link>
          </Button>
        </div>
      </div>

      {/* Project Requirements Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Project Requirements</h3>
          <p className="text-slate-300 text-lg">The codebase should support:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                shadcn project structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm">Modern component architecture with proper organization and reusable UI components.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                Tailwind CSS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm">Utility-first CSS framework for rapid UI development and consistent styling.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                TypeScript
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm">Type-safe development with enhanced IDE support and better code quality.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Globe Component Demo */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Interactive Globe Component</h3>
          <p className="text-slate-300 text-lg">Experience the integrated component in action</p>
        </div>
        
        <div className="relative h-[500px] mb-12 flex items-center justify-center">
          <div className="relative w-[500px] h-[500px] rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
            <Globe className="top-0" />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
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