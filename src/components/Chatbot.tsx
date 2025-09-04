import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"
import api from "@/services/api"

const Chatbot = () => {
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([])
  const [input, setInput] = useState("")
  const [sessionId, setSessionId] = useState<string>("")
  const [userId, setUserId] = useState<string>("")
  const [blogId, setBlogId] = useState<string>("")

  useEffect(() => {
    const refresh = () => {
      setSessionId(localStorage.getItem("lastSessionId") || "")
      setUserId(localStorage.getItem("lastUserId") || "")
      setBlogId(localStorage.getItem("lastBlogId") || "")
    }
    refresh()
    const onStorage = () => refresh()
    const onPanda = () => refresh()
    window.addEventListener("storage", onStorage)
    window.addEventListener("panda-context-updated", onPanda as EventListener)
    return () => {
      window.removeEventListener("storage", onStorage)
      window.removeEventListener("panda-context-updated", onPanda as EventListener)
    }
  }, [])

  const handleSend = async () => {
    if (!input) return
    const userMessage = { sender: "user", text: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")

    const activeSession = sessionId || localStorage.getItem("lastSessionId") || ""
    const activeUser = userId || localStorage.getItem("lastUserId") || ""
    const activeBlog = blogId || localStorage.getItem("lastBlogId") || ""

    let response: any
    try {
      if (activeUser && activeBlog) {
        response = await api.chat("blog", { user_id: activeUser, blog_id: activeBlog, question: userMessage.text })
      } else if (activeSession) {
        response = await fetch("http://localhost:8000/query", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ session_id: activeSession, question: userMessage.text })
        }).then(r => r.json())
      } else if (activeUser) {
        response = await api.chat("profile", { user_id: activeUser, question: userMessage.text })
      } else {
        response = { answer: "No context available. Set a User ID + Blog ID (preferred) or a Session ID." }
      }
    } catch (e: any) {
      response = { answer: e?.message || "Error answering question." }
    }

    const botMessage = { sender: "bot", text: response.answer }
    setMessages(prev => [...prev, botMessage])
  }

  return (
    <Card className="flex flex-col h-[560px] border-border/60">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-sky-500 to-emerald-400 bg-clip-text text-transparent">Chatbot</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="sm:col-span-2">
            <Input value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID for profile/blog chat" />
          </div>
          <Button type="button" onClick={() => localStorage.setItem("lastUserId", userId)} className="sm:col-span-1">Use User</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="sm:col-span-2">
            <Input value={blogId} onChange={(e) => setBlogId(e.target.value)} placeholder="Blog ID (preferred with User ID)" />
          </div>
          <Button type="button" onClick={() => localStorage.setItem("lastBlogId", blogId)} className="sm:col-span-1">Use Blog</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="sm:col-span-2">
            <Input value={sessionId} onChange={(e) => setSessionId(e.target.value)} placeholder="Session ID (fallback)" />
          </div>
          <Button type="button" onClick={() => localStorage.setItem("lastSessionId", sessionId)} className="sm:col-span-1">Use Session</Button>
        </div>
        <ScrollArea className="h-[320px] pr-4">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-2xl max-w-[75%] shadow-sm ${msg.sender === 'user' ? 'bg-sky-500 text-white' : 'bg-muted'} `}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask using Blog/User (preferred) or Session context..." />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </Card>
  )
}

export default Chatbot
