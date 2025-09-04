import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe"
import { ArrowRight, Terminal, FileText, Code } from "lucide-react"

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="text-center max-w-6xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 mb-8">
          <Code className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Component Integration Task</span>
        </div>