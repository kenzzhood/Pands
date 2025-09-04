import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import api from "@/services/api"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent, type: 'personal' | 'organization') => {
    e.preventDefault()
    try {
      if (type === 'personal') {
        await api.registerUser({ userid: Date.now().toString(), name, email, password })
      } else {
        await api.registerOrg({ orgid: Date.now().toString(), name, email, password })
      }
      navigate("/login")
    } catch (error) {
      console.error("Registration failed:", error)
    }
  }

  return (
    <div className="min-h-[70vh] grid place-items-center">
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-background/60 backdrop-blur p-6 shadow-lg shadow-purple-500/10">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Create your account</h2>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="organization">Organization</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <form onSubmit={(e) => handleRegister(e, 'personal')} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full">Register</Button>
            </form>
          </TabsContent>
          <TabsContent value="organization">
            <form onSubmit={(e) => handleRegister(e, 'organization')} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="org-name">Organization Name</Label>
                <Input id="org-name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-email">Email</Label>
                <Input id="org-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-password">Password</Label>
                <Input id="org-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full">Register Organization</Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default RegisterPage
