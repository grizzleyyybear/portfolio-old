import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="section-container relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          {/* Caption */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-caption text-muted-foreground mb-6"
          >
            AI/ML Engineer • UI/UX Designer • Creative Technologist
          </motion.p>

          {/* Main Title */}
          <h1 className="text-display text-foreground mb-8">
            <AnimatedText text="Mrinal Sharma" delay={0.4} />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-subheadline text-muted-foreground max-w-2xl mb-12"
          >
            Bridging the gap between intelligent systems and beautiful interfaces.
            Currently building{" "}
            <span className="text-primary font-medium">PunRek</span> — an AI-native
            EDA platform empowering India's electronics future.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="w-32 h-px bg-primary origin-left mb-12"
          />

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap gap-12"
          >
            <div>
              <p className="font-serif text-4xl text-primary mb-1">NSUT</p>
              <p className="text-sm text-muted-foreground">B.Tech ECE • 2027</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-primary mb-1">AI/ML</p>
              <p className="text-sm text-muted-foreground">Specialization</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-primary mb-1">IEEE</p>
              <p className="text-sm text-muted-foreground">Creative Head</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
