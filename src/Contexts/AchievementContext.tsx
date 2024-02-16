import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AchievementsContextProps {
  achievements: string[];
  unlockAchievement: (achievement: string) => void;
}

const AchievementsContext = createContext<AchievementsContextProps | undefined>(undefined);

interface AchievementsProviderProps {
  children: ReactNode;
}

export const AchievementsProvider: React.FC<AchievementsProviderProps> = ({ children }) => {
  const [achievements, setAchievements] = useState<string[]>([]);

  const unlockAchievement = (achievement: string) => {
    setAchievements((prevAchievements) => [...prevAchievements, achievement]);
  };

  return (
    <AchievementsContext.Provider value={{ achievements, unlockAchievement }}>
      {children}
    </AchievementsContext.Provider>
  );
};

export const useAchievements = (): AchievementsContextProps => {
  const context = useContext(AchievementsContext);
  if (!context) {
    throw new Error('useAchievements must be used within an AchievementsProvider');
  }
  return context;
};
