"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShinyText } from "@/components/ui/shiny-text"

const experiences = [
    {
        company: "Zidio Development",
        position: "Web Development Intern",
        period: "Apr 2024 - Jun 2024",
        description: "Created end to end web applications Feedback System and Real Time chat application using MERN stack. Worked on the front-end using React, Redux, and Tailwind CSS. Implemented the back-end using Node.js, Express, and MongoDB. Integrated third-party APIs for authentication and payment gateway. Used WebSockets for real-time chat functionality.",
      },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <ShinyText className="text-3xl font-bold mb-8 text-center">Experience</ShinyText>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card hover:bg-card/80 transition-colors">
                <CardHeader>
                  <CardTitle>{exp.position}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-muted-foreground/80 mb-4">{exp.period}</p>
                  <p className="text-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

