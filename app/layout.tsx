import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Progress Anomaly Detector – Detect Struggling Students Before They Fail",
  description: "Analyzes LMS data to identify students showing early signs of academic struggle and suggests interventions for online course creators and educational institutions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1bf25baa-3acd-4052-bdee-b7b3e555e078"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
