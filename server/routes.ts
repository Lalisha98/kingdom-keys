import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./outlook";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form endpoint - sends enquiry to info@kingdomkeys.co.za via Outlook
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required" });
      }

      const subject = `New Enquiry from ${name}${service ? ` - ${service}` : ''}`;
      
      const emailBody = `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This enquiry was submitted via the Kingdom Keys Cleaning website.</em></p>
      `;

      await sendEmail("info@kingdomkeys.co.za", subject, emailBody);

      res.json({ success: true, message: "Your enquiry has been sent successfully" });
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to send enquiry. Please try again later." });
    }
  });

  return httpServer;
}
