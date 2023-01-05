import Image from "next/image"

import { useContactForm } from "../../../contexts/ContactForm"
import Hand from "../../../assets/imgs/contact-me/hand.png"
import Icon from "../../ui/Icon"
import Spinner from "../../ui/Spinner"

function ContactForm() {
  const {
    name,
    email,
    message,
    errors,
    setCompleted,
    completed,
    loading,
    handleSubmitForm,
    handleChangeName,
    handleChangeEmail,
    handleChangeMessage,
  } = useContactForm()

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

  const hasEmptyValues = !name || !email || !message

  return (
    <form className="w-full xl:max-w-md" onSubmit={handleSubmitForm}>
      <div className="flex flex-col mb-4">
        <label className="text-base text-secondary-gray mb-2" htmlFor="name">
          _name:
        </label>
        <input
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
        <input
          className="w-full h-10 bg-primary-blue-dark border border-line-gray rounded-lg outline-none px-4 text-secondary-dark-gray focus:border-secondary-gray focus:shadow-input"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-base text-secondary-gray mb-2" htmlFor="message">
          _message:
        </label>
        <textarea
          className="w-full min-h-[145px] max-h-[270px] bg-primary-blue-dark border border-line-gray rounded-lg outline-none p-4 text-secondary-dark-gray focus:border-secondary-gray focus:shadow-input"
          id="message"
          name="message"
          value={message}
          onChange={handleChangeMessage}
        />
      </div>

      <button
        className="w-full max-w-[160px] flex justify-center items-center py-3  mt-6 bg-secondary-light-gray rounded-lg text-sm text-secondary-white disabled:opacity-30"
        type="submit"
        disabled={loading || hasEmptyValues}
      >
        {loading ? <Spinner /> : "submit-message"}
      </button>

      {errors && (
        <ul className="mt-5">
          {errors.map((error) => (
            <li key={error} className="flex items-center my-3">
              <Icon name="Warning" width={18} height={18} />

              <span className="text-sm ml-1 text-accent-orange">{error}</span>
            </li>
          ))}
        </ul>
      )}
    </form>
  )
}

export default ContactForm
