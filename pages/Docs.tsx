import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Shared';

const DocContent: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="prose prose-invert max-w-none">
    <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">{title}</h1>
    <div className="text-slate-300 space-y-6">
      {children}
    </div>
  </div>
);

const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto border border-slate-800 text-sm font-mono text-emerald-400">
    {code}
  </pre>
);

export const Docs: React.FC = () => {
  const [activeSection, setActiveSection] = useState('quick-start');

  const menu = [
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'installation', label: 'Installation' },
    { id: 'activation', label: 'License Activation' },
    { id: 'settings', label: 'Settings & Parameters' },
    { id: 'troubleshooting', label: 'Troubleshooting' },
    { id: 'faq', label: 'FAQ' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'installation':
        return (
          <DocContent title="Installation Guide">
            <p>Follow these steps to install the indicator on NinjaTrader 8.</p>
            <ol className="list-decimal pl-5 space-y-4">
              <li>Download the <strong>.zip</strong> file from your purchase email.</li>
              <li>Open NinjaTrader 8.</li>
              <li>Go to <strong>Tools &gt; Import &gt; NinjaScript Add-On...</strong></li>
              <li>Select the downloaded zip file.</li>
              <li>Restart NinjaTrader when prompted.</li>
            </ol>
            <div className="bg-blue-900/20 border border-blue-900/50 p-4 rounded-lg mt-4">
                <p className="text-blue-200 text-sm">Note: Do not unzip the file before importing. NinjaTrader requires the original .zip format.</p>
            </div>
          </DocContent>
        );
      case 'activation':
        return (
          <DocContent title="License Activation">
            <p>After purchasing, you must activate your machine.</p>
            <ol className="list-decimal pl-5 space-y-4">
                <li>Go to the <Link to="/license-activate" className="text-brand-500 underline">Activation Page</Link> on this website.</li>
                <li>Enter the License Key sent to your email.</li>
                <li>Your Machine ID is automatically detected.</li>
                <li>Click <strong>Activate</strong>.</li>
            </ol>
            <p>Once activated, restart your charts. The indicator checks the server once upon startup.</p>
          </DocContent>
        );
      case 'settings':
         return (
            <DocContent title="Settings & Parameters">
                <h3 className="text-xl font-bold text-white mt-6">General Settings</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Calc Mode:</strong> Choose between 'Tick' (more accurate) or 'Minute' (faster).</li>
                    <li><strong>Lookback Days:</strong> How many days of history to load. Recommendation: 3-5 days.</li>
                </ul>
                <h3 className="text-xl font-bold text-white mt-6">Visuals</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Absorption Color:</strong> Color for potential reversals.</li>
                    <li><strong>Aggressive Color:</strong> Color for breakout momentum.</li>
                </ul>
            </DocContent>
         );
      case 'troubleshooting':
        return (
          <DocContent title="Troubleshooting">
            <h3 className="text-lg font-bold text-white">License Invalid Error</h3>
            <p>If you see "License Invalid" on your chart:</p>
            <ul className="list-disc pl-5">
                <li>Ensure you have activated your key on the <Link to="/license-activate" className="text-brand-500">website</Link>.</li>
                <li>Check your internet connection.</li>
                <li>Ensure your firewall is not blocking NinjaTrader.</li>
            </ul>
          </DocContent>
        );
      case 'faq':
        return (
            <DocContent title="Frequently Asked Questions">
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-white">Does this work on NinjaTrader 7?</h4>
                        <p>No, this product is exclusively built for NinjaTrader 8.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Can I move my license to a new PC?</h4>
                        <p>Yes. Contact support to reset your Machine ID binding.</p>
                    </div>
                </div>
            </DocContent>
        );
      default:
        return (
          <DocContent title="Quick Start">
            <p>Welcome to Orderflow Devil Pro. This tool is designed to help you visualize institutional market participation.</p>
            <p>To get started immediately:</p>
            <ol className="list-decimal pl-5 space-y-2">
                <li>Install the addon (see Installation).</li>
                <li>Open a chart (Tick charts recommended, e.g., 2000 Tick).</li>
                <li>Right click chart &gt; Indicators &gt; Select <strong>OrderflowDevilPro</strong>.</li>
                <li>Click OK.</li>
            </ol>
          </DocContent>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-1 sticky top-24">
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-brand-900/50 text-brand-500 border border-brand-500/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-grow bg-slate-900/30 rounded-xl p-8 border border-slate-800 min-h-[600px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};