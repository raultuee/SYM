import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import { Login } from "./pages/login";
import { UserInfo } from './pages/user-info';
import { Contracts } from "./pages/contract";
import { ContractInfo } from "./pages/contract-info";
import { ThemeProvider } from './pages/theme/theme-provider';
import { Dashboard } from './pages/dashboard';

import { Toaster } from 'sonner';
import { Users } from './pages/users';
import { Robots } from './pages/robots';
import { NewContract } from './pages/new-contract';
import { Error } from './pages/error';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from './pages/ui/sidebar/app-sidebar';
import { NewUser } from './pages/new-user';

export function App() {

  return (

    <>

  <ThemeProvider storageKey='rpa-build-theme' defaultTheme='light'>
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
        <Route path='/contracts' element={<Contracts/>}/>
        <Route path='/contracts/info' element={<ContractInfo/>}/>
        <Route path='/contracts/new' element={<NewContract/>}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:userId' element={<UserInfo/>}/>
        <Route path='/users/new' element={<NewUser/>}/>
        <Route path='/robots' element={<Robots/>}/>

        <Route element={<Error />} />
      </Routes>

    </SidebarInset>

    </SidebarProvider>

    </Router>
  </ThemeProvider>
    </>
  
)
}

