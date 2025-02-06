"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ShinyText } from "@/components/ui/shiny-text"


const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "C++",
  "PostgreSQL",
  "MongoDB",
  "Next.js",
  "Git",
  "Tailwind CSS",
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <ShinyText className="text-3xl font-bold mb-8 text-center">Skills</ShinyText>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Badge variant="outline" className="text-lg text-muted-foreground py-2 px-4">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

