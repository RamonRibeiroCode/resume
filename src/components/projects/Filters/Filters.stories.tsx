import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useArgs } from "@storybook/client-api"

import Filters from "./Filters"
import useProjects from "../../../hooks/useProjects"
import { Project, ProjectTag } from "../../../__generated__/graphql"

const projects = [
  {
    name: "VTEX Community Starter",
    image: {
      url: null,
    },
    description:
      "Project made in a hackathon in 48 hours at a face-to-face event, the website won the competition and is open to developers who want a template to build VTEX stores.",
    href: "https://www.faststore.dev/starters/beauty",
    tags: ["Gatsby", "SASS"],
  },
  {
    name: "Carrefour Market Store",
    image: {
      url: null,
    },
    description:
      "Carrefour e-commerce (largest supermarket in Brazil), where different types of food are sold.",
    href: "https://mercado.carrefour.com.br/",
    tags: ["React", "NextJs", "Tailwind"],
  },
  {
    name: "Carrefour My Account",
    image: {
      url: null,
    },
    description:
      '"My account" on the Carrefour website, where customers can view their orders, request changes and cancellations, and be able to repurchase some items, among other options.',
    href: "https://www.carrefour.com.br/account#/orders",
    tags: ["React", "VTEX", "CSS"],
  },
] as unknown as Project[]

export default {
  title: "Projects/Filters",
  component: Filters,
  args: {
    tagsApplied: ["NextJs", "SASS"],
  },
} as ComponentMeta<typeof Filters>

const Template: ComponentStory<typeof Filters> = ({ ...args }) => {
  const [{ tagsApplied }, updateArgs] = useArgs()
  const { tags } = useProjects(projects)

  const handleApplyFilter = (tag: ProjectTag) => {
    if (tagsApplied.includes(tag)) {
      const filteredtags = tagsApplied.filter(
        (prevTag: ProjectTag) => prevTag !== tag
      )

      return updateArgs({ tagsApplied: filteredtags })
    }

    updateArgs({ tagsApplied: [...tagsApplied, tag] })
  }

  return <></>
}

export const Default = Template.bind({})
