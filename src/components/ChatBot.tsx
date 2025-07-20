import { useEffect, useRef } from "react";
import { MessageSquare, Trash2 } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { useGroqChat } from "@/hooks/useGroqChat";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ChatBot() {
  const { messages, isLoading, sendMessage, clearMessages } = useGroqChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse-glow">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">AI ChatBot</h1>
            <p className="text-sm text-muted-foreground">Developed by Pooja</p>
          </div>
        </div>
        
        {messages.length > 0 && (
          <Button
            onClick={clearMessages}
            variant="outline"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 px-0">
        <div className="flex flex-col">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center animate-fade-in">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Welcome to AI ChatBot
              </h2>
              <p className="text-muted-foreground max-w-md">
                Start a conversation! Ask me anything and I'll do my best to help you.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.message}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))
          )}
          
          {isLoading && (
            <div className="flex gap-3 p-4 animate-fade-in">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-chat-bot border border-border">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 rounded-lg bg-chat-bot px-3 py-2 border border-border">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}