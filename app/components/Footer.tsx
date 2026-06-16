import { KeystoneMark } from './KeystoneMark'

export function Footer() {
  const year = new Date().getFullYear()
  const C = { surface: '#111111', gold: '#C8A56A', cream: '#F4F1EA', border: '#1E1E1E' }

  return (
    <footer style={{ backgroundColor: C.surface, borderTop: `1px solid ${C.border}` }}>
      <div style={{
        maxWidth: '80rem', margin: '0 auto', padding: '2rem 2.5rem',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between', gap: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <KeystoneMark size={18} style={{ color: 'rgba(200,165,106,0.55)' }} />
          <span style={{ color: C.cream, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 300 }}>
            Dee <span style={{ color: 'rgba(200,165,106,0.6)' }}>&</span> Co
          </span>
        </div>
        <p style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(138,138,138,0.35)', fontWeight: 300 }}>
          Connecting Capital with Opportunity
        </p>
        <p style={{ fontSize: '9px', color: 'rgba(138,138,138,0.25)', fontWeight: 300 }}>
          © {year} Dee & Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
