import { Moon, Sun } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34,
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 4,
            color: 'rgba(240,238,230,0.45)',
            cursor: 'pointer',
            transition: 'all 0.15s',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.22)'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#F0EEE6'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'
            ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(240,238,230,0.45)'
          }}
        >
          <Sun size={14} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" style={{ position: 'absolute' }} />
          <Moon size={14} className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" style={{ position: 'absolute' }} />
          <span className="sr-only">Alternar tema</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" style={{
        background: '#0e0e1a',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 6,
        fontFamily: "'DM Mono', monospace",
        fontSize: 12, color: '#F0EEE6',
        minWidth: 120, padding: '4px',
      }}>
        {[
          { label: 'CLARO', value: 'light' },
          { label: 'ESCURO', value: 'dark' },
          { label: 'SISTEMA', value: 'system' },
        ].map(item => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => setTheme(item.value as 'light' | 'dark' | 'system')}
            style={{
              fontSize: 11, letterSpacing: '0.1em',
              color: 'rgba(240,238,230,0.55)',
              cursor: 'pointer', borderRadius: 4,
              padding: '7px 12px', transition: 'all 0.15s',
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