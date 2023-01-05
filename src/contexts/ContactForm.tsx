import axios from "axios"
import {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useContext,
  useCallback,
  ChangeEvent,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react"

interface ContactFormContextProps {
  name: string
  email: string
  message: string
  completed: boolean
  loading: boolean
  errors: string[]
  setCompleted: Dispatch<SetStateAction<boolean>>
  handleSubmitForm: (e: FormEvent) => Promise<void>
  handleChangeName: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

interface ContactFormProviderProps {
  children: ReactNode
}

const ContactFormContext = createContext({} as ContactFormContextProps)

export const ContactFormProvider = ({ children }: ContactFormProviderProps) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [completed, setCompleted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const reset = useCallback(() => {
    setName("")
    setEmail("")
    setMessage("")
    setErrors([])
  }, [])

  const emailValidation = (email: string) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    return email.match(emailRegex)
  }

  const getErrors = useCallback(
    (name: string, email: string, message: string) => {
      const errors: string[] = []
      const requiredFields = []

      if (!name) requiredFields.push("name")
      if (!email) requiredFields.push("email")
      if (!message) requiredFields.push("message")

      if (email) {
        const emailIsValid = emailValidation(email)

        if (!emailIsValid) errors.push("Invalid format e-mail")
      }

      if (requiredFields.length !== 0) {
        const fieldsInMessage = requiredFields.join(", ")

        if (requiredFields.length === 1)
          errors.push(`The field ${fieldsInMessage} is required`)

        if (requiredFields.length > 1)
          errors.push(`The fields ${fieldsInMessage} are required`)
      }

      return errors
    },
    []
  )

  const handleSubmitForm = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      setErrors([])
      setLoading(true)

      const errors = getErrors(name, email, message)

      if (errors.length) {
        setLoading(false)

        return setErrors(errors)
      }

      try {
        const values = {
          name,
          email,
          message,
        }

        await axios.post("/api/contact-form", values)

        reset()
        setCompleted(true)
      } catch (error) {
        setErrors(["Erro inesperado, tente novamente mais tarde"])
      }

      setLoading(false)
    },
    [
      email,
      getErrors,
      message,
      name,
      reset,
      setCompleted,
      setErrors,
      setLoading,
    ]
  )

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
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value)
    },
    [setMessage]
  )

  const value = useMemo(
    () => ({
      name,
      email,
      message,
      completed,
      loading,
      errors,
      setCompleted,
      handleSubmitForm,
      handleChangeName,
      handleChangeEmail,
      handleChangeMessage,
    }),
    [
      name,
      email,
      message,
      completed,
      loading,
      errors,
      handleSubmitForm,
      handleChangeName,
      handleChangeEmail,
      handleChangeMessage,
    ]
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
