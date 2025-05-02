import { NextResponse } from "next/server"
import { z } from "zod"
import { sendEmailNotification } from "@/lib/send-email-notification"

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  reason: z.string().min(1),
  password: z.string().min(1),
  additionalInfo: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    // Parse and validate the request body
    const body = await request.json()
    const validatedData = formSchema.parse(body)

    // Verify password
    if (validatedData.password !== "Sate@2430$2266376900&") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        { status: 403 },
      )
    }

    // Add timestamp
    const timestamp = new Date().toISOString()
    const data = { ...validatedData, timestamp }

    // Send email notification
    await sendEmailNotification(data)

    // Log the request (in production, you would store this in a database)
    console.log("Portfolio download request:", data)

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Download request processed successfully",
    })
  } catch (error) {
    console.error("Error processing download request:", error)

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process download request",
      },
      { status: 500 },
    )
  }
}
