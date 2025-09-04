import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe"
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
              <p className="text-gray-600 italic">Component code available in /components/ui/hero-futuristic.tsx</p>
  )
}