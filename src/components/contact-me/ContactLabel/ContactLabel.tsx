import { ContactIconName } from "../../../pages/contact-me"
import Icon from "../../ui/Icon"

interface ContactLabelProps {
  title: string
  icon: ContactIcon
}

interface ContactIcon {
  name: ContactIconName
  width: number
  height: number
}

function ContactLabel({ title, icon }: ContactLabelProps) {
  return (
    <div className="flex items-center mb-3 last:mb-0">
      <Icon name={icon.name} width={icon.width} height={icon.height} />
      <span className="text-sm text-secondary-gray ml-2">{title}</span>
    </div>
  )
}

export default ContactLabel
