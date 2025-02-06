"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShinyText } from "@/components/ui/shiny-text"

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <ShinyText className="text-5xl font-bold mb-4">Hi, My name is Aniket Kadam</ShinyText>
        <h2 className="text-3xl mb-6 text-muted-foreground">I&apos;m a Full Stack Developer</h2>
        <div className="flex space-x-4 align-middle justify-center">
          <Button asChild>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get in Touch
            </motion.a>
          </Button>
          <Button variant="outline" asChild>
            <motion.a href="/Aniket_Kadam.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Download my Resume
            </motion.a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

