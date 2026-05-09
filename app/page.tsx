export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #5c31d6 0%, #7c3aed 100%)', color: '#fff', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: -1, marginBottom: 16 }}>QuoteJini</div>
          <p style={{ fontSize: 22, fontWeight: 400, opacity: 0.9, marginBottom: 48, lineHeight: 1.5 }}>
            AI-powered estimating for contractors.<br />Create professional quotes in seconds.
          </p>
          {/* Coming Soon banner */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.15)',
            border: '2px solid rgba(255,255,255,0.5)',
            borderRadius: 16,
            padding: '20px 48px',
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', opacity: 0.8, marginBottom: 6 }}>Coming Soon</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>Available on the App Store</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 800, margin: '64px auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 40 }}>Built for the trades</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {[
            { icon: '⚡', title: 'AI-Generated Estimates', desc: 'Describe the job by voice or text — QuoteJini builds the line items automatically.' },
            { icon: '📄', title: 'Professional PDF Quotes', desc: 'Send polished quotes with your logo, pricing, and payment terms in one tap.' },
            { icon: '👥', title: 'Client Management', desc: 'Keep all your contacts, addresses, and job history in one place.' },
            { icon: '🔗', title: 'Jobber Integration', desc: 'Sync jobs and clients with your Jobber account seamlessly.' },
          ].map(f => (
            <div key={f.title} style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#6e6e73', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: 'auto', borderTop: '1px solid #e5e5ea', padding: '24px', textAlign: 'center', fontSize: 13, color: '#6e6e73' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          <a href="/privacy" style={{ color: '#5c31d6', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#5c31d6', textDecoration: 'none' }}>Terms of Service</a>
          <a href="/jobber" style={{ color: '#5c31d6', textDecoration: 'none' }}>Jobber Integration</a>
          <span>© {new Date().getFullYear()} QuoteJini. All rights reserved.</span>
        </div>
      </footer>
    </main>
  )
}
