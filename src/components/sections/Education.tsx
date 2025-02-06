"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShinyText } from "@/components/ui/shiny-text"

const education = [
    {
        degree: "Bachelor of Engineering in Computer Science",
        school: "Vidyalankar Institute of Technology, Mumbai",
        period: "2019 - 2023",
    },
]

export default function Education() {
    return (
        <section id="education" className="py-16 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <ShinyText className="text-3xl font-bold mb-8 text-center">Education</ShinyText>
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-card hover:bg-card/80 transition-colors">
                                <CardHeader>
                                    <CardTitle>{edu.degree}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-2">{edu.school}</p>
                                    <p className="text-muted-foreground/80">{edu.period}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

