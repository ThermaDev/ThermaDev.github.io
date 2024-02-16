// ResourceContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResourceContextProps {
  money: number;
  metal: number;
  // Add other resources as needed (negative to remove)
  updateMoney: (diff: number) => void;
  updateMetal: (diff: number) => void;
  // Add other functions as needed
}

const ResourceContext = createContext<ResourceContextProps | undefined>(undefined);

interface ResourceProviderProps {
  children: ReactNode;
}

export const ResourceProvider: React.FC<ResourceProviderProps> = ({ children }) => {
  const [money, setMoney] = useState(100);
  const [metal, setMetal] = useState(100);
  // Add other resource state variables as needed

  const updateMoney = (diff: number) => {
    setMoney(money + diff);
  };

  const updateMetal = (diff: number) => {
    setMetal(metal + diff);
  };


  // Add other resource update functions as needed

  return (
    <ResourceContext.Provider value={{ money, metal, updateMoney, updateMetal }}>
      {children}
    </ResourceContext.Provider>
  );
};

export const useResources = (): ResourceContextProps => {
  const context = useContext(ResourceContext);
  if (!context) {
    throw new Error('useResources must be used within a ResourceProvider');
  }
  return context;
};
