export function ExpertiseSection() {
  return (
    <section className="relative bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">My Expertise</h2>
          <p className="font-serif text-xl md:text-2xl text-foreground/80 max-w-4xl leading-relaxed">
            I work at the rare intersection of cybersecurity risk analysis and brand strategy, a combination that allows
            me to not only understand complex technical systems but also translate them into narratives that drive
            business outcomes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Cybersecurity */}
            <div>
              <h3 className="font-serif text-3xl text-foreground mb-4">Cybersecurity & Risk Intelligence</h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  My work in cybersecurity focuses on threat analysis, vulnerability assessment, and risk communication
                  across emerging technologies, particularly AI and LLM security.
                </p>
                <p>
                  As co-founder of SichGate, I lead security research on large language model applications,
                  investigating prompt injection vulnerabilities, jailbreak techniques, and data poisoning risks. My
                  assessments follow industry frameworks including OWASP LLM Top 10 and the NIST AI Risk Management
                  Framework.
                </p>
                <p>
                  My technical background spans offensive and defensive security operations, including penetration
                  testing, vulnerability assessments, and threat pattern analysis. I specialize in making security
                  frameworks such as NIST CSF, ISO/IEC 27001, and MITRE ATT&CK accessible and implementable for
                  companies at any maturity level.
                </p>
              </div>
            </div>

            <div className="my-8">
              <img
                src="/images/ainight-universal-4559-202.jpeg"
                alt="Polina speaking at a cybersecurity event"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Brand Strategy */}
            <div>
              <h3 className="font-serif text-3xl text-foreground mb-4">Brand Strategy & Content Leadership</h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  I don't chase leads or conversions. I work on how your brand is perceived. The rest follows naturally
                  when people actually understand what you do.
                </p>
                <p>
                  In B2B technology, especially cybersecurity, buyers aren't looking for sales pitches. They're looking
                  for partners who understand their challenges. My marketing approach centers on education as
                  positioning, building trust through valuable content before the sales conversation begins.
                </p>
                <p>
                  I've developed brand strategies and content ecosystems for B2B tech companies, educational
                  institutions, and early-stage startups. My work spans multi-platform content strategy, thought
                  leadership development, and social media management.
                </p>
              </div>
            </div>

            <div className="my-8">
              <img
                src="/images/qwerty.jpg"
                alt="Video editing workspace showing content production"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Example Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-2xl text-foreground mb-4">Examples of My Work</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/reel/DLRl431uJ1d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground"
                >
                  Instagram: Cybersecurity Content Example 1
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/t/ZP8y8JP2W/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground"
                >
                  TikTok: Technical Education Content
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/reel/DL0xKoZulrV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground"
                >
                  Instagram: Brand Strategy Discussion
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/reel/DMc5ls5Rg32/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground"
                >
                  Instagram: Security Insights
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/reel/DIe5v_Vz__J/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground"
                >
                  Instagram: Tech Commentary
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/reel/DB5Oq-UxY4Z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground"
                >
                  Instagram: Industry Analysis
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Strategic Advantage */}
        <div className="border-t border-foreground/10 pt-16">
          <h3 className="font-serif text-3xl text-foreground mb-6">The Strategic Advantage</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-foreground/70 leading-relaxed">
              Most marketers don't speak tech. Most security professionals can't communicate beyond their technical
              peers. I operate in both worlds fluently. This dual expertise means I can assess the security posture of
              your product and craft the go-to-market messaging, understand the technical depth of what you're building
              and make it compelling to non-technical buyers.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              For founders building in cybersecurity, AI, or B2B tech, this combination is rare and increasingly
              essential. The companies that win aren't just technically superior; they're the ones that can explain
              their value clearly and build trust at scale.
            </p>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-20 border-t border-foreground/10 pt-16">
          <h3 className="font-serif text-3xl text-foreground mb-6">Current Focus</h3>
          <p className="text-foreground/70 leading-relaxed max-w-4xl mb-8">
            I'm building SichGate and leading LLM security research that makes AI systems safer and more trustworthy.
            Simultaneously, I consult with B2B tech startups on marketing strategy, brand positioning, and educational
            content that converts technical innovation into market traction.
          </p>
          <p className="text-foreground/70 leading-relaxed max-w-4xl">
            If you're building something technically complex and struggling to communicate its value, whether that's a
            cybersecurity platform, an AI product, or any B2B technology, let's talk.
          </p>
          <a
            href="mailto:hello@apollynary.com"
            className="inline-block mt-6 text-foreground hover:text-foreground/70 transition-colors border-b border-foreground"
          >
            hello@apollynary.com
          </a>
        </div>
      </div>
    </section>
  )
}
