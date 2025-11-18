import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// -----------------
//   FULL SEO METADATA
// -----------------
export const metadata = {
  title: "Rishabh Labs – Full-Stack & Web3 Developer",
  description:
    "Portfolio of Rishabh Rathore – Full-Stack, Web3, and Mobile App Developer. I build modern websites, apps, dashboards, APIs, and smart contract systems.",
  keywords: [
    "Rishabh Rathore",
    "Rishabh Labs",
    "Full Stack Developer",
    "Web3 Developer",
    "Next.js Developer",
    "MERN Developer",
    "Solidity Developer",
    "Freelancer Developer",
    "Portfolio",
  ],

  metadataBase: new URL("https://devrishabh.com"),

  icons: {
    icon: "/Logo1.png",
    shortcut: "/Logo1.png",
    apple: "/Logo1.png",
  },

  openGraph: {
    title: "Rishabh Labs – Full-Stack & Web3 Developer",
    description:
      "Modern, fast and clean digital products — Web Apps, Mobile Apps, APIs & Smart Contracts.",
    url: "https://devrishabh.com",
    siteName: "Rishabh Labs",
    images: [
      {
        url: "/og-preview2.png",
        width: 1200,
        height: 630,
        alt: "Rishabh Labs Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rishabh Labs – Full-Stack & Web3 Developer",
    description:
      "Modern web apps, mobile apps, smart contracts & backend systems.",
    images: ["/og-preview2.png"],
  },
};

// -----------------
//   MAIN LAYOUT
// -----------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Mobile-friendly scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devrishabh.com" />

        {/* Favicon fallback */}
        <link rel="icon" href="/Logo1.png" sizes="any" />
        <link rel="apple-touch-icon" href="/Logo1.png" />

        {/* Theme color for browsers */}
        <meta name="theme-color" content="#0f0f11" />

        {/* Language hint for Google */}
        <link rel="alternate" hrefLang="en" href="https://devrishabh.com" />
        {/* Google tag (gtag.js)  */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17742009470"
        />

        <Script id="google-ads-tag">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17742009470');
  `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ------ Google Structured Data (JSON-LD) ------ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rishabh Rathore",
              url: "https://devrishabh.com",
              jobTitle: "Full-Stack & Web3 Developer",
              worksFor: {
                "@type": "Organization",
                name: "Rishabh Labs",
              },
              sameAs: [
                "https://github.com/rishabhrthr001",
                "https://www.linkedin.com/in/rishabh-rathore-115478228",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
