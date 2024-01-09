import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Homepage from './pages/Homepage.tsx';
import AuthProvider from 'react-auth-kit';
import { store } from './auth/store.tsx';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider store={store}>
    <QueryClientProvider client = {queryClient}>
      <Router>
            <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/homepage' element={<Homepage/>}/>
            </Routes>
      </Router>
   </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>
)
