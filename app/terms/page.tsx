export const metadata = { title: 'Terms of Service — QuoteJini' }

export default function Terms() {
  const updated = 'May 8, 2026'
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 80px' }}>
      <a href="/" style={{ color: '#5c31d6', textDecoration: 'none', fontSize: 14 }}>← QuoteJini</a>
      <h1 style={{ fontSize: 34, fontWeight: 800, marginTop: 24, marginBottom: 8 }}>Terms of Service</h1>
      <p style={{ color: '#6e6e73', marginBottom: 40 }}>Last updated: {updated}</p>

      {[
        { title: '1. Acceptance of Terms', body: `By downloading or using QuoteJini, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the service.` },
        { title: '2. Description of Service', body: `QuoteJini is an AI-powered estimating and quoting application for contractors and tradespeople. The service allows you to create, manage, and send professional quotes to clients.` },
        { title: '3. Account Registration', body: `You must create an account to use QuoteJini. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.` },
        { title: '4. Acceptable Use', body: `You agree to use QuoteJini only for lawful business purposes. You may not use the service to transmit spam, infringe on intellectual property rights, or engage in any fraudulent activity.` },
        { title: '5. AI-Generated Content', body: `QuoteJini uses artificial intelligence to generate estimate content. You are solely responsible for reviewing, verifying, and approving all AI-generated content before sending quotes to clients. QuoteJini does not guarantee the accuracy of AI-generated estimates.` },
        { title: '6. Payment and Billing', body: `Certain features of QuoteJini require a paid subscription. Subscription fees are billed in advance on a recurring basis. You may cancel your subscription at any time, effective at the end of the current billing period.` },
        { title: '7. Intellectual Property', body: `QuoteJini and its original content, features, and functionality are owned by QuoteJini and are protected by international copyright, trademark, and other intellectual property laws.` },
        { title: '8. Limitation of Liability', body: `QuoteJini shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our total liability shall not exceed the amount you paid us in the twelve months preceding the claim.` },
        { title: '9. Termination', body: `We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.` },
        { title: '10. Governing Law', body: `These Terms shall be governed by the laws of the State of California, without regard to its conflict of law provisions.` },
        { title: '11. Changes to Terms', body: `We reserve the right to modify these terms at any time. We will provide notice of significant changes via email or in-app notification. Continued use of the service after changes constitutes acceptance of the new terms.` },
        { title: '12. Contact', body: `For questions about these Terms, contact us at legal@quotejini.com.` },
      ].map(s => (
        <div key={s.title} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{s.title}</h2>
          <p style={{ lineHeight: 1.7, color: '#3a3a3c', margin: 0 }}>{s.body}</p>
        </div>
      ))}
    </main>
  )
}
