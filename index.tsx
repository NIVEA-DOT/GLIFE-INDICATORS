import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Explicitly declare state and props properties to fix type errors
  public state: ErrorBoundaryState;
  public props: ErrorBoundaryProps;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.props = props;
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
          <div className="max-w-xl bg-zinc-900 border border-red-900/50 p-6 rounded-lg">
            <h1 className="text-xl font-bold text-red-500 mb-4">System Error</h1>
            <p className="text-zinc-400 mb-4">The application failed to render. This is likely a dependency issue.</p>
            <pre className="bg-black p-4 rounded text-xs font-mono text-red-200 overflow-auto border border-zinc-800">
              {this.state.error?.toString()}
            </pre>
            <button 
                onClick={() => window.location.reload()}
                className="mt-6 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-sm transition-colors"
            >
                Reload Application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
  </React.StrictMode>
);