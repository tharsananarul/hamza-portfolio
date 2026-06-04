import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModernBackground } from "@/components/ModernBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { getAssetPath } from "@/utils/imageLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://tharsananarul.github.io/hamza-portfolio"),
  title: "Hamza Cisse",
  description: "Portfolio professionnel de Hamza Cisse, futur étudiant en Licence Pro Communication. En recherche d'alternance pour septembre 2026.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Hamza Cisse",
    description: "Montage vidéo, création de contenu et communication.",
    images: [
      {
        url: "/images/photos-presentation/hamza-photo.png",
        width: 800,
        height: 1067,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased selection:bg-accent/30 relative overflow-x-hidden w-full">
        <CustomCursor />
        <ModernBackground />
        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}





