import { Tech } from "../../hooks/useProjects"

export const getIconDimensions = (name: Tech) => {
  switch (name) {
    case "Gatsby":
      return { width: 21, height: 20 }
    case "React":
      return { width: 22, height: 20 }
    case "CSS":
      return { width: 21, height: 18 }
    case "Tailwind":
      return { width: 20, height: 12 }
    case "VTEX":
      return { width: 21, height: 18 }
    default:
      return { width: 20, height: 20 }
  }
}
