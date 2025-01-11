import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import { Routes } from './Routes';
import { Loader } from './components';
import './index.css';

function App() {
  return (
    <AnimatePresence>
      <RecoilRoot key="anonymous">
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </Router>
      </RecoilRoot>
    </AnimatePresence>
  );
}

export default App;
