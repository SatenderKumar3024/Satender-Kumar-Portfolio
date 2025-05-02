import emailjs from "@emailjs/browser"

// This function sends email notifications using EmailJS
export async function sendEmailNotification(data: {
  fullName: string
  email: string
  reason: string
  password?: string
  additionalInfo?: string
  timestamp: string
}) {
  try {
    // Remove password from the data before sending
    const { password, ...emailData } = data

    // Prepare template parameters for EmailJS
    const templateParams = {
      name: emailData.fullName,
      email: emailData.email,
      reason: emailData.reason,
      additionalInfo: emailData.additionalInfo || "No additional information provided",
      timestamp: new Date(emailData.timestamp).toLocaleString(),
      to_email: "satenderkumar.analyst@gmail.com",
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      "service_portfolio", // Replace with your EmailJS service ID
      "template_portfolio_request", // Replace with your EmailJS template ID
      templateParams,
      "YOUR_EMAILJS_PUBLIC_KEY", // Replace with your EmailJS public key
    )

    if (response.status === 200) {
      return {
        success: true,
        message: "Email notification sent successfully",
      }
    } else {
      throw new Error(`Failed to send email: ${response.text}`)
    }
  } catch (error) {
    console.error("Error sending email notification:", error)
    throw error
  }
}
