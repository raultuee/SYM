import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import { Login } from "./pages/login";
import { ThemeProvider } from './pages/theme/theme-provider';
import { Dashboard } from './pages/dashboard';

import { Toaster } from 'sonner';
import { Error } from './pages/error';

export function App() {

  return (

    <>

  <ThemeProvider storageKey='nutri-aqui-theme' defaultTheme='light'>
      <Toaster />
    <Router>
      

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        
        <Route path='/login' element={<Login/>}/>

        <Route path='*' element={<Error />} />
      </Routes>


    </Router>
  </ThemeProvider>
    </>
  
)
}

