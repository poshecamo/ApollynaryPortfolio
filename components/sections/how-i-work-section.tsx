"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ProcessPhase {
  title: string
  duration: string
  items: string[]
}

const phases: ProcessPhase[] = [
  {
    title: "Discovery & Strategy",
    duration: "Weeks 1–2",
    items: [
      "Deep dive into your brand, market, competitors, and audience",
      "Market research and positioning analysis",
      "Custom marketing strategy based on your goals, values, and expectations",
      "Content scripting and strategic planning",
    ],
  },
  {
    title: "Creation & Execution",
    duration: "Weeks 3+",
    items: [
      "Content production: writing, filming, editing, scheduling",
      "Building thought leadership and testing what resonates",
      "Continuous optimization based on performance and trends",
    ],
  },
  {
    title: "Refinement",
    duration: "Monthly+",
    items: ["Strategy improvements documentation", "Performance analysis and pivots", "Ongoing content evolution"],
  },
]

const services = [
  "Social media from start to finish: planning, scripting, filming, editing, posting",
  "Community management: answering DMs, engaging in comments, being human",
  "Content that educates and entertains (organic focus, but I do ads too when it makes sense)",
  "Building thought leadership, testing what works, improving as we go",
]

const notAFit = [
  'You want someone to "just post 3x a week" without strategy',
  "You're looking for viral hacks or overnight growth",
  "You need results in 2 weeks",
  "You want to micromanage every caption or expect 24/7 availability",
]

export function HowIWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  return (
    <section ref={containerRef} className="relative bg-background px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">How I Work</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 leading-tight">
            Monthly Contracts for Real Brand Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I take on monthly contracts (minimum 1 month, usually 3–6 months) because real brand work takes time. You
            can't build trust or shift perception in a week.
          </p>
        </motion.div>

        {/* What I Focus On */}
        <motion.div
          className="mb-24 bg-secondary rounded-xl p-8 md:p-12 border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-8">What I Focus On</h3>
          <div className="space-y-6">
            <div>
              <p className="text-foreground font-medium mb-2">Brand Positioning & Messaging</p>
              <p className="text-muted-foreground">
                Figuring out what your company actually stands for, then saying it in a way people care about. Brand
                positioning, voice, messaging — the stuff that makes people stop scrolling.
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium mb-2">Perception Over Vanity Metrics</p>
              <p className="text-muted-foreground">
                I don't chase leads or conversions. I work on how your brand is perceived. The rest follows naturally
                when people actually understand what you do.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What That Looks Like */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-8">What That Looks Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-xl p-8 border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground leading-relaxed">{service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Process Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-12">The Process</h3>

          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 bg-gradient-to-b from-black to-gray-700 rounded-full w-px"
              style={{ height: lineHeight }}
            />

            {/* Timeline items */}
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative pl-24"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 h-16 flex items-center justify-center w-16">
                    
                    <div className="relative bg-background border-2 border-primary rounded-full flex items-center justify-center mx-[px] px-[px] w-9 h-9">
                      
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="bg-secondary rounded-xl p-8 border border-border/50">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-serif text-xl text-foreground">{phase.title}</h4>
                        <p className="text-sm text-primary font-medium mt-1">{phase.duration}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* How We'll Work Together */}
        <motion.div
          className="mb-24 bg-secondary rounded-xl p-8 md:p-12 border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-8">How We'll Work Together</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <span className="text-foreground font-medium">Content Batching:</span> Content creation happens in batches
              — I plan, script, and produce in focused blocks, then schedule strategically.
            </p>
            <p>
              <span className="text-foreground font-medium">Communication:</span> Async-first with monthly strategy
              calls. I'm not available 24/7, but you'll always know what's happening.
            </p>
            <p>
              <span className="text-foreground font-medium">Pricing:</span> Monthly retainers tailored to your scope and
              goals. Contact me to discuss your needs and get a custom quote.
            </p>
          </div>
        </motion.div>

        {/* Not a Fit */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-8">Not a Fit If</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notAFit.map((item, index) => (
              <div key={index} className="bg-secondary rounded-xl p-6 border border-border/50 flex gap-3 items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                  <span className="text-destructive text-xs">✕</span>
                </div>
                <p className="text-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
