import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import api from "@/services/api"

const BlogManager = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const userBlogs = await api.getBlogs()
    setBlogs(userBlogs)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Card className="border-border/60">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Your Blogs</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Blog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a new blog post</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddBlog} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" />
              </div>
              <Button type="submit">Save</Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {blogs.length > 0 ? (
          <ul className="space-y-2">
            {blogs.map((blog: any) => (
              <li key={blog.blogId} className="p-3 rounded-lg border border-border/50 flex items-center justify-between">
                <div>
                  <p className="font-medium">{blog.title}</p>
                  <p className="text-xs text-muted-foreground">{blog.description}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">{blog.blogId}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">No blogs yet.</p>
        )}
      </CardContent>
    </Card>
  )
}

export default BlogManager
