import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Variasi Komponen UI",
  description: "Berbagai contoh komponen UI dengan variasi tampilan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
