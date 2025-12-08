"use client"

import { motion } from "framer-motion"
import { Mail, Coffee, Globe } from "lucide-react"

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">{"Let's Connect"}</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            {
              "I'm always interested in talking to tech founders, cybersecurity professionals, and companies that want to communicate better. Coffee chats welcome."
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Availability Card */}
          <motion.div
            className="relative bg-background rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-clickable
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="font-serif text-xl text-foreground">Availability</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Available for select freelance projects and consulting in North America and Middle East.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="relative bg-background rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            data-clickable
          >
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-6 h-6 text-primary" />
              <h3 className="font-serif text-xl text-foreground">Get in Touch</h3>
            </div>
            <a
              href="mailto:hello@apollynary.com"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              data-clickable
            >
              <Mail className="w-4 h-4" />
              hello@apollynary.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
