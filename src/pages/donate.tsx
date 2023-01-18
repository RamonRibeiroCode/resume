import { useEffect, useState } from "react"
import axios from "axios"
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import Checkout from "../components/donate/Checkout"

const stripePromise = loadStripe(
  "pk_test_51MIjcIBDhynOS5xbvMiq6om2OofchXqUWtrZwibeIExmrtoXHWNu4BRJUsd6ow4DTmEDm938QmRmz09etSApFC0t00tGaBOohF"
)

function Donate() {
  const [clientSecret, setClientSecret] = useState("")

  const getClientSecret = async () => {
    const response = await axios.post("/api/donate")

    setClientSecret(response.data.clientSecret)
  }

  useEffect(() => {
    getClientSecret()
  }, [])

  const options: StripeElementsOptions = {
    clientSecret,
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css2?family=Fira+Code",
        family: "Fira Code",
        weight: "400",
      },
    ],
    appearance: {
      theme: "night",
      variables: {
        borderRadius: "8px",
        colorBackground: "#011221",
        colorPrimary: "#607B96",
        spacingGridRow: "16px",
        fontFamily: "Fira Code",
      },
    },
  }

  if (!clientSecret) {
    return null
  }

  return (
    <div className="max-w-2xl p-14">
      <Elements options={options} stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  )
}

export default Donate
