import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe"
import { Html as HeroFuturistic } from "@/components/ui/hero-futuristic"
import { ArrowRight, Terminal, FileText, Code, Zap, Brain, Sparkles, Mic } from "lucide-react"

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
            <p className="text-gray-600 text-lg">
              Ready to transform your knowledge? Start your journey above.
            </p>
          </div>
        </div>
      </div>
      
      {/* Globe Section */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/10 to-pink-500/5" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
              Global Knowledge Network
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with knowledge sources worldwide and build your intelligent ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] flex items-center justify-center">
              <Globe />
            </div>
            
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Intelligent Knowledge Processing
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PANDA transforms your audio recordings, documents, and conversations into a searchable knowledge base powered by advanced AI. Experience the future of information management.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Audio Intelligence</h4>
                    <p className="text-gray-300">Convert speech to structured knowledge with real-time transcription and AI analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Smart Conversations</h4>
                    <p className="text-gray-300">Chat with your knowledge base using natural language and get instant, contextual answers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Pattern Recognition</h4>
                    <p className="text-gray-300">Discover hidden connections and insights across your entire knowledge ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage