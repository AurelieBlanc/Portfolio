
// Code pour les IMPORTS : ----------------------------------------------------------------------------------------------------------------------------------//

import type { Metadata } from "next"; // metada pour les métadonnées 
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // import du fichier CSS 
import Banner from "./components/Banner"; // import composant Banner
import MessagesBar from "./components/MessagesBar";  // import de la MessagesBar
import Footer from "./components/Footer"; // import du footer
import Script from "next/script";
//--------------------------------------------------------------------------------------------------------------------------------------------------------------//
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });







// CODE pour les métadonnées : -------------------------------------------------------------------------------------------------------------------------------//

export const metadata: Metadata = {
  title : "Portfolio de Miss White - Développeur web full-stack Next.js", 
  description: "Développeuse web full-stack, spécialisée en Next.js, React.js et TypeScript. Passionnée par le front-end et la création d'expériences web interactives. Basée entre Annecy (France) et Genève (Suisse), je suis disponible pour une collaboration en télétravail partout en France et en Suisse. Découvrez mes projets et contactez-moi pour collaborer !", 
  openGraph: {
    title: "Portfolio de Miss White - Développeur web full-stack Next.js",
    description: "Développeuse web full-stack, spécialisée en Next.js, React.js et TypeScript. Passionnée par le front-end et la création d'expériences web interactives. Basée entre Annecy (France) et Genève (Suisse), je suis disponible pour une collaboration en télétravail partout en France et en Suisse. Découvrez mes projets et contactez-moi pour collaborer !",
    url: "http://localhost:3000/", 
    siteName: "Portfolio de Miss White",  
    locale: "fr_FR", 
    images: [
      {
        url: "http://localhost:3000/images/logos/png/beWildFondNoir.png", 
        width: 1200, 
        height: 600, 
        alt: "aperçu du logo Be Wild sur fond noir, c'est une tête de lion entourée d'un triangle avec écrit 'Be Wild & Create'"
      }
    ], 
    type: "website", 
  }, 
  
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------//






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Portfolio de Miss White - Développeur web full-stack Next.js", 
              "url": "http://localhost:3000/",
            }),
          }}
        />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Lilita+One&display=swap" rel="stylesheet"/>
      </head>
      <body
        className="tracking-wider"
        // {`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Banner />
        <MessagesBar />
       
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
