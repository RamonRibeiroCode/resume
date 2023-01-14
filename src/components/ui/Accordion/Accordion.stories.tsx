import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Accordion, { AccordionItem } from "./Accordion"
import ContactLabel from "../../contact-me/ContactLabel"
import { Contact } from "../../../__generated__/graphql"

const contacts = [
  {
    title: "ramonribeiro120@gmail.com",
    icon: {
      name: "Mail",
      width: 17,
      height: 15,
    },
  },
  {
    title: "(+55) 22992663750",
    icon: {
      name: "Phone",
      width: 17,
      height: 17,
    },
  },
] as unknown as Contact[]

export default {
  title: "UI/Accordion",
  component: AccordionItem,
  args: {
    id: "contact",
    title: "contact",
  },
} as ComponentMeta<typeof AccordionItem>

const Template: ComponentStory<typeof AccordionItem> = ({ ...args }) => {
  return (
    <Accordion>
      <AccordionItem {...args}>
        {contacts.map((label) => (
          <ContactLabel
            key={label.title}
            title={label.title}
            icon={label.icon}
          />
        ))}
      </AccordionItem>
    </Accordion>
  )
}

export const Default = Template.bind({})
