export const metadata = { title: 'Privacy Policy — QuoteJini' }

export default function Privacy() {
  const updated = 'May 8, 2026'
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 80px' }}>
      <a href="/" style={{ color: '#5c31d6', textDecoration: 'none', fontSize: 14 }}>← QuoteJini</a>
      <h1 style={{ fontSize: 34, fontWeight: 800, marginTop: 24, marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ color: '#6e6e73', marginBottom: 40 }}>Last updated: {updated}</p>

      {[
        { title: '1. Information We Collect', body: `We collect information you provide directly, including your name, email address, company name, and business information when you create an account. We also collect usage data such as quotes created, features used, and app performance metrics to improve the service.` },
        { title: '2. How We Use Your Information', body: `We use your information to provide and improve QuoteJini, send transactional emails (quote delivery, account notifications), and respond to support requests. We do not sell your personal information to third parties.` },
        { title: '3. Data Storage', body: `Your data is stored securely using Supabase (PostgreSQL) hosted on AWS infrastructure. Quote PDFs are stored in encrypted cloud storage. We retain your data for as long as your account is active or as needed to provide services.` },
        { title: '4. Third-Party Services', body: `QuoteJini integrates with third-party services including Jobber (job management), Stripe (payments), and Resend (email delivery). Each service has its own privacy policy and handles data according to their terms.` },
        { title: '5. Data Security', body: `We implement industry-standard security measures including encryption in transit (TLS) and at rest, row-level security on all database tables, and secure authentication via Supabase Auth.` },
        { title: '6. Your Rights', body: `You may request access to, correction of, or deletion of your personal data at any time by contacting us at privacy@quotejini.com. We will respond within 30 days.` },
        { title: '7. Children\'s Privacy', body: `QuoteJini is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from children.` },
        { title: '8. Changes to This Policy', body: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification.` },
        { title: '9. Contact Us', body: `If you have questions about this Privacy Policy, please contact us at privacy@quotejini.com.` },
      ].map(s => (
        <div key={s.title} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{s.title}</h2>
          <p style={{ lineHeight: 1.7, color: '#3a3a3c', margin: 0 }}>{s.body}</p>
        </div>
      ))}
    </main>
  )
}
