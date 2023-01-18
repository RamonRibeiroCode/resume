import { memo, useCallback, useEffect, useState } from "react"
import axios from "axios"
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { gql } from "@apollo/client"
import { GetStaticProps } from "next"

import Checkout from "../components/donate/Checkout"
import SideBar from "../components/common/SideBar"
import LabelPage from "../components/common/LabelPage"
import Icon from "../components/ui/Icon"
import Accordion, { AccordionItem } from "../components/ui/Accordion"
import { Contact } from "../__generated__/graphql"
import ContactLabel from "../components/contact-me/ContactLabel"
import { client } from "../lib/apollo"

const stripePromise = loadStripe(
  "pk_test_51MIjcIBDhynOS5xbvMiq6om2OofchXqUWtrZwibeIExmrtoXHWNu4BRJUsd6ow4DTmEDm938QmRmz09etSApFC0t00tGaBOohF"
)

const donates = [1000, 2000, 3000, 4000]

const checkoutStyles: StripeElementsOptions = {
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

interface DonateProps {
  contacts: Contact[]
}

function Donate({ contacts }: DonateProps) {
  const [clientSecret, setClientSecret] = useState("")
  const [paymentIntentId, setPaymentIntentId] = useState("")
  const [amount, setAmount] = useState(donates[0])

  const getDonateSecret = useCallback(async () => {
    const response = await axios.post("/api/create-donate", { amount })

    setPaymentIntentId(response.data.paymentIntentId)
    setClientSecret(response.data.clientSecret)
  }, [amount])

  const handleUpdateDonate = async (donate: number) => {
    setAmount(donate)

    await axios.post("/api/update-donate", { paymentIntentId, amount: donate })
  }

  useEffect(() => {
    getDonateSecret()
  }, [getDonateSecret])

  const options: StripeElementsOptions = {
    clientSecret,
    ...checkoutStyles,
  }

  return (
    <div className="flex flex-col flex-1 xl:flex-row">
      <SideBar>
        <LabelPage title="_donate" />

        <Accordion>
          <AccordionItem
            id="contacts"
            title="contacts"
            className="mb-1 xl:mb-0"
          >
            {contacts.map((contact) => (
              <ContactLabel
                key={contact.title}
                title={contact.title}
                icon={contact.icon}
              />
            ))}
          </AccordionItem>
        </Accordion>
      </SideBar>

      <div className="flex-1 mt-9 px-4 xl:border-l xl:border-line-gray xl:mt-0 xl:p-0">
        <div className="hidden w-full h-[41px] border-b border-line-gray xl:flex">
          <div className="flex justify-center items-center border-r border-line-gray pr-3">
            <span className="ml-3 mr-12 text-base text-secondary-gray">
              donate
            </span>

            <Icon name="MenuClose" width={10} height={10} />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row h-[calc(100%_-_41px)]">
          <div className="flex-1 flex flex-col justify-center items-center xl:p-6">
            <button className="text-secondary-white">Choose your donate</button>

            <div className="w-full flex justify-center my-8">
              {donates.map((donate) => {
                return (
                  <button
                    key={donate}
                    onClick={() => handleUpdateDonate(donate)}
                    className={`w-full max-w-[80px] flex justify-center items-center py-3 bg-secondary-light-gray rounded-lg text-sm text-secondary-white mr-4 last:mr-0 ${
                      donate === amount
                        ? "bg-secondary-white text-secondary-light-gray"
                        : ""
                    }`}
                  >
                    R$ {donate / 100}
                  </button>
                )
              })}
            </div>

            <p className="text-secondary-gray mx-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="flex-1 flex  justify-center items-center xl:border-l border-line-gray p-6">
            {clientSecret && (
              <div className="w-full max-w-[420px]">
                <p className="text-center text-secondary-gray mb-8">
                  Valor escolhido{" "}
                  <span className="text-secondary-white">R${amount / 100}</span>
                </p>

                <Elements options={options} stripe={stripePromise}>
                  <Checkout />
                </Elements>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const GET_DONATE = gql`
  query GetDonate {
    contacts {
      title
      icon {
        name
        width
        height
      }
    }
  }
`

interface PageQuery {
  contacts: Contact[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.query<PageQuery>({
    query: GET_DONATE,
  })

  const queries = response.data

  return {
    props: {
      ...queries,
    },
    revalidate: 60 * 5, // 5 MINUTES
  }
}

export default memo(Donate)
