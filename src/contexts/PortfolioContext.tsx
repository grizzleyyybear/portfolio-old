import { createContext, useContext, useState, ReactNode } from "react";

export type PortfolioCategory = "ai-ml" | "electronics" | "technical" | "ui-ux";

interface PortfolioContextType {
  activeCategory: PortfolioCategory;
  setActiveCategory: (category: PortfolioCategory) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider = ({ children }: PortfolioProviderProps) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("technical");

  return (
    <PortfolioContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </PortfolioContext.Provider>
  );
};
