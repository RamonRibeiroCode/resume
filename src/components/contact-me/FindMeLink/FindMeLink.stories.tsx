import { ComponentStory, ComponentMeta } from "@storybook/react"

import FindMeLink from "./FindMeLink"

export default {
  title: "Contact Me/FindMeLink",
  component: FindMeLink,
  args: {
    title: "YouTube channel",
    href: "https://www.youtube.com/channel/UCfcqOKe3MFgkzcTKUBtePwg",
  },
} as ComponentMeta<typeof FindMeLink>

const Template: ComponentStory<typeof FindMeLink> = ({ ...args }) => {
  return <FindMeLink {...args} />
}

export const Default = Template.bind({})
