import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectType, message } = body;

    // Simple backend validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const name = `${firstName} ${lastName}`;
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    // 1. Try Web3Forms if key exists
    if (web3formsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          subject: `New Inquiry: ${projectType} from ${name}`,
          message: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`,
        }),
      });

      const responseText = await response.text();
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (e) {
        throw new Error(`Web3Forms returned an invalid response (Status ${response.status}): ${responseText.substring(0, 150)}`);
      }

      if (!response.ok) {
        throw new Error(responseData.message || `Web3Forms error (Status ${response.status})`);
      }

      return NextResponse.json({
        success: true,
        message: "Inquiry sent successfully via Web3Forms!",
      });
    }

    // 2. Try Resend if key exists
    if (resendKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Maadox Studios Inquiry <onboarding@resend.dev>",
          to: "madhurmane81@gmail.com",
          subject: `New Inquiry: ${projectType} from ${name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #FF5722; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Website Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Project Type:</strong> ${projectType}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #FF5722;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          `,
        }),
      });

      const responseText = await response.text();
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (e) {
        throw new Error(`Resend returned an invalid response (Status ${response.status}): ${responseText.substring(0, 150)}`);
      }

      if (!response.ok) {
        throw new Error(responseData.message || `Resend error (Status ${response.status})`);
      }

      return NextResponse.json({
        success: true,
        message: "Inquiry sent successfully via Resend!",
      });
    }

    // 3. Fallback to Demo Mode (Log to terminal & return success with demo flag)
    console.log("=== [Demo Mode] New Contact Form Submission ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Project Type: ${projectType}`);
    console.log(`Message: ${message}`);
    console.log("=================================================");
    console.log("👉 Tip: Add WEB3FORMS_ACCESS_KEY or RESEND_API_KEY to your .env.local to receive actual emails!");

    // Simulate network latency for visual feel
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      isDemo: true,
      message: "Form submitted successfully (Demo Mode)!",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

