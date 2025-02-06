import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Aniket Kadam. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/aniket-kadam29/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/ImAniket10" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://instagram.com/iam_ani_ket" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

