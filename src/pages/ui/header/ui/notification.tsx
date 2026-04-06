import { Bell } from "lucide-react"

export function Notification() {
  return (
    <button
      style={{
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
        position: 'relative',
        transition: 'all 0.15s',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.22)'
        ;(e.currentTarget as HTMLButtonElement).style.color = '#F0EEE6'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'
        ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(240,238,230,0.45)'
      }}
      aria-label="Notificações"
    >
      <Bell size={14} />
      {/* Dot indicator */}
      <span style={{
        position: 'absolute',
        top: 7, right: 7,
        width: 5, height: 5,
        borderRadius: '50%',
        background: '#00FFB2',
        boxShadow: '0 0 6px rgba(0,255,178,0.7)',
      }} />
    </button>
  )
}