import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Computer Vision", level: 88 },
      { name: "NLP", level: 80 },
      { name: "Deep Learning", level: 92 },
    ],
  },
  {
    title: "Electronics & Hardware",
    skills: [
      { name: "Verilog/VHDL", level: 85 },
      { name: "FPGA Design", level: 82 },
      { name: "PCB Design", level: 78 },
      { name: "Embedded C", level: 88 },
      { name: "ARM Cortex", level: 80 },
    ],
  },
  {
    title: "Development",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "React/Next.js", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Docker/K8s", level: 75 },
    ],
  },
  {
    title: "Design & Creative",
    skills: [
      { name: "Figma", level: 90 },
      { name: "UI/UX Design", level: 88 },
      { name: "Brand Design", level: 82 },
      { name: "Motion Design", level: 78 },
      { name: "Design Systems", level: 85 },
    ],
  },
];

const SkillsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <Helmet>
        <title>Skills | Mrinal Sharma</title>
        <meta
          name="description"
          content="Technical skills and expertise of Mrinal Sharma."
        />
      </Helmet>

      <section className="min-h-screen pt-40 pb-20" ref={ref}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-caption text-muted-foreground mb-4">Expertise</p>
            <h1 className="text-headline text-foreground mb-6">
              Skills & Technologies
            </h1>
            <p className="text-body text-muted-foreground">
              A blend of technical depth and creative thinking across multiple domains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="p-6 md:p-8 rounded-xl bg-card border border-border"
              >
                <h3 className="font-serif text-xl text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + skillIndex * 0.1,
                          }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
