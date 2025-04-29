import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import { Login } from "./pages/login";
import { ThemeProvider } from './pages/theme/theme-provider';
import { Dashboard } from './pages/dashboard';

import { Toaster } from 'sonner';
import { Error } from './pages/error';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from './pages/ui/sidebar/app-sidebar';

export function App() {

  return (

    <>

  <ThemeProvider storageKey='save-your-money' defaultTheme='dark'>
      <Toaster />
    <Router>
      
    <SidebarProvider>
      <AppSidebar />

    <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-slate-100 dark:bg-black">
              <div className='flex items-center gap-2 px-4'>
                <SidebarTrigger className="-ml-1"/>
              </div>
          </header>

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        
        <Route path='/login' element={<Login/>}/>

        <Route path='*' element={<Error />} />

      </Routes>

      </SidebarInset>
    </SidebarProvider>

    </Router>
  </ThemeProvider>
    </>
  
)
}

