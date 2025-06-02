import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TodosProvider } from '@/app/providers/todos-provider';
import { View } from '@/widgets/view';

createRoot(document.getElementById('application')!).render(
  <StrictMode>
    <TodosProvider>
      <View />
    </TodosProvider>
  </StrictMode>,
);
