import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Here you would typically send the data to an email service
    // like EmailJS, SendGrid, or your own SMTP server

    // For demonstration purposes, we're just logging the data
    console.log("Contact form submission:", data)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Message received! I will get back to you soon.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to send message. Please try again." }, { status: 500 })
  }
}
