import { redirect } from "next/navigation"

export default function PhishingAwarenessPage() {
  // This page will never be rendered because of the rewrite rule
  // But we'll add a redirect as a fallback just in case
  redirect("https://v0-phishing-awareness-page.vercel.app")

  return null
}
