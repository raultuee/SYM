import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import { Login } from "./pages/login";
import { ThemeProvider } from './pages/theme/theme-provider';
import { Dashboard } from './pages/dashboard';

import { Toaster } from 'sonner';
import { Error } from './pages/error';
import { Alimentos } from './pages/alimentos';
import { Nutricionistas } from './pages/nutricionistas';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from './pages/ui/sidebar/app-sidebar';
import { Consultorios } from './pages/consultorios';
import { Pacientes } from './pages/pacientes';
import { Objetivos } from './pages/objetivos';
import { Propriedades } from './pages/propriedades';

export function App() {

  return (

    <>

  <ThemeProvider storageKey='nutri-aqui-theme' defaultTheme='light'>
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

        <Route path='/alimentos' element={<Alimentos />} />

        <Route path='/nutricionistas' element={<Nutricionistas />} />

        <Route path='/consultorios' element={<Consultorios />} />

        <Route path='/pacientes' element={<Pacientes />} />

        <Route path='/objetivos' element={<Objetivos />} />

        <Route path='/propriedades' element={<Propriedades />} />

      </Routes>

      </SidebarInset>
    </SidebarProvider>

    </Router>
  </ThemeProvider>
    </>
  
)
}

