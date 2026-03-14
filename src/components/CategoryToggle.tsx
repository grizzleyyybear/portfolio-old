import { motion } from "framer-motion";
import { usePortfolio, PortfolioCategory } from "@/contexts/PortfolioContext";
import { Brain, Cpu, Code, Palette } from "lucide-react";

const categories: { id: PortfolioCategory; label: string; icon: typeof Brain }[] = [
  { id: "technical", label: "Technical", icon: Code },
  { id: "ui-ux", label: "UI/UX", icon: Palette },
];

const CategoryToggle = () => {
  const { activeCategory, setActiveCategory } = usePortfolio();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed top-[64px] left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/30"
    >
      <div className="section-container py-3">
        <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} />
                  <span className="hidden sm:inline">{category.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryToggle;
