"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShinyText } from "@/components/ui/shiny-text"

const projects = [
    {
        title: "Learning Hub",
        description: "A Learning Management System (LMS) built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring separate Admin and User views for course management.",
        image: "/LearningHub.png?height=200&width=300",
        github: "https://github.com/IamAniket10/Learning_Hub",
        live: "https://learning-hub-frontend.vercel.app/",
    },
    {
        title: "Menu Management System",
        description: "This is the backend server for a menu management application built using Node.js and Express.js. The application allows users to manage categories, subcategories, and items within a menu.",
        image: "/Server.svg?height=200&width=300",
        github: "https://github.com/IamAniket10/Menu-Management-backend",
        live: "https://menu-management-backend-pj2c.onrender.com/",
    },
    {
        title: "SparkChat",
        description: "A real-time chat application built using MERN stack with secure login and group chat features, used websocket for real-time chat functionality, end to end encryption for user privacy.",
        image: "/chat app.svg?height=200&width=300",
        github: "https://github.com/IamAniket10/SparkChat",
        live: "",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <ShinyText className="text-3xl font-bold mb-8 text-center">Projects</ShinyText>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-card hover:bg-card/80 transition-colors">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="w-full rounded-t-lg"
                                />
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>
                                    <div className="flex justify-between">
                                        <Button variant="outline" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <FaGithub className="mr-2" /> GitHub
                                            </a>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <FaExternalLinkAlt className="mr-2" /> Live Demo
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

