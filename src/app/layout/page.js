export const metadata = {
    title: 'Organisasi Motor',
    description: 'Komunitas pengendara motor.',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="id">
        <body>
          <main>{children}</main>
        </body>
      </html>
    );
  }
  