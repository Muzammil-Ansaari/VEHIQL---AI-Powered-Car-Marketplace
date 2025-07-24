import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "VEHIQL",
  description: "Find Your Dream Car with VEHIQL",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />

          <main className="h-full">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-200 p-6">
            <div className=" container mx-auto text-gray-600 text-center p-4">
              <p>Made with ❤️ by Coding Spirit</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
