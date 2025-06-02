import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('application')!).render(
  <StrictMode>
    <h1>Todoify</h1>
  </StrictMode>,
);
