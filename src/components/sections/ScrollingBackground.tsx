"use client"
import { useEffect, useState } from "react"

export function ScrollingBackground() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed inset-0 z-[-1]"
      style={{
        //backgroundImage: 'url("/background.webp")',
        backgroundSize: "cover",
        backgroundPosition: `center ${offset * 0.5}px`,
      }}
    />
  )
}

