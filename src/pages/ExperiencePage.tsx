import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Creative Head",
    organization: "IEEE NSUT",
    location: "New Delhi",
    period: "2024 - Present",
    description:
      "Leading creative initiatives and design projects for IEEE student chapter. Managing team of designers and coordinating visual identity across events.",
    skills: ["Leadership", "Design", "Event Management"],
  },
  {
    title: "3D Rendering Artist",
    organization: "Freelance",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Creating stunning 3D animations and renders using Blender. Specializing in fluid simulations, abstract art, motion graphics, and cinematic sequences. All 3D renders showcased in my portfolio are original works created by me.",
    skills: ["Blender", "3D Animation", "Rendering", "VFX"],
  },
  {
    title: "ML Research Intern",
    organization: "Research Lab",
    location: "Remote",
    period: "2024",
    description:
      "Worked on anomaly detection algorithms and time-series analysis using deep learning models. Contributed to research publications and prototype development.",
    skills: ["PyTorch", "Research", "Data Analysis"],
  },
  {
    title: "Founder",
    organization: "PunRek",
    location: "India",
    period: "2024 - Present",
    description:
      "Building an AI-native EDA platform to democratize electronics design in India. Leading product development and strategic partnerships.",
    skills: ["Entrepreneurship", "AI/ML", "Product"],
  },
  {
    title: "3D Rendering Intern",
    organization: "MetaFusion",
    location: "Remote",
    period: "2023",
    description:
      "Worked on creating high-quality 3D renders and animations for client projects. Specialized in fluid simulations and abstract art using Blender.",
    skills: ["Blender", "3D Animation", "Rendering"],
  },
];

const ExperiencePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <Helmet>
        <title>Experience | Mrinal Sharma</title>
        <meta
          name="description"
          content="Professional experience and roles of Mrinal Sharma."
        />
      </Helmet>

      <section className="min-h-screen pt-40 pb-20" ref={ref}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-caption text-muted-foreground mb-4">Experience</p>
            <h1 className="text-headline text-foreground mb-12">
              Professional Journey
            </h1>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative pl-8 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary border-2 border-background" />

                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-serif text-xl text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {exp.organization}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-body text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
