"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export function SubstackSection() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://substack.com/embedjs/embed.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="bg-background px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Left: Substack embed */}
          <div className="flex-1 min-w-0">
            <div className="substack-post-embed">
              <p lang="en">
                I Watched a Founder Social Engineer an Entire Room (And It Was Beautiful) - Pitch Roast by Polina
                Moshenets
              </p>
              <p>Also: why getting roasted might be the feedback your startup actually needs </p>
              <a data-post-link href="https://apollynary.substack.com/p/i-watched-a-founder-social-engineer">
                Read on Substack
              </a>
            </div>
          </div>

          {/* Right: Simple text and link */}
          <div className="flex-1 md:pt-4">
            <h2 className="text-2xl font-serif text-foreground mb-3">Join My Newsletter</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Insights on tech culture, cybersecurity, startup marketing, and lessons learned.
            </p>
            <a
              href="https://substack.com/@apollynary?utm_campaign=profile&utm_medium=profile-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary underline underline-offset-4 transition-colors font-serif"
              data-clickable
            >
              Subscribe on Substack →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
