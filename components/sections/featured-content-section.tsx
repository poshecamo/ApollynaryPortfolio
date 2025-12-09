"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export function FeaturedContentSection() {
  useEffect(() => {
    // Load Instagram embed script
    const instaScript = document.createElement("script")
    instaScript.src = "https://www.instagram.com/embed.js"
    instaScript.async = true
    document.body.appendChild(instaScript)

    // Load TikTok embed script
    const tiktokScript = document.createElement("script")
    tiktokScript.src = "https://www.tiktok.com/embed.v1.js"
    tiktokScript.async = true
    document.body.appendChild(tiktokScript)

    // Load LinkedIn embed script
    const linkedinScript = document.createElement("script")
    linkedinScript.src = "https://platform.linkedin.com/in.js"
    linkedinScript.async = true
    linkedinScript.charSet = "utf-8"
    linkedinScript.textContent = "lang: en_US"
    document.body.appendChild(linkedinScript)
  }, [])

  const posts = [
    // Instagram Reels
    {
      type: "instagram",
      url: "https://www.instagram.com/reel/DQvc41wjcgs/",
      id: "DQvc41wjcgs",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/reel/DLRl431uJ1d/",
      id: "DLRl431uJ1d",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/reel/DHb3ammSbgb/",
      id: "DHb3ammSbgb",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/reel/DLOP2FHSgFP/",
      id: "DLOP2FHSgFP",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/reel/DKIw3auSt3F/",
      id: "DKIw3auSt3F",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/reel/DR5kQQxjUpw/",
      id: "DR5kQQxjUpw",
    },
    // Instagram Posts
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DL8nk9pud7O/",
      id: "DL8nk9pud7O",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DLqvDeBuhjQ/",
      id: "DLqvDeBuhjQ",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DMY1sZVxQfT/",
      id: "DMY1sZVxQfT",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DNn3O3vpFkm/",
      id: "DNn3O3vpFkm",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DL0xKoZulrV/",
      id: "DL0xKoZulrV",
    },
    // TikTok
    {
      type: "tiktok",
      url: "https://www.tiktok.com/@canadian_ctb/video/7496910436508388613",
      id: "7496910436508388613",
    },
    // LinkedIn
    {
      type: "linkedin",
      url: "https://www.linkedin.com/posts/polina-moshenets_cybersecurity-startups-securityeducation-activity-7368334040484978689-DKN0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEzeHS0BuDGxdz9V-7yV0R01PYTiCEYoNQA",
      id: "7368334040484978689",
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/posts/polina-moshenets_cybersecurity-infosec-onlinesafety-activity-7359046310898900993-P4QK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEzeHS0BuDGxdz9V-7yV0R01PYTiCEYoNQA",
      id: "7359046310898900993",
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/posts/polina-moshenets_aisec-cybersec-activity-7353611952591364098-1oeA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEzeHS0BuDGxdz9V-7yV0R01PYTiCEYoNQA",
      id: "7353611952591364098",
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/posts/polina-moshenets_smartwatchhack-airgapsecurity-cyberespionage-activity-7340161860261863424-AFBM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEzeHS0BuDGxdz9V-7yV0R01PYTiCEYoNQA",
      id: "7340161860261863424",
    },
  ]

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Featured Work</p>
          <h2 className="font-serif text-5xl text-foreground mb-6">Latest Content</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked moments from Instagram, TikTok, and LinkedIn showcasing my work in cybersecurity, marketing, and
            entrepreneurship
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {posts.map((post, index) => (
            <motion.div
              key={`${post.type}-${post.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex justify-center"
            >
              {post.type === "instagram" && (
                <blockquote
                  className="instagram-media w-full max-w-sm"
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                />
              )}

              {post.type === "tiktok" && (
                <blockquote
                  className="tiktok-embed w-full"
                  cite={post.url}
                  data-unique-id={post.id}
                  style={{
                    maxWidth: "325px",
                    minWidth: "325px",
                  }}
                >
                  <section>
                    <a target="_blank" title={`TikTok Video ${post.id}`} href={post.url} rel="noreferrer">
                      Visit TikTok
                    </a>
                  </section>
                </blockquote>
              )}

              {post.type === "linkedin" && (
                <div
                  className="w-full rounded-lg overflow-hidden"
                  style={{
                    maxWidth: "550px",
                  }}
                >
                  <iframe
                    src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${post.id}`}
                    height="500"
                    width="100%"
                    frameBorder="0"
                    allowTransparency="true"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    title={`LinkedIn Post ${post.id}`}
                    className="rounded-lg"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
