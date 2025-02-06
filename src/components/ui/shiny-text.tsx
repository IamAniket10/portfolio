import type React from "react"
import { cn } from "@/lib/utils"

interface ShinyTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function ShinyText({ children, className, ...props }: ShinyTextProps) {
  return (
    <h1
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",
        "animate-text",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

