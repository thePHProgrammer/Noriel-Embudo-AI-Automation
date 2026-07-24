import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import { siteConfig } from "@/content/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const title = `${siteConfig.name} | AI Automation & Agentic Systems Engineer`;
const description =
  "Freelance AI automation engineer building n8n, GoHighLevel, Zapier, and agentic AI (LangGraph, MCP, AWS Bedrock) systems — plus the FastAPI, Retool, and Lovable dashboards to run them. Available for part-time freelance and retainer work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "AI automation engineer",
    "n8n developer",
    "GoHighLevel automation",
    "Zapier automation",
    "LangGraph agent developer",
    "Model Context Protocol",
    "AWS Bedrock agentic AI",
    "FastAPI developer",
    "Retool developer",
    "Lovable developer",
    "workflow automation freelancer",
    "AI agent freelancer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title,
    description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description,
  url: siteConfig.siteUrl,
  areaServed: "Worldwide (Remote)",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quezon City",
    addressCountry: "PH",
  },
  sameAs: [siteConfig.github, siteConfig.linkedin],
  founder: {
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "n8n",
      "GoHighLevel",
      "Zapier",
      "Monday.com",
      "LangGraph",
      "Model Context Protocol",
      "AWS Bedrock",
      "Retool",
      "Lovable",
      "FastAPI",
      "PostgreSQL",
      "DynamoDB",
      "MongoDB",
      "Airtable",
      "AWS Lambda",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
