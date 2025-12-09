"use client"

import { motion } from "framer-motion"
import { Megaphone, Shield, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What I Can Help With
        </motion.p>

        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What I Can Help With
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Marketing & Content Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[320px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1 flex items-center justify-center">
              <Megaphone className="w-16 h-16 text-primary/60" />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Marketing & Content</h3>
              <ul className="text-muted-foreground text-sm mt-2 space-y-1">
                <li>Brand positioning and messaging for tech companies</li>
                <li>Content strategy and creation (LinkedIn, blogs, thought leadership)</li>
                <li>Social media management with technical accuracy</li>
                <li>Making security/compliance concepts understandable</li>
              </ul>
            </div>
          </motion.div>

          {/* Cybersecurity Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[320px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1 flex items-center justify-center">
              <Shield className="w-16 h-16 text-primary/60" />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Cybersecurity</h3>
              <ul className="text-muted-foreground text-sm mt-2 space-y-1">
                <li>Security awareness campaigns and training content</li>
                <li>Risk communication for non-technical stakeholders</li>
                <li>Go-to-market strategy for security products</li>
                <li>Translating technical features into customer value</li>
              </ul>
            </div>
          </motion.div>

          {/* Who I Work With Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[320px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1 flex items-center justify-center">
              <Users className="w-16 h-16 text-primary/60" />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Who I Work With</h3>
              <p className="text-muted-foreground text-sm mt-2">
                B2B tech companies, cybersecurity vendors, SaaS startups, tech founders who hate their current
                marketing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
