import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './auth/store.tsx';
import AuthProvider from 'react-auth-kit';
import { Paths } from './paths.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <QueryClientProvider client = {queryClient}>
        <Paths/>
    </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>
)
