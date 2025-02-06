"use client"
import { motion } from "framer-motion"
import { ShinyText } from "@/components/ui/shiny-text"

export default function About() {
    return (
        <section id="about" className="py-16 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <ShinyText className="text-3xl font-bold mb-8 text-center">About Me</ShinyText>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg max-w-2xl mx-auto text-center text-muted-foreground"
                >
                    I&apos;m a full-stack developer with a passion for building beautiful and functional websites. When I&apos;m not coding, you can find me running for marathon or playing with my cats.
                </motion.p>
            </div>
        </section>
    )
}

