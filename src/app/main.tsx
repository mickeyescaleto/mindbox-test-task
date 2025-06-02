import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { View } from '@/widgets/view';

createRoot(document.getElementById('application')!).render(
  <StrictMode>
    <View />
  </StrictMode>,
);
