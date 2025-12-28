export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Welcome to Next.js!</h1>
        <p style={{ fontSize: '20px', marginBottom: '40px' }}>Your app is successfully deployed on Vercel 🎉</p>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>This is a simple Next.js 15 application</p>
      </div>
    </main>
  );
}
