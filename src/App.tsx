import { AnimatePresence } from 'framer-motion';
import { RecoilRoot } from 'recoil';
import './App.css';
import { Router } from './Router';
import './index.css';

function App() {
  return (
    <AnimatePresence>
      <RecoilRoot key="anonymous">
        <Router />
      </RecoilRoot>
    </AnimatePresence>
  );
}

export default App;
