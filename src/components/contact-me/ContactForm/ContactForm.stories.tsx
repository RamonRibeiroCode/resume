import { ComponentStory, ComponentMeta } from "@storybook/react"

import ContactForm from "./ContactForm"
import { ContactFormProvider } from "../../../contexts/ContactForm"

export default {
  title: "Contact Me/ContactForm",
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>

const Template: ComponentStory<typeof ContactForm> = () => {
  return (
    <ContactFormProvider>
      <ContactForm />
    </ContactFormProvider>
  )
}

export const Default = Template.bind({})
