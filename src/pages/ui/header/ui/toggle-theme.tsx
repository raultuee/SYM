import { Moon, Sun } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/pages/theme/theme-provider'

const btnStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 34,
  height: 34,
  background: 'transparent',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 4,
  color: 'rgba(240,238,230,0.45)',
  cursor: 'pointer',
  transition: 'all 0.15s',
  flexShrink: 0,
  position: 'relative',
  overflow: 'hidden',
}

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          style={btnStyle}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.22)'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#F0EEE6'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'
            ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(240,238,230,0.45)'
          }}
          aria-label="Alternar tema"
        >
          <Sun
            size={14}
            style={{
              position: 'absolute',
              transition: 'all 0.2s',
            }}
            className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size={14}
            style={{
              position: 'absolute',
              transition: 'all 0.2s',
            }}
            className="rotate-90 scale-0 dark:rotate-0 dark:scale-100"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        style={{
          background: '#0e0e1a',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 6,
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: '#F0EEE6',
          minWidth: 120,
          padding: '4px',
        }}
      >
        {[
          { label: 'CLARO', value: 'light' },
          { label: 'ESCURO', value: 'dark' },
          { label: 'SISTEMA', value: 'system' },
        ].map(item => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => setTheme(item.value as 'light' | 'dark' | 'system')}
            style={{
              fontSize: 11,
              letterSpacing: '0.1em',
              color: 'rgba(240,238,230,0.55)',
              cursor: 'pointer',
              borderRadius: 4,
              padding: '7px 12px',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,178,0.07)'
              ;(e.currentTarget as HTMLElement).style.color = '#00FFB2'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLElement).style.color = 'rgba(240,238,230,0.55)'
            }}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}