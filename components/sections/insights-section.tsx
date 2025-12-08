"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function InsightsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="bg-background px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* My Journey Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.p>

          <div className="space-y-8">
            <motion.p className="text-lg md:text-xl text-foreground/90 leading-relaxed" style={{ y: y1 }}>
              I didn't start in cybersecurity or tech. I started the way many do — in marketing, storytelling, and
              figuring out why people care about certain ideas and products.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-foreground/90 leading-relaxed" style={{ y: y2 }}>
              Along the way, I got curious about the technical side of everything. One cybersecurity course turned into
              a certification, degree then another, then real work with security teams. At some point, I realized I
              wasn't just "interested" — I was deeply in the space.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              And the more I worked with technical people, the more obvious it became: brilliant founders and engineers
              often struggle to explain their own product. Not because they don't know it — but because the language of
              business and the language of engineering rarely overlap. So I built my career at that intersection.
            </motion.p>

            <motion.div
              className="border-l-2 border-primary pl-6 my-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic">
                On one side: cybersecurity, risk, and technical depth. On the other: communication, content, and
                strategy. And somewhere in the middle, a founder who wanted to build something people actually
                understand.
              </p>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Content creation came naturally. I started sharing my thoughts on tech culture, cybersecurity, and startup
              life — and discovered people were craving simple, honest, slightly chaotic explanations of complex things.
              The audience grew fast. And it helped me see how many companies were trying to say something meaningful,
              but getting lost in jargon.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-primary font-medium leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Today, I get to do both: build my own startup, and help other tech companies tell their story clearly —
              without dumbing it down.
            </motion.p>
          </div>
        </motion.div>

        {/* Community & Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Community & Events
          </motion.p>

          <div className="space-y-8">
            <motion.p
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              I've always believed that the best ideas in tech happen when smart people get in the same room — not on a
              Zoom call. That's why community building became a natural part of my journey.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Over the past few years, I've hosted and co-hosted events around AI ethics, cybersecurity, risk, and the
              future of tech — bringing together founders, security professionals, researchers, and students.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Those events eventually connected me with hundreds of people across North America and the Middle East —
              and shaped how I think about communication, trust, and the role of tech/marketing.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-primary font-medium leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Community is the reason I'm here. It's what pushed me into building my startup, sharing content, and
              helping others.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
