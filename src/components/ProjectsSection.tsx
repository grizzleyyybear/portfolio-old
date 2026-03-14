import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { usePortfolio } from "@/contexts/PortfolioContext";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { activeCategory } = usePortfolio();

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-caption text-muted-foreground mb-4">Work</p>
          <h2 className="text-headline text-foreground mb-6">
            Selected Projects
          </h2>
          <p className="text-body text-muted-foreground">
            From AI-powered platforms to hardware diagnostics, each project
            represents a fusion of technical depth and design thinking.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                dark={activeCategory === "ui-ux"}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;