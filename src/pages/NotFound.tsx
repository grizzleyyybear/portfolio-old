import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <h1 className="font-serif text-8xl text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} />
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
