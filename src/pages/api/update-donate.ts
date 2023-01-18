import { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
})

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { paymentIntentId, amount } = request.body

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST")
    return response.status(405).end("Method Not Allowed")
  }

  await stripe.paymentIntents.update(paymentIntentId, {
    amount,
  })

  response.send({})
}

export default handler
