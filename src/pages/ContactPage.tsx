import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@mrinal.dev" },
];

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <Helmet>
        <title>Contact | Mrinal Sharma</title>
        <meta
          name="description"
          content="Get in touch with Mrinal Sharma for collaborations and opportunities."
        />
      </Helmet>

      <section className="min-h-screen pt-40 pb-20" ref={ref}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <p className="text-caption text-muted-foreground mb-4">Contact</p>
              <h1 className="text-headline text-foreground mb-6">
                Let's Work Together
              </h1>
              <p className="text-body text-muted-foreground max-w-xl mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 md:p-8 rounded-xl bg-card border border-border"
              >
                <h3 className="font-serif text-xl text-foreground mb-6">
                  Send a Message
                </h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Name
                      </label>
                      <Input placeholder="Your name" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="What's this about?" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button className="w-full gap-2">
                    Send Message
                    <Send size={16} />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-body text-muted-foreground mb-8">
                    Whether you have a question, want to collaborate on a project, 
                    or just want to say hi, feel free to reach out. I'll get back 
                    to you as soon as possible.
                  </p>

                  <div className="space-y-4 mb-12">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground">hello@mrinal.dev</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with me
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                          aria-label={link.label}
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
