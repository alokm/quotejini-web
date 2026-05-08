export const metadata = { title: 'Jobber Integration — QuoteJini' }

export default function Jobber() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 80px' }}>
      <a href="/" style={{ color: '#5c31d6', textDecoration: 'none', fontSize: 14 }}>← QuoteJini</a>
      <h1 style={{ fontSize: 34, fontWeight: 800, marginTop: 24, marginBottom: 16 }}>QuoteJini + Jobber</h1>
      <p style={{ fontSize: 18, color: '#3a3a3c', lineHeight: 1.6, marginBottom: 40 }}>
        Connect QuoteJini with your Jobber account to sync clients, jobs, and quotes — all in one place.
      </p>

      <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>What the integration does</h2>
        {[
          { icon: '👥', title: 'Sync Clients', desc: 'Import your Jobber clients into QuoteJini automatically. No double-entry.' },
          { icon: '📋', title: 'Import Jobs', desc: 'Pull job details from Jobber to pre-fill your QuoteJini estimates.' },
          { icon: '📄', title: 'Export Quotes', desc: 'Send completed QuoteJini quotes back to Jobber as quotes or invoices.' },
        ].map(f => (
          <div key={f.title} style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 4px' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#6e6e73', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: '#f0ebff', borderRadius: 16, padding: 32, marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>How to connect</h2>
        <ol style={{ paddingLeft: 20, margin: 0, lineHeight: 2, color: '#3a3a3c' }}>
          <li>Open QuoteJini on your iPhone</li>
          <li>Go to Settings → Integrations → Jobber</li>
          <li>Tap <strong>Connect Jobber</strong> and sign in to your Jobber account</li>
          <li>Approve the connection — you&apos;re done</li>
        </ol>
      </div>

      <div style={{ textAlign: 'center' }}>
        <a
          href="https://apps.apple.com/app/id6767010044"
          style={{
            display: 'inline-block',
            background: '#5c31d6',
            color: '#fff',
            fontWeight: 700,
            fontSize: 16,
            padding: '14px 32px',
            borderRadius: 12,
            textDecoration: 'none',
          }}
        >
          Get QuoteJini on the App Store
        </a>
      </div>
    </main>
  )
}
