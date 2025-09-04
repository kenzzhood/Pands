import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "@/components/ui/globe"
import { ArrowRight, Brain, Mic, MessageSquare, Sparkles, Code, Palette, Settings, CheckCircle, Terminal, FileText, Folder } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="min-h-[80vh] space-y-16 pb-16">
      {/* Hero Section with Globe */}
      <div className="text-center max-w-6xl mx-auto mb-16 relative">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-300">React Component Integration Guide</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Component
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Integration
          </span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
          You are given a task to integrate an existing React component in the codebase
        </p>

        {/* Globe Component Demo */}
        <div className="relative h-[400px] mb-12 flex items-center justify-center">
          <div className="relative w-[400px] h-[400px] rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden">
            <Globe className="top-0" />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="text-sm font-medium text-white bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                Interactive Globe Component
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

      {/* Requirements Section */}
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
                  <Folder className="w-5 h-5 text-white" />
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

      {/* Setup Instructions */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Setup Instructions</h3>
          <p className="text-slate-300 text-lg">If your project doesn't meet the requirements, follow these steps:</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Terminal className="w-6 h-6 text-cyan-400" />
                Project Setup via shadcn CLI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                <code className="text-cyan-300 text-sm">npx shadcn@latest init</code>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                <code className="text-purple-300 text-sm">npm install tailwindcss typescript</code>
              </div>
              <p className="text-slate-300 text-sm">Initialize your project with shadcn/ui structure and install required dependencies.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Folder className="w-6 h-6 text-purple-400" />
                Component Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-slate-300 text-sm font-medium">Default component path:</p>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-white/10">
                  <code className="text-pink-300 text-sm">/components/ui</code>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                <strong className="text-white">Important:</strong> The /components/ui folder is essential for shadcn component organization and maintains consistency across the project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Integration Steps */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Integration Steps</h3>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  0
                </div>
                Copy Component Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">Copy the Globe component to the correct directory:</p>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                <code className="text-cyan-300 text-sm">src/components/ui/globe.tsx</code>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                Install Dependencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">Install the required external dependencies:</p>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                <code className="text-purple-300 text-sm">npm install cobe</code>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                Asset Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">Use stock images and icons as needed:</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Unsplash stock images for visual assets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Lucide React icons for SVGs and logos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Implementation Guidelines */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Implementation Guidelines</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Settings className="w-6 h-6 text-cyan-400" />
                Analysis & Planning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="text-white font-semibold">1. Analyze Component Structure</h4>
                <p className="text-slate-300 text-sm">Identify all required dependencies and understand the component's architecture.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold">2. Review Arguments & State</h4>
                <p className="text-slate-300 text-sm">Understand props, state management, and data flow requirements.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold">3. Identify Context & Hooks</h4>
                <p className="text-slate-300 text-sm">Determine any required context providers or custom hooks needed.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Brain className="w-6 h-6 text-purple-400" />
                Key Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">What data/props will be passed to this component?</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">Are there any specific state management requirements?</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">Are there any required assets (images, icons, etc.)?</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">What is the expected responsive behavior?</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">What is the best place to use this component in the app?</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Step-by-Step Integration */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Step-by-Step Integration</h3>
        </div>

        <div className="space-y-6">
          {[
            {
              step: "0",
              title: "Copy Component Code",
              description: "Copy paste all the component code to the correct directories",
              icon: FileText,
              color: "from-cyan-400 to-cyan-600"
            },
            {
              step: "1", 
              title: "Install External Dependencies",
              description: "Install any required npm packages and external libraries",
              icon: Terminal,
              color: "from-purple-400 to-purple-600"
            },
            {
              step: "2",
              title: "Fill Image Assets",
              description: "Fill image assets with Unsplash stock images you know exist",
              icon: Palette,
              color: "from-pink-400 to-pink-600"
            },
            {
              step: "3",
              title: "Use Lucide Icons",
              description: "Use lucide-react icons for SVGs or logos if component requires them",
              icon: Sparkles,
              color: "from-emerald-400 to-emerald-600"
            }
          ].map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl group hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-black text-xl">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Code Example Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Component Installation</h3>
          <p className="text-slate-300 text-lg">Install the required NPM dependencies:</p>
        </div>

        <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <Terminal className="w-6 h-6 text-cyan-400" />
              NPM Dependencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-white/10">
              <pre className="text-cyan-300 text-sm">
                <code>{`npm install cobe`}</code>
              </pre>
            </div>
            <p className="text-slate-300 text-sm mt-4">
              This installs the COBE library required for the interactive 3D globe component.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Success Indicators */}
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur-xl border border-emerald-500/20 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Integration Complete</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Your project now supports modern React component integration with shadcn/ui structure, 
              Tailwind CSS styling, and TypeScript type safety. The Globe component has been successfully 
              integrated and is ready for use throughout your application.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LandingPage