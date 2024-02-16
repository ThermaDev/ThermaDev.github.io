import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AchievementsProvider } from './Contexts/AchievementContext';
import { ResearchProvider } from './Contexts/ResearchContext';
import { ResourceProvider } from './Contexts/ResourceContext';
import { UpgradeProvider } from './Contexts/UpgradeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ResourceProvider>
      <AchievementsProvider>
        <ResearchProvider>
          <UpgradeProvider>
            <App />
          </UpgradeProvider>
        </ResearchProvider>
      </AchievementsProvider>
    </ResourceProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
