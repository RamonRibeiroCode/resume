import { ComponentStory, ComponentMeta } from "@storybook/react"

import SideBar from "./SideBar"

export default {
  title: "Common/SideBar",
  component: SideBar,
} as ComponentMeta<typeof SideBar>

const Template: ComponentStory<typeof SideBar> = () => {
  return (
    <div className="xl:flex">
      <SideBar>
        <div className="p-4">
          <span className="text-secondary-white">Children</span>
        </div>
      </SideBar>

      <div className="flex-1 border-l border-line-gray h-96">
        <div className="p-4">
          <span className="text-secondary-white">Right Content</span>
        </div>
      </div>
    </div>
  )
}

export const Default = Template.bind({})
