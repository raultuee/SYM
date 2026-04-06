import { ChevronDown, Github, User } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'

export function AccountMenu() {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 4,
              color: 'rgba(240,238,230,0.6)',
              padding: '0 14px',
              height: 34,
              fontSize: 12,
              letterSpacing: '0.08em',
              fontFamily: "'DM Mono', 'Courier New', monospace",
              cursor: 'pointer',
              transition: 'all 0.15s',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,255,178,0.3)'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#F0EEE6'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(240,238,230,0.6)'
            }}
          >
            {/* Avatar placeholder */}
            <span style={{
              width: 20, height: 20,
              borderRadius: '50%',
              background: 'rgba(0,255,178,0.15)',
              border: '1px solid rgba(0,255,178,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <User size={10} color="#00FFB2" />
            </span>
            Usuário SYM
            <ChevronDown size={11} style={{ opacity: 0.5 }} />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          style={{
            background: '#0e0e1a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 6,
            fontFamily: "'DM Mono', monospace",
            color: '#F0EEE6',
            minWidth: 200,
            padding: '4px',
          }}
        >
          {/* User info */}
          <DropdownMenuLabel style={{ padding: '10px 12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                width: 32, height: 32,
                borderRadius: '50%',
                background: 'rgba(0,255,178,0.1)',
                border: '1px solid rgba(0,255,178,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <User size={13} color="#00FFB2" />
              </span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#F0EEE6', letterSpacing: '0.06em' }}>
                  Usuário SYM
                </div>
                <div style={{ fontSize: 11, color: 'rgba(240,238,230,0.35)', marginTop: 2 }}>
                  m@example.com
                </div>
              </div>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator style={{ background: 'rgba(255,255,255,0.06)', margin: '2px 0' }} />

          <DialogTrigger asChild>
            <Link to="https://github.com/raultuee/SYM" style={{ textDecoration: 'none' }}>
              <DropdownMenuItem
                style={{
                  fontSize: 11, letterSpacing: '0.08em',
                  color: 'rgba(240,238,230,0.55)',
                  cursor: 'pointer', borderRadius: 4,
                  padding: '8px 12px', transition: 'all 0.15s',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
                  ;(e.currentTarget as HTMLElement).style.color = '#F0EEE6'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.color = 'rgba(240,238,230,0.55)'
                }}
              >
                <Github size={13} />
                REPOSITÓRIO
              </DropdownMenuItem>
            </Link>
          </DialogTrigger>

          <DropdownMenuSeparator style={{ background: 'rgba(255,255,255,0.06)', margin: '2px 0' }} />
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  )
}