import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import { Login } from "./pages/login";
import { ThemeProvider } from './pages/theme/theme-provider';

import { Toaster } from 'sonner';
import { Error } from './pages/error';
import { Dashboard } from './pages/ui/dashboard/dashboard';
import { Register } from './pages/ui/register/register';
import { Header } from './pages/ui/header/header';

export function App() {

  return (

    <>

  <ThemeProvider storageKey='sym' defaultTheme='dark'>
    <Toaster />
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Dashboard/>}/>

            <Route path='/register' element={<Register/>}/>
            
            <Route path='/login' element={<Login/>}/>

            <Route path='*' element={<Error />} />

          </Routes>

      </Router>
  </ThemeProvider>
    </>
  
)
}

