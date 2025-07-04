import { Home, ArrowLeftRight, Archive } from 'lucide-react'

import { AccountMenu } from './ui/account-menu'
import { NavLink } from './ui/nav-link'
import { ThemeToggle } from './ui/toggle-theme'
import { Separator } from '@/components/ui/separator'
import { Notification } from './ui/notification'

export function Header() {
  return (
    <div className="">
      <div className="flex h-16 items-center gap-6 px-6">
        
        <p className='font-bold text-emerald-700 tracking-tight'>SYM</p>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/dashboard">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/register">
            <ArrowLeftRight className="h-4 w-4" />
            Transações
          </NavLink>
          <NavLink to="/caixinha">
            <Archive className="h-4 w-4" />
            Caixinha
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Notification />
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}