import { motion } from "framer-motion";
import { Upload, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  isPlaceholder?: boolean;
  featured?: boolean;
  links?: {
    live?: string;
    github?: string;
  };
  index: number;
  dark?: boolean;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  tags,
  image,
  video,
  isPlaceholder = false,
  featured = false,
  links,
  index,
  dark = false,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group ${featured ? "lg:col-span-2" : ""}`}
    >
      <div
        className={`h-full rounded-xl overflow-hidden border transition-all duration-500 hover:border-primary/30 hover:shadow-lg ${
          featured ? "lg:grid lg:grid-cols-2" : ""
        } ${
          dark 
            ? "border-gray-700 bg-gray-800 hover:border-primary/50" 
            : "border-border bg-card"
        }`}
      >
        {/* Image / Placeholder */}
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[4/3] lg:aspect-auto" : "aspect-[16/10]"
          }`}
        >
          {isPlaceholder ? (
            <div className="absolute inset-0 upload-zone">
              <div className="text-center p-8">
                <Upload
                  size={32}
                  className="mx-auto mb-4 text-muted-foreground"
                />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload project image
                </p>
                <p className="text-xs text-muted-foreground/60">
                  Drag & drop or click to upload
                </p>
              </div>
            </div>
          ) : video ? (
            <video
              src={video}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              loop
              playsInline
              autoPlay
              onLoadedData={(e) => {
                // Ensure video loads properly
                const videoElement = e.target as HTMLVideoElement;
                videoElement.play().catch(() => {
                  // Autoplay failed, video will play on hover
                });
              }}
            />
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <span className="font-serif text-4xl text-muted-foreground/30">
                {title.charAt(0)}
              </span>
            </div>
          )}

          {/* Overlay on hover */}
          {!isPlaceholder && (
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
          )}
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 flex flex-col">
          {subtitle && (
            <p className="text-caption text-primary mb-2">{subtitle}</p>
          )}
          <h3 className={`font-serif text-2xl lg:text-3xl mb-3 group-hover:text-primary transition-colors ${
            dark ? "text-white" : "text-foreground"
          }`}>
            {title}
          </h3>
          <p className={`text-body mb-6 flex-grow ${
            dark ? "text-gray-300" : "text-muted-foreground"
          }`}>
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs rounded-full ${
                  dark 
                    ? "bg-gray-700 text-gray-200" 
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {links && (
            <div className="flex gap-4">
              {links.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm hover:text-primary transition-colors ${
                    dark ? "text-gray-300" : "text-muted-foreground"
                  }`}
                >
                  <ExternalLink size={16} />
                  View Live
                </a>
              )}
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm hover:text-primary transition-colors ${
                    dark ? "text-gray-300" : "text-muted-foreground"
                  }`}
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
