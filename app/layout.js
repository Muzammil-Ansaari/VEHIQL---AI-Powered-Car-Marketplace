import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata = {
  title: "VEHIQL",
  description: "Find Your Dream Car with VEHIQL",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}>

          <Header />

          <main className="h-screen">
            {children}
          </main>
          <footer className="bg-blue-100 p-12">
            <div className=" container mx-auto text-gray-600 text-center p-4">
              <p>Made with ❤️ by Coding Spirit</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
