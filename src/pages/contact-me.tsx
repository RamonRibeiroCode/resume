import ContactLabel from "../components/contact-me/ContactLabel"
import LabelPage from "../components/ui/LabelPage"
import SideBar from "../components/ui/SideBar"
import Accordion, { AccordionItem } from "../components/ui/Accordion"
import FindMeLink from "../components/contact-me/FindMeLink"
import ContactForm from "../components/contact-me/ContactForm"

const contactLabels = [
  {
    title: "ramonribeiro120@gmail.com",
    icon: {
      name: "Mail",
      width: 17,
      height: 15,
    },
  },
  {
    title: "(+55) 22992663750",
    icon: {
      name: "Phone",
      width: 17,
      height: 17,
    },
  },
]

const findMeLinks = [
  {
    title: "YouTube channel",
    href: "https://www.youtube.com/channel/UCfcqOKe3MFgkzcTKUBtePwg",
  },
  {
    title: "Instagram profile",
    href: "https://www.instagram.com/ramon_ribeiro15",
  },
  {
    title: "Twitch account",
    href: "https://www.twitch.tv/ramonesin",
  },
  {
    title: "Stack Overflow",
    href: "https://stackoverflow.com/users/20854618/ramon-ribeiro",
  },
]

function ContactMe() {
  return (
    <div className="flex flex-col flex-1 xl:flex-row">
      <SideBar>
        <LabelPage title="_contact-me" />

        <Accordion>
          <AccordionItem id="contacts" title="contacts" className="mb-1">
            {contactLabels.map((label) => (
              <ContactLabel
                key={label.title}
                title={label.title}
                icon={label.icon}
              />
            ))}
          </AccordionItem>

          <AccordionItem id="find-me-also-in" title="find-me-also-in">
            {findMeLinks.map((link) => (
              <FindMeLink
                key={link.title}
                title={link.title}
                href={link.href}
              />
            ))}
          </AccordionItem>
        </Accordion>
      </SideBar>

      <div className="flex-1 mt-9 px-4 xl:border-l xl:border-line-gray">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe
