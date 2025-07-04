import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import { ThemeProvider } from './pages/theme/theme-provider';

import { Toaster } from 'sonner';
import { Error } from './pages/error';
import { Dashboard } from './pages/ui/dashboard/dashboard';
import { Register } from './pages/ui/register/register';
import { Caixinha } from './pages/ui/caixinha/caixinha';
import { Header } from './pages/ui/header/header';
import WelcomePage from './pages/welcome';

export function App() {

  return (

    <>

  <ThemeProvider storageKey='sym' defaultTheme='dark'>
    <Toaster position='top-center' className='bg-[#171717]' />
      <Router>
        <Header />
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>

            <Route path='/register' element={<Register/>}/>

            <Route path='/caixinha' element={<Caixinha/>}/>


            <Route path='/' element={<WelcomePage/>}/>

            <Route path='*' element={<Error />} />

          </Routes>

      </Router>
  </ThemeProvider>
    </>
  
)
}

