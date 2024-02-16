// ResearchContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useResources } from './ResourceContext';

interface ResearchContextProps {
  researchedSkills: number[];
  researchTechnology: (skillId: number, cost: number, currency: string) => void;
}

const ResearchContext = createContext<ResearchContextProps | undefined>(undefined);

interface ResearchProviderProps {
  children: ReactNode;
}

export const ResearchProvider: React.FC<ResearchProviderProps> = ({ children }) => {
  const [researchedSkills, setResearchedSkills] = React.useState<number[]>([]);
  const { money, metal, updateMoney, updateMetal } = useResources();

  const researchTechnology = (skillId: number, cost: number, currency: string) => {
    // Deduct the specified currency based on the given cost
    if (currency === 'money') {
      if (cost > money) {
        return;
      }
      updateMoney(-cost);
    } else if (currency === 'metal') {
      if (cost > metal) {
        return;
      }
      updateMetal(-cost);
    }

    // Add the researched skill
    setResearchedSkills((prevSkills) => [...prevSkills, skillId]);
  };

  return (
    <ResearchContext.Provider
      value={{
        researchedSkills,
        researchTechnology,
      }}
    >
      {children}
    </ResearchContext.Provider>
  );
};

export const useResearch = (): ResearchContextProps => {
  const context = useContext(ResearchContext);
  if (!context) {
    throw new Error('useResearch must be used within a ResearchProvider');
  }
  return context;
};
