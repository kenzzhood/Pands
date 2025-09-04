import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { Upload } from "lucide-react"
import api from "@/services/api"

const AudioUpload = () => {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [sessionId, setSessionId] = useState<string>(`${Date.now()}`)
  const [userId, setUserId] = useState<string>("1")
  const [blogId, setBlogId] = useState<string>("1")
  const [message, setMessage] = useState<string>("")

  const simulateProgress = () => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 150)
  }

  const handleUpload = async () => {
    if (!file) return
    setMessage("")
    setProgress(0)
    simulateProgress()
    try {
      const res = await api.ingestAudio(sessionId, userId, blogId, file)
      // Persist latest context for the chatbot
      localStorage.setItem("lastSessionId", sessionId)
      localStorage.setItem("lastUserId", userId)
      localStorage.setItem("lastBlogId", blogId)
      // Notify same-tab listeners (storage event doesn't fire in same tab)
      window.dispatchEvent(new CustomEvent("panda-context-updated"))
      setMessage(res?.message || "Uploaded and ingested successfully.")
    } catch (e: any) {
      setMessage(e?.message || "Upload failed.")
    }
  }

  return (
    <Card className="border-border/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Upload className="h-5 w-5 text-sky-500" /> Upload Audio</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="session">Session ID</Label>
            <Input id="session" value={sessionId} onChange={(e) => setSessionId(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="user">User ID</Label>
            <Input id="user" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="blog">Blog ID</Label>
            <Input id="blog" value={blogId} onChange={(e) => setBlogId(e.target.value)} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="audio-file">Audio File</Label>
          <Input id="audio-file" type="file" accept="audio/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleUpload} disabled={!file}>Upload</Button>
          {message && <span className="text-sm text-muted-foreground">{message}</span>}
        </div>
        {progress > 0 && <Progress value={progress} className="w-full" />}
      </CardContent>
    </Card>
  )
}

export default AudioUpload
