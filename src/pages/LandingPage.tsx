import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const LandingPage = () => {
  return (
    <div className="min-h-[70vh] grid place-items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-sky-500/10 to-transparent rounded-2xl p-8">
      <div className="text-center max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-purple-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
          Personalized AI for Next-Gen Digital Assistance
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground">
          Capture talks, transcribe, embed into your knowledge base, and chat with it.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="shadow-lg shadow-purple-500/20">
            <Link to="/login">Get Started</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="backdrop-blur border border-border/50">
            <Link to="/register">Create account</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
