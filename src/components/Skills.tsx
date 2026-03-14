import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C/C++", "JavaScript", "Python", "Assembly"],
  },
  {
    title: "Libraries or Frameworks",
    skills: [
      "React.js",
      "Express.js",
      "Vite.js",
      "TensorFlow.js",
      "OpenCV.js",
      "Face-API.js",
    ],
  },
  {
    title: "Tools or Platforms",
    skills: [
      "Git & GitHub",
      "Linux (Arch Linux)",
      "Bash",
      "Android Studio",
      "Visual Studio",
      "Figma",
      "Adobe Suite",
      "Blender",
      "Autodesk MAYA",
      "Autodesk 3DS MAX",
    ],
  },
  {
    title: "Scripting Language",
    skills: ["Shell Scripting"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-caption text-muted-foreground mb-4">Expertise</p>
          <h2 className="text-headline text-foreground mb-6">
            Technical Skills
          </h2>
          <p className="text-body text-muted-foreground">
            A diverse toolkit spanning AI/ML, web development, 3D design, and
            hardware engineering.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <h3 className="font-serif text-xl text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
