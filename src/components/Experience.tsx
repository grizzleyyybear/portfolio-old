import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Creative Head",
    company: "IEEE NSUT",
    period: "June 2025 – Present",
    description:
      "Led graphic design and branding Teams for IEEE NSUT events, ensuring high-quality visual communication. Overseeing all creative projects, leading design teams, delivering engaging visuals and intuitive app interfaces to promote events, ensuring impactful branding and user engagement.",
    type: "position",
  },
  {
    title: "3D Rendering Artist",
    company: "Freelance",
    period: "2023 – Present",
    description:
      "Creating original 3D animations, renders, and visual effects using Blender. Specializing in fluid simulations, abstract art, motion graphics, and cinematic sequences. All 3D renders showcased in my portfolio are original works created by me, demonstrating advanced 3D modeling and animation skills.",
    type: "freelance",
  },
  {
    title: "3D Rendering Intern",
    company: "MetaFusion",
    period: "2023",
    description:
      "Worked on creating high-quality 3D renders and animations for client projects. Specialized in fluid simulations and abstract art using Blender.",
    type: "internship",
  },
];

const achievements = [
  "Certificate of Recognition at IEEE Tensymp and IEEE AISYWLC, Chennai",
  "Gold Medal for Community work at UMEED NGO",
  "Consistent Academic Excellence: Maintained a strong academic record with notable performance in coursework relevant to computer science and engineering",
  "Secured a rank of 54683 in JEE (Mains)",
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-caption text-muted-foreground mb-4">
                Experience
              </p>
              <h2 className="text-headline text-foreground mb-8">
                Journey So Far
              </h2>
              <div className="w-24 h-px bg-primary mb-12" />
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary" />

                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${
                        exp.type === "internship"
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {exp.type === "internship" ? "Internship" : "Position"}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {exp.company}
                  </p>
                  <p className="text-body text-muted-foreground">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-caption text-muted-foreground mb-4">
                Recognition
              </p>
              <h2 className="text-headline text-foreground mb-8">
                Achievements
              </h2>
              <div className="w-24 h-px bg-primary mb-12" />
            </motion.div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="p-5 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <p className="text-body text-foreground">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
