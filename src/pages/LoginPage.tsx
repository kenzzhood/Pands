import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import api from "@/services/api"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.login({ username: email, password: password })
      navigate("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <div className="min-h-[70vh] grid place-items-center">
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-background/60 backdrop-blur p-6 shadow-lg shadow-sky-500/10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-emerald-400 bg-clip-text text-transparent">PANDA</h2>
        </div>
        <p className="text-xs text-muted-foreground mb-4">Demo login: <span className="font-medium">test@example.com</span> / <span className="font-medium">password123</span></p>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="organization">Organization</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <form onSubmit={handleLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="test@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password123" />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </TabsContent>
          <TabsContent value="organization">
            <form onSubmit={handleLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="org-email">Email</Label>
                <Input id="org-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="test@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-password">Password</Label>
                <Input id="org-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password123" />
              </div>
              <Button type="submit" className="w-full">Login as Organization</Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default LoginPage
