import { ComponentStory, ComponentMeta } from "@storybook/react"

import Project from "./Project"

export default {
  title: "Projects/Project",
  component: Project,
  args: {
    name: "VTEX Community Starter",
    description:
      "Project made in a hackathon in 48 hours at a face-to-face event, the website won the competition and is open to developers who want a template to build VTEX stores.",
    href: "https://www.faststore.dev/starters/beauty",
    tags: ["Gatsby", "SASS"],
    position: 1,
  },
} as ComponentMeta<typeof Project>

const Template: ComponentStory<typeof Project> = ({ ...args }) => {
  return (
    <div className="max-w-sm">
      <></>
    </div>
  )
}

export const Default = Template.bind({})
