import { FormEvent, useState } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"

import Spinner from "../ui/Spinner"

function Checkout() {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    await elements.fetchUpdates()

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/donate",
      },
    })

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string)
    } else {
      setMessage("An unexpected error occurred.")
    }

    setIsLoading(false)
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement
        options={{
          layout: "accordion",
        }}
      />

      <button
        className="flex justify-center items-center bg-secondary-light-gray mt-4 px-8 py-3 rounded-lg text-sm text-secondary-white"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        {isLoading ? <Spinner /> : "Confirmation"}
      </button>

      {message && (
        <div id="payment-message" className="text-accent-orange text-xs mt-3">
          {message}
        </div>
      )}
    </form>
  )
}

export default Checkout
