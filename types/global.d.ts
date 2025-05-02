interface EmailJS {
  init(publicKey: string): void
  send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, any>,
    publicKey: string,
  ): Promise<{ status: number; text: string }>
}

interface Window {
  emailjs: EmailJS
}
