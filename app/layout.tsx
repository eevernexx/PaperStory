import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://paperstory.vercel.app"),
  title: "PaperStory - Research deserves better than PDFs.",
  description:
    "Academic papers transformed into interactive scrollytelling experiences. Six published research papers, reimagined as visual narratives.",
  keywords: [
    "research",
    "academic papers",
    "scrollytelling",
    "data visualization",
    "interactive",
  ],
  authors: [
    { name: "Aryasatya Muhammad Aqsel", url: "https://github.com/eevernexx" },
  ],
  creator: "Aryasatya Muhammad Aqsel",
  openGraph: {
    title: "PaperStory - Research deserves better than PDFs.",
    description:
      "Academic papers transformed into interactive scrollytelling experiences.",
    url: "https://paperstory.vercel.app",
    siteName: "PaperStory",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "PaperStory - Research deserves better than PDFs.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PaperStory - Research deserves better than PDFs.",
    description:
      "Academic papers transformed into interactive scrollytelling experiences.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;1,9..144,700&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
