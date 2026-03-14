import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <Helmet>
        <title>About | Mrinal Sharma</title>
        <meta name="description" content="Learn more about Mrinal Sharma - AI/ML Engineer and Creative Technologist." />
      </Helmet>

      <section className="min-h-screen pt-40 pb-20" ref={ref}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-caption text-muted-foreground mb-4">About</p>
            <h1 className="text-headline text-foreground mb-12">
              The Person Behind the Work
            </h1>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Photo placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/5] rounded-2xl bg-secondary border border-border flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <User size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Your photo here</p>
                </div>
              </motion.div>

              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <p className="text-body-lg text-foreground mb-6">
                    I'm Mrinal Sharma, an AI/ML engineer and creative technologist 
                    passionate about building intelligent systems that bridge the gap 
                    between cutting-edge technology and beautiful design.
                  </p>
                  <p className="text-body text-muted-foreground mb-8">
                    Currently pursuing B.Tech in Electronics and Communication Engineering 
                    at NSUT, I specialize in deep learning, computer vision, and 
                    generative AI. My flagship project, PunRek, aims to revolutionize 
                    India's electronics design landscape.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-primary" />
                      <span>NEW DELHI, DELHI-110044</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <GraduationCap size={18} className="text-primary" />
                      <span>B.Tech 2023-2027 NSUT 7.41</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <GraduationCap size={18} className="text-primary" />
                      <span>CBSE (Class XII) 2023 Dhruva Public Sr. Sec. School 90%</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <GraduationCap size={18} className="text-primary" />
                      <span>CBSE (Class X) 2021 Saffron Public School 95%</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Briefcase size={18} className="text-primary" />
                      <span>IEEE NSUT • Creative Head</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bio paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4">Background</h3>
                  <p className="text-body text-muted-foreground">
                    My journey began with a fascination for electronics and 
                    gradually evolved into a deep interest in artificial intelligence. 
                    I believe in the power of combining hardware expertise with 
                    software innovation to create truly impactful solutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4">Philosophy</h3>
                  <p className="text-body text-muted-foreground">
                    Great technology should be invisible—it should just work. 
                    I strive to create systems that are not only technically 
                    robust but also intuitive and accessible to users of all 
                    backgrounds.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
