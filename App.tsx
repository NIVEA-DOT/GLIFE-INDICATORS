import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Docs } from './pages/Docs';
import { LicenseActivate } from './pages/License';
import { GLBundle } from './pages/GLBundle';
import { AutoTrading } from './pages/AutoTrading';
import { MoneyFlow } from './pages/MoneyFlow';
import { MarketProfile } from './pages/MarketProfile';
import { Support, Affiliate, Success, Terms, Privacy, Refund } from './pages/MiscPages';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Auth & User */}
          <Route path="/login" element={<Auth initialMode="login" />} />
          <Route path="/signup" element={<Auth initialMode="signup" />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Products */}
          <Route path="/product/bundle" element={<GLBundle />} />
          <Route path="/product/auto" element={<AutoTrading />} />
          <Route path="/product/money-flow" element={<MoneyFlow />} />
          <Route path="/product/market-profile" element={<MarketProfile />} />
          
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/license-tool" element={<LicenseActivate />} /> {/* Renamed for clarity */}
          <Route path="/license" element={<LicenseActivate />} /> {/* Legacy redirect support if needed */}
          
          <Route path="/support" element={<Support />} />
          <Route path="/affiliates" element={<Affiliate />} />
          <Route path="/success" element={<Success />} />
          
          {/* Legal */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/risk" element={<Refund />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;