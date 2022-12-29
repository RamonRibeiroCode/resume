import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  useContext,
  SetStateAction,
  Dispatch,
} from "react"

interface ContactFormContext {
  name: string
  setName: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  message: string
  setMessage: Dispatch<SetStateAction<string>>
}

interface ContactFormProviderProps {
  children: ReactNode
}

const ContactFormContext = createContext({} as ContactFormContext)

export const ContactFormProvider = ({ children }: ContactFormProviderProps) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const value = useMemo(
    () => ({
      name,
      setName,
      email,
      setEmail,
      message,
      setMessage,
    }),
    [name, email, message]
  )

  return (
    <ContactFormContext.Provider value={value}>
      {children}
    </ContactFormContext.Provider>
  )
}

export default ContactFormContext

export const useContactForm = () => {
  return useContext(ContactFormContext)
}
