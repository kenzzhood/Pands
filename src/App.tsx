import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-500/5 via-purple-500/5 to-emerald-400/5">
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-br from-sky-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">PANDA</h1>
          <ModeToggle />
        </header>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  )
}

export default App
