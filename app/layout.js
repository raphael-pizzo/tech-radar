import "./globals.css";
import { cookies } from "next/headers";

export const metadata = {
  title: "Locaweb Tech Radar",
  description: "Locaweb Tech Radar",
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <html lang="en" className={theme?.value}>
      <body className="bg-slate-50 text-slate-700 dark:text-slate-200 dark:bg-slate-950 pb-6 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5x1 max-h-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
