import { Home, ArrowLeftRight, Paperclip } from 'lucide-react'
import { AccountMenu } from './ui/account-menu'
import { NavLink } from './ui/nav-link'
import { ThemeToggle } from './ui/toggle-theme'
import { Notification } from './ui/notification'
import { toast } from 'sonner'

export function Header() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;700&display=swap');
      `}</style>
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        background: 'rgba(8,8,16,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        fontFamily: "'DM Mono', 'Courier New', monospace",
      }}>

        {/* Logo */}
        <span style={{
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: '#00FFB2',
          flexShrink: 0,
        }}>
          SYM
        </span>

        {/* Divider */}
        <div style={{
          width: 1, height: 20,
          background: 'rgba(255,255,255,0.1)',
          margin: '0 20px',
          flexShrink: 0,
        }} />

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1 }}>
          <NavLink to="/dashboard">
            <Home size={13} />
            Início
          </NavLink>
          <NavLink to="/register">
            <ArrowLeftRight size={13} />
            Transações
          </NavLink>
          <NavLink onClick={() => toast.info("Em breve!")} to={''}>
            <Paperclip size={13} />
            Guia
          </NavLink>
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Notification />
          <ThemeToggle />
          <AccountMenu />
        </div>
      </header>
    </>
  )
}