import AudioUpload from "@/components/AudioUpload"
import BlogManager from "@/components/BlogManager"
import Chatbot from "@/components/Chatbot"

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-xl p-4 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-emerald-400/10 border border-border/60">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-sm text-muted-foreground">Upload audio, manage blogs, and chat with your knowledge base.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <AudioUpload />
          <BlogManager />
        </div>
        <div className="lg:col-span-1">
          <Chatbot />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
