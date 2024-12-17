export default function Layout({ title, children }) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    );
  }
  