import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { ArrowDown, ArrowRight } from "lucide-react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const categoryDescriptions = {
  "technical": "AI/ML, electronics, and technical development projects",
  "ui-ux": "User experience design, branding, and interface design",
};

const HomePage = () => {
  const { activeCategory } = usePortfolio();

  return (
    <>
      <Helmet>
        <title>Mrinal Sharma | AI/ML Engineer & UI/UX Designer</title>
        <meta
          name="description"
          content="Portfolio of Mrinal Sharma - AI/ML Engineer, UI/UX Designer, and Creative Technologist."
        />
      </Helmet>

      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32">
        <div
          className="absolute inset-0 opacity-50"
          style={{ background: "var(--gradient-hero)" }}
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-caption text-muted-foreground mb-6"
            >
              AI/ML Engineer • Electronics • Creative Technologist
            </motion.p>

            <h1 className="text-display text-foreground mb-8">
              <AnimatedText text="Mrinal Sharma" delay={0.4} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-subheadline text-muted-foreground max-w-2xl mb-8"
            >
              {categoryDescriptions[activeCategory]}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.5 }}
              className="w-32 h-px bg-primary origin-left mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-colors"
              >
                About Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-wrap gap-8 md:gap-12 mt-16"
            >
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary mb-1">NSUT</p>
                <p className="text-xs md:text-sm text-muted-foreground">B.Tech ECE • 2027</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary mb-1">AI/ML</p>
                <p className="text-xs md:text-sm text-muted-foreground">Specialization</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary mb-1">IEEE</p>
                <p className="text-xs md:text-sm text-muted-foreground">Creative Head</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* All other sections */}
      <About />
      <ProjectsSection />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
