import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe"
import { Html as HeroFuturistic } from "@/components/ui/hero-futuristic"
import { ArrowRight, Terminal, FileText, Code, Zap, Brain, Sparkles } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Futuristic Component */}
      <HeroFuturistic />
      
      {/* Features Section */}
      <div className="bg-white text-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-black">
              Transform Knowledge Into Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PANDA revolutionizes how you interact with information through advanced AI processing and intuitive interfaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">AI-Powered Processing</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms transform your audio and text into structured, searchable knowledge.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Real-time processing and instant responses make knowledge discovery seamless and efficient.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Intelligent Insights</h3>
              <p className="text-gray-600">
                Discover connections and patterns in your data that you never knew existed.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/register">
              <Button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg border-0 inline-flex items-center space-x-2 text-lg">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Globe Section */}
      <div className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
              Global Knowledge Network
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with knowledge sources worldwide and build your intelligent ecosystem.
            </p>
          </div>
          
          <div className="relative h-[600px] flex items-center justify-center">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage