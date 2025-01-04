import { AnimatePresence } from 'framer-motion';
import './App.css';
import { Router } from './Router';
import './index.css';

function App() {
  return (
    <AnimatePresence>
      <Router />
    </AnimatePresence>
  );
}

export default App;
