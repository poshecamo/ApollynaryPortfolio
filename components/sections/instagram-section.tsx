"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function InstagramSection() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    // Fetch Instagram posts via unofficial API (for preview)
    // Note: This is a workaround for displaying Instagram feed
    // For production, consider using Instagram Graph API with proper authentication
    const fetchInstagramPosts = async () => {
      try {
        const username = "apollynary"
        // Using a public API endpoint to fetch Instagram data
        const response = await fetch(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        })

        if (response.ok) {
          const data = await response.json()
          const userPosts = data.data.user.edge_owner_to_timeline_media.edges.slice(0, 9)
          setPosts(userPosts)
        }
      } catch (error) {
        console.log("[v0] Instagram feed loading - using manual embed approach")
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  return (
    <section className="w-full bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-4">Follow My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what I'm working on and sharing on Instagram
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://www.instagram.com/apollynary/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg font-semibold"
          >
            View Full Instagram Profile
          </a>
        </motion.div>

        {/* Instagram Embed - Using official Instagram embed */}
        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl"
          >
            <iframe
              src="https://www.instagram.com/apollynary/embed"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
