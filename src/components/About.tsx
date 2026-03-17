import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-caption text-muted-foreground mb-4">About</p>
            <h2 className="text-headline text-foreground mb-8">
              From Lab to Vision
            </h2>
            <div className="w-24 h-px bg-primary mb-8" />
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-body-lg text-foreground">
              I'm Mrinal Sharma, a third-year Electronics and Communication
              Engineering student at Netaji Subhas University of Technology,
              specializing in AI & ML.
            </p>
            <p className="text-body text-muted-foreground">
              My journey into AI began in our university labs, implementing
              Conditional Generative Adversarial Networks (cGANs) for generative
              inverse design. I saw firsthand the power of AI to automate and
              revolutionize design processes.
            </p>
            <p className="text-body text-muted-foreground">
              At the intersection of intelligent systems and creative design, I
              build products that are both technically sophisticated and
              beautifully intuitive. My work spans from deep learning models to
              3D visualizations, always with a focus on solving real-world
              problems.
            </p>

            {/* Education cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 bg-card rounded-lg border border-border"
              >
                <p className="font-serif text-2xl text-foreground mb-2">
                  B.Tech ECE
                </p>
                <p className="text-sm text-muted-foreground">
                  NSUT, New Delhi
                </p>
                <p className="text-sm text-muted-foreground">2023 - 2027</p>
                <p className="text-sm font-medium text-primary mt-2">
                  CGPA: 7.53
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 bg-card rounded-lg border border-border"
              >
                <p className="font-serif text-2xl text-foreground mb-2">
                  Class XII
                </p>
                <p className="text-sm text-muted-foreground">
                  Dhruva Public Sr. Sec. School
                </p>
                <p className="text-sm text-muted-foreground">2023</p>
                <p className="text-sm font-medium text-primary mt-2">90%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
