"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/apollynary/", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/in/polina-moshenets/", icon: Linkedin },
  { label: "X", href: "https://x.com/MoshenetsPolina", icon: Twitter },
]

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo and links */}
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Apollynary.
            </motion.h2>

            <nav className="flex flex-wrap gap-6 mt-8">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground text-sm mb-4">
              {
                "I started in marketing, got deep into cybersecurity, and realized most tech companies are terrible at explaining what they do. So I decided to fix that."
              }
            </p>
            <a
              href="mailto:hello@apollynary.com"
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-clickable
            >
              hello@apollynary.com
            </a>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Polina Moshenets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
