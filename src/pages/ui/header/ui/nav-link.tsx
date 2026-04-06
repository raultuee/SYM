import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  const isCurrent = pathname === props.to

  return (
    <>
      <style>{`
        .sym-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 11px;
          font-family: 'DM Mono', 'Courier New', monospace;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-decoration: none;
          transition: all 0.15s ease;
          border: 1px solid transparent;
          color: rgba(240,238,230,0.4);
        }
        .sym-nav-link:hover {
          color: #F0EEE6;
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.08);
        }
        .sym-nav-link[data-current='true'] {
          color: #00FFB2;
          background: rgba(0,255,178,0.07);
          border-color: rgba(0,255,178,0.18);
        }
      `}</style>
      <Link
        data-current={isCurrent}
        className="sym-nav-link"
        {...props}
      />
    </>
  )
}