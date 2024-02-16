// UpgradeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useResources } from './ResourceContext';

interface UpgradeContextProps {
  upgrades: { [key: string]: number }; // A map to store the level of each upgrade
  purchaseUpgrade: (upgradeId: string, cost: number, currency: string) => void;
}

const UpgradeContext = createContext<UpgradeContextProps | undefined>(undefined);

interface UpgradeProviderProps {
  children: ReactNode;
}

export const UpgradeProvider: React.FC<UpgradeProviderProps> = ({ children }) => {
  const [upgrades, setUpgrades] = useState<{ [key: string]: number }>({});
  const { money, metal, updateMoney, updateMetal } = useResources();

  const purchaseUpgrade = (upgradeId: string, cost: number, currency: string) => {
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

    // Increment the level of the purchased upgrade
    setUpgrades((prevUpgrades) => ({
      ...prevUpgrades,
      [upgradeId]: (prevUpgrades[upgradeId] || 0) + 1,
    }));
  };

  return (
    <UpgradeContext.Provider
      value={{
        upgrades,
        purchaseUpgrade,
      }}
    >
      {children}
    </UpgradeContext.Provider>
  );
};

export const useUpgrade = (): UpgradeContextProps => {
  const context = useContext(UpgradeContext);
  if (!context) {
    throw new Error('useUpgrade must be used within an UpgradeProvider');
  }
  return context;
};
