import { ComponentStory, ComponentMeta } from "@storybook/react"

import ContactCode from "./ContactCode"
import { ContactFormProvider } from "../../../contexts/ContactForm"

export default {
  title: "Contact Me/ContactCode",
  component: ContactCode,
} as ComponentMeta<typeof ContactCode>

const Template: ComponentStory<typeof ContactCode> = () => {
  return (
    <ContactFormProvider>
      <ContactCode />
    </ContactFormProvider>
  )
}

export const Default = Template.bind({})
