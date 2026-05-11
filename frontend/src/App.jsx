import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import DashboardOverview from './pages/DashboardOverview';
import MarketPage from './pages/MarketPage';
import CompetitionPage from './pages/CompetitionPage';
import PersonasPage from './pages/PersonasPage';
import MVPPage from './pages/MVPPage';
import BudgetPage from './pages/BudgetPage';
import GTMPage from './pages/GTMPage';
import TimelinePage from './pages/TimelinePage';
import InvestorsPage from './pages/InvestorsPage';

export default function App() {
  const [blueprintData, setBlueprintData] = useState(null);
  const [apiKey, setApiKey] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage setBlueprintData={setBlueprintData} apiKey={apiKey} setApiKey={setApiKey} />} />
        {blueprintData ? (
          <>
            <Route path="/overview" element={<DashboardOverview data={blueprintData} setBlueprintData={setBlueprintData} apiKey={apiKey} />} />
            <Route path="/market" element={<MarketPage data={blueprintData} setBlueprintData={setBlueprintData} apiKey={apiKey} />} />
            <Route path="/competition" element={<CompetitionPage data={blueprintData} setBlueprintData={setBlueprintData} apiKey={apiKey} />} />
            <Route path="/personas" element={<PersonasPage data={blueprintData} setBlueprintData={setBlueprintData} apiKey={apiKey} />} />
            <Route path="/mvp" element={<MVPPage data={blueprintData} setBlueprintData={setBlueprintData} apiKey={apiKey} />} />
            <Route path="/budget" element={<BudgetPage data={blueprintData} setBlueprintData={setBlueprintData} apiKey={apiKey} />} />
            <Route path="/gtm" element={<GTMPage data={blueprintData} setBlueprintData={setBlueprintData} apiKey={apiKey} />} />
            <Route path="/timeline" element={<TimelinePage data={blueprintData} setBlueprintData={setBlueprintData} apiKey={apiKey} />} />
            <Route path="/investors" element={<InvestorsPage data={blueprintData} setBlueprintData={setBlueprintData} apiKey={apiKey} />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
