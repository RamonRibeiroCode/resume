import { ComponentStory, ComponentMeta } from "@storybook/react"

import ContactLabel from "./ContactLabel"

export default {
  title: "Contact Me/ContactLabel",
  component: ContactLabel,
  args: {
    title: "ramonribeiro120@gmail.com",
    icon: {
      name: "Mail",
      width: 17,
      height: 15,
    },
  },
} as ComponentMeta<typeof ContactLabel>

const Template: ComponentStory<typeof ContactLabel> = ({ ...args }) => {
  return <ContactLabel {...args} />
}

export const Default = Template.bind({})
