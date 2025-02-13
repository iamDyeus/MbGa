"use client"

import { useState } from "react"
import { Menu, MessageSquare, Paperclip, ArrowUp, HandMetal, RotateCcw, Eclipse } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ChatApp() {
  const [message, setMessage] = useState("")
  const examplePrompts = [
    { main: "Help me book a flight", sub: "from San Francisco to London" },
    { main: "What is the status", sub: "of flight BA142 flying tmrw?" }
  ];
  

  return (
    <div className="min-h-screen bg-background text-gray-300">
      
      {/* Header */}
      <header className="border-b border-zinc-800 p-4">
        <div className="flex items-center gap-4">
          <HandMetal className="w-6 h-6" />
          <span className="text-gray-300">Make Baddies' Great Again</span>
        </div>
      </header>

      {/* Chat Area */}
      <main className="max-w-3xl mx-auto p-4 space-y-8">
        {/* System Message */}
        <div className="relative bg-zinc-900 rounded-2xl p-6 shadow-lg">
          <div className="absolute -top-3 right-6 flex gap-2">
            <button className="p-1 bg-zinc-800 rounded">▲</button>
            <button className="p-1 bg-zinc-800 rounded">
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is an open source Chatbot template powered by the Google Gemini model built with Next.js and the AI
              SDK by Vercel. It uses the{" "}
              <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-gray-400">streamText</code> function in the server
              and the <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-gray-400">useChat</code> hook on the
              client to create a seamless chat experience.
            </p>
            <p className="text-gray-400">
              You can learn more about the AI SDK by visiting the{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                Docs
              </Link>
              .
            </p>
          </div>
        </div>

        
        {/* Example Prompts */}
        <div className="flex gap-4">
          {examplePrompts.map((prompt, index) => (
            <button
              key={index}
              className="bg-zinc-900 hover:bg-zinc-800 transition-colors px-4 py-3 rounded-xl text-left text-gray-400"
            >
              {prompt.main}
              <br />
              <span className="text-gray-500">{prompt.sub}</span>
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="fixed bottom-6 left-4 right-4 max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send a message..."
              className="w-full bg-zinc-900 text-gray-300 rounded-xl pl-4 pr-20 py-4 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline"><Eclipse className="w-6 h-6"/></Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Select Mode</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    {/* Add Drop select */}
                    <Select >
                      {/* <FormControl> */}
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      {/* </FormControl> */}
                      <SelectContent>
                        <SelectItem value="toxicity">Toxicity Meter</SelectItem>
                        <SelectItem value="detox">Detox Plan Generator</SelectItem>
                        <SelectItem value="conflict-mediator">Bro Code Red</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-m">here comes the desc for the particular mode</p>
                  
                  </div>
                </DialogContent>
              </Dialog>

              <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <ArrowUp className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

