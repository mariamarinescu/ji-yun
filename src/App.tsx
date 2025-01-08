import { AnimatePresence } from 'framer-motion';
import { Spinner } from 'gestalt';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import { Routes } from './Routes';
import './index.css';

function App() {
  return (
    <AnimatePresence>
      <RecoilRoot key="anonymous">
        <Router>
          <Suspense
            fallback={
              <div className="empty-centered">
                <Spinner show />
              </div>
            }
          >
            <Routes />
          </Suspense>
        </Router>
      </RecoilRoot>
    </AnimatePresence>
  );
}

export default App;
