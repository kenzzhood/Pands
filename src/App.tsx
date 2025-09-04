import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <header className="flex justify-between items-center py-6 bg-white border-b border-gray-200 mb-8 px-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-black">
              PANDA
            </h1>
            <span className="text-xs px-2 py-1 bg-gray-200 rounded-full border border-gray-300 text-gray-700 font-medium">
              BETA
            </span>
          </div>
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