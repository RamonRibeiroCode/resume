import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Snippet from "./Snippet"
import Accordion from "../../ui/Accordion"

export default {
  title: "AboutMe/Snippet",
  component: Snippet,
  args: {
    monthsAgo: 13,
    stars: 3,
    details:
      "The above code was made by me 13 months ago, it is a javascript function that builds a repurchase url, and when clicking on the respective link, the customer is redirected to the checkout with all the items purchased in the respective order.\n\nThis feature generated a great source of income for Carrefour, due to the high conversion per click, above 50%!",
    codeSnippet: `function getRemakeSkus(sellerId, items) {
  return items.reduce(
    (initial, item, index, array) =>
      \`\${initial}sku=\${item.vtexItemId}&qty=\${item.quantity}\${
        array.length - 1 === index
          ? \`&seller=\${sellerId}&sc=2\`
          : \`&seller=\${sellerId}&sc=2&\`
      }\`,
    ""
  )
}`,
  },
} as ComponentMeta<typeof Snippet>

const Template: ComponentStory<typeof Snippet> = ({ ...args }) => {
  return (
    <Accordion>
      <Snippet {...args} />
    </Accordion>
  )
}

export const Default = Template.bind({})
