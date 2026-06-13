import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://www.saadnadeem.com";
const TITLE = "Saad Nadeem — DevOps & Cloud Engineer";
const DESCRIPTION =
  "Saad Nadeem — DevOps & Cloud Engineer building reliable cloud-native systems on Kubernetes and AWS, with CI/CD pipelines, GitOps, and infrastructure as code.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Saad Nadeem", url: SITE_URL }],
  creator: "Saad Nadeem",
  publisher: "Saad Nadeem",
  keywords: [
    "Saad Nadeem",
    "DevOps Engineer",
    "DevSecOps Engineer",
    "Cloud Engineer",
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
    "CI/CD",
    "GitOps",
    "Jenkins",
    "Ansible",
    "Prometheus",
    "Grafana",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: SITE_URL + "/",
    title: TITLE,
    description: "Portfolio of Saad Nadeem — DevOps & Cloud Engineer building reliable cloud-native systems on Kubernetes and AWS.",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1038,
        height: 1753,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Portfolio of Saad Nadeem — DevOps & Cloud Engineer building reliable cloud-native systems on Kubernetes and AWS.",
    images: ["/images/profile.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F111A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Runs before paint to set the theme and avoid a flash of the wrong color scheme.
const themeInitScript = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t !== "light" && t !== "dark") {
      t = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    document.documentElement.dataset.theme = t;
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saad Nadeem",
  url: SITE_URL + "/",
  image: SITE_URL + "/images/profile.jpeg",
  jobTitle: "DevOps & Cloud Engineer",
  email: "mailto:saadnadeem5509@gmail.com",
  description: DESCRIPTION,
  knowsAbout: [
    "DevOps",
    "DevSecOps",
    "Cloud Computing",
    "Kubernetes",
    "Docker",
    "Amazon Web Services",
    "Terraform",
    "CI/CD",
    "GitOps",
    "Infrastructure as Code",
  ],
  sameAs: [
    "https://github.com/Saadnadeem07",
    "https://www.linkedin.com/in/saadnadeem07/",
    "https://medium.com/@saadnadeem07",
    "https://linktr.ee/saadnadeem07",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/profile.webp" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <div className="min-h-screen bg-bg text-heading relative overflow-hidden">
          <ScrollProgress />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
            <div className="absolute top-20 left-20 h-32 w-32 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-40 right-20 h-48 w-48 bg-muted rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 h-24 w-24 bg-accent rounded-full blur-2xl" />
          </div>

          <Navbar />
          {children}
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
