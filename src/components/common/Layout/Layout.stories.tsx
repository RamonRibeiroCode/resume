import { ComponentStory, ComponentMeta } from "@storybook/react"

import Layout from "./Layout"

export default {
  title: "Common/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = () => {
  return (
    <Layout>
      <div className="p-4">
        <span className="text-secondary-white">Children</span>
      </div>
    </Layout>
  )
}

export const Default = Template.bind({})
