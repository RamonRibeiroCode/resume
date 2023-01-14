import { Icon as IconType } from "../../../__generated__/graphql"
import Icon from "../../ui/Icon"

interface ContactLabelProps {
  title: string
  icon: IconType
}

function ContactLabel({ title, icon }: ContactLabelProps) {
  if (!icon) {
    return null
  }

  return (
    <div className="flex items-center mb-3 last:mb-0">
      <Icon name={icon.name} width={icon.width} height={icon.height} />
      <span className="text-sm text-secondary-gray ml-2">{title}</span>
    </div>
  )
}

export default ContactLabel
