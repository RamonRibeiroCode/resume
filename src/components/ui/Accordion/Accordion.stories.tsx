import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Accordion, { AccordionItem } from "./Accordion"
import { contactLabels } from "../../../pages/contact-me"
import ContactLabel from "../../contact-me/ContactLabel"

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
        {contactLabels.map((label) => (
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
