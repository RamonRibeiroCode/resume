import { ChangeEvent, useCallback, useState } from "react"
import Image from "next/image"
import { Formik, Form, Field } from "formik"

import { useContactForm } from "../../../contexts/ContactForm"
import Hand from "../../../assets/imgs/contact-me/hand.png"

interface ContactFormValues {
  name: string
  email: string
  message: string
}

const initialValues: ContactFormValues = { name: "", email: "", message: "" }

function ContactForm() {
  const [completed, setCompleted] = useState(false)
  const { name, setName, email, setEmail, message, setMessage } =
    useContactForm()

  const handleSubmitForm = useCallback((values: ContactFormValues) => {
    setCompleted(true)
  }, [])

  const handleChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)
    },
    [setName]
  )

  const handleChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    },
    [setEmail]
  )

  const handleChangeMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value)
    },
    [setMessage]
  )

  if (completed) {
    return (
      <div>
        <h2 className="flex justify-center items-center text-2xl text-secondary-white">
          Thank you! <Image className="ml-1" src={Hand} alt="" />
        </h2>

        <p className="mt-3 mb-5 mx-auto max-w-[285px] xl:max-w-[382px] text-lg text-center text-secondary-gray">
          Your message has been accepted. You will recieve answer really soon!
        </p>

        <button
          className="flex py-3 px-5 mx-auto bg-secondary-light-gray rounded-lg text-sm text-secondary-white"
          onClick={() => setCompleted(false)}
        >
          send-new-message
        </button>
      </div>
    )
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
      <Form className="w-full xl:max-w-md">
        <div className="flex flex-col mb-4">
          <label className="text-base text-secondary-gray mb-2" htmlFor="name">
            _name:
          </label>
          <Field
            className="w-full h-10 bg-primary-blue-dark border border-line-gray rounded-lg outline-none px-4 text-secondary-dark-gray focus:border-secondary-gray focus:shadow-input"
            id="name"
            name="name"
            max="2"
            value={name}
            onChange={handleChangeName}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-base text-secondary-gray mb-2" htmlFor="email">
            _email:
          </label>
          <Field
            className="w-full h-10 bg-primary-blue-dark border border-line-gray rounded-lg outline-none px-4 text-secondary-dark-gray focus:border-secondary-gray focus:shadow-input"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-base text-secondary-gray mb-2"
            htmlFor="message"
          >
            _message:
          </label>
          <Field
            className="w-full min-h-[145px] max-h-[270px] bg-primary-blue-dark border border-line-gray rounded-lg outline-none p-4 text-secondary-dark-gray focus:border-secondary-gray focus:shadow-input"
            as="textarea"
            id="message"
            name="message"
            value={message}
            onChange={handleChangeMessage}
          />
        </div>

        <button
          className="py-3 px-5 bg-secondary-light-gray rounded-lg text-sm text-secondary-white"
          type="submit"
        >
          submit-message
        </button>
      </Form>
    </Formik>
  )
}

export default ContactForm
