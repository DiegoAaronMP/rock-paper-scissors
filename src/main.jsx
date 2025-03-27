import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RPSApp from './RPSApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RPSApp />
  </StrictMode>,
)
