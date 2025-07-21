import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex gap-3 p-4 animate-fade-in",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full",
          isUser
            ? "bg-chat-user text-chat-user-foreground"
            : "bg-chat-bot text-chat-bot-foreground border border-border"
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Message content */}
      <div
        className={cn(
          "flex flex-col gap-2 rounded-lg px-3 py-2 text-sm max-w-[80%]",
          isUser
            ? "bg-chat-user text-chat-user-foreground ml-auto"
            : "bg-chat-bot text-chat-bot-foreground border border-border"
        )}
      >
        {isUser ? (
          // User messages - plain text
          <p className="leading-relaxed">{message}</p>
        ) : (
          // AI messages - markdown formatted
          <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:text-foreground">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                // Custom styling for different markdown elements
                h1: ({children}) => <h1 className="text-lg font-bold mb-2 text-foreground">{children}</h1>,
                h2: ({children}) => <h2 className="text-base font-bold mb-2 text-foreground">{children}</h2>,
                h3: ({children}) => <h3 className="text-sm font-bold mb-1 text-foreground">{children}</h3>,
                p: ({children}) => <p className="leading-relaxed mb-2 last:mb-0 text-foreground">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-inside mb-2 space-y-1 text-foreground">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-2 space-y-1 text-foreground">{children}</ol>,
                li: ({children}) => <li className="text-foreground">{children}</li>,
                code: ({children, className}) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono text-foreground">{children}</code>
                  ) : (
                    <code className={className}>{children}</code>
                  );
                },
                pre: ({children}) => (
                  <pre className="bg-muted p-3 rounded-md overflow-x-auto mb-2 text-sm">
                    {children}
                  </pre>
                ),
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-primary pl-3 italic mb-2 text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                strong: ({children}) => <strong className="font-bold text-foreground">{children}</strong>,
                em: ({children}) => <em className="italic text-foreground">{children}</em>,
                br: () => <br className="mb-2" />,
              }}
            >
              {message}
            </ReactMarkdown>
          </div>
        )}
        <time className="text-xs opacity-70">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </time>
      </div>
    </div>
  );
}