import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "@/components/ui/globe"
import { ArrowRight, User, Building2, Code, Palette, Terminal, Mic, BookOpen, MessageSquare } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="min-h-[80vh] space-y-16 pb-16">
      {/* Hero Section */}
      <div className="text-center max-w-6xl mx-auto mb-16 relative">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
          <Code className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-300">AI-Powered Knowledge Platform</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Transform Knowledge
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Into Intelligence
          </span>
        </h2>
        
        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
          Upload audio, create knowledge bases, and chat with AI-powered insights. Transform your content into intelligent conversations.
        </p>
        
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

      {/* Features Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Core Features</h3>
          <p className="text-slate-300 text-lg">Everything you need for intelligent knowledge management</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                Audio Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm">Upload and process audio files to extract meaningful insights and knowledge.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                Knowledge Base
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm">Create and manage structured knowledge repositories for intelligent retrieval.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                AI Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm">Engage in intelligent conversations powered by your knowledge base.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Globe Component Demo */}
      <div className="max-w-6xl mx-auto">
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