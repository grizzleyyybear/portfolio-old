import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "mrinalsharmajune13@gmail.com",
      href: "mailto:mrinalsharmajune13@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7678502995",
      href: "tel:+917678502995",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/grizzleyyybear",
      href: "https://github.com/grizzleyyybear",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mrinal-sharma-92376b287",
      href: "https://www.linkedin.com/in/mrinal-sharma-92376b287",
    },
  ];

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-caption text-muted-foreground mb-4">Contact</p>
            <h2 className="text-headline text-foreground mb-6">
              Let's Build Something
            </h2>
            <p className="text-body text-muted-foreground max-w-xl mx-auto">
              Whether you're interested in collaborating on AI projects,
              discussing design, or exploring new ideas — I'd love to connect.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:bg-card/80 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <link.icon
                    size={24}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-caption text-muted-foreground mb-1">
                  {link.label}
                </p>
                <p className="text-body text-foreground group-hover:text-primary transition-colors">
                  {link.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 pt-8 border-t border-border text-center"
          >
            <p className="text-sm text-muted-foreground">
              Designed & Built by Mrinal Sharma
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              NSUT, New Delhi • {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
