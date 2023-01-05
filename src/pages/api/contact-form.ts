import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import { google } from "googleapis"

const OAuth2 = google.auth.OAuth2

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  })

  const accessToken = await new Promise<string | null | undefined>(
    (resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject()
        }
        resolve(token)
      })
    }
  )

  if (!accessToken) {
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    requireTLS: true,
    port: 465,
    auth: {
      accessToken,
      type: "OAuth2",
      user: process.env.EMAIL_SENDER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
  })

  return transporter
}

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { name, email, message } = request.body

  const transporter = await createTransporter()

  if (!transporter) {
    return response.status(500).send("Internal server error")
  }

  const emailSended = await transporter.sendMail({
    from: process.env.EMAIL_SENDER,
    to: "ramonribeiro120@gmail.com",
    subject: 'Contact Form by "resume website"',
    html: `<p>name: ${name}</p> 
    <p>email: ${email}</p> 
    <p>message: ${message}</p>`,
  })

  if (emailSended.accepted.length === 0)
    return response.status(500).send("Internal server error")

  response.status(200).send("Email successfully sent")
}

export default handler
