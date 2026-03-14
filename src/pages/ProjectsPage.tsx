import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { usePortfolio } from "@/contexts/PortfolioContext";

const categoryTitles = {
  "technical": "Technical Projects",
  "ui-ux": "UI/UX Design",
};

const categoryDescriptions = {
  "technical": "AI/ML, electronics, and technical development projects",
  "ui-ux": "User experience design, branding, and interface design",
};

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { activeCategory } = usePortfolio();

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <>
      <Helmet>
        <title>Projects | Mrinal Sharma</title>
        <meta
          name="description"
          content="Explore my portfolio of AI/ML, electronics, and design projects."
        />
      </Helmet>

      <section className={`min-h-screen pt-40 pb-20 transition-colors duration-500 ${
        activeCategory === "ui-ux" ? "bg-gray-900 text-white" : ""
      }`} ref={ref}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className={`text-caption mb-4 ${
              activeCategory === "ui-ux" ? "text-gray-300" : "text-muted-foreground"
            }`}>Portfolio</p>
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`text-headline mb-6 ${
                  activeCategory === "ui-ux" ? "text-white" : "text-foreground"
                }`}
              >
                {categoryTitles[activeCategory]}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-body ${
                  activeCategory === "ui-ux" ? "text-gray-300" : "text-muted-foreground"
                }`}
              >
                {categoryDescriptions[activeCategory]}
              </motion.p>
            </AnimatePresence>
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
    </>
  );
};

export default ProjectsPage;
