import ContactLabel from "../components/contact-me/ContactLabel"
import LabelPage from "../components/ui/LabelPage"
import SideBar from "../components/ui/SideBar"
import Accordion, { AccordionItem } from "../components/ui/Accordion"
import FindMeLink from "../components/contact-me/FindMeLink"
import ContactForm from "../components/contact-me/ContactForm"
import Icon from "../components/ui/Icon"
import ContactCode from "../components/contact-me/ContactCode"
import { ContactFormProvider } from "../contexts/ContactForm"

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
    <ContactFormProvider>
      <div className="flex flex-col flex-1 xl:flex-row">
        <SideBar>
          <LabelPage title="_contact-me" />

          <Accordion>
            <AccordionItem
              id="contacts"
              title="contacts"
              className="mb-1 xl:mb-0"
            >
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

        <div className="flex-1 mt-9 px-4 xl:border-l xl:border-line-gray xl:mt-0 xl:p-0">
          <div className="hidden w-full h-[41px] border-b border-line-gray xl:flex">
            <div className="flex justify-center items-center border-r border-line-gray pr-3">
              <span className="ml-3 mr-12 text-base text-secondary-gray">
                contacts
              </span>

              <Icon name="MenuClose" width={10} height={10} />
            </div>
          </div>
          <div className="flex h-[calc(100%_-_41px)]">
            <div className="w-full flex justify-center items-center xl:p-6 xl:w-2/5 2xl:w-1/2">
              <ContactForm />
            </div>

            <div className="hidden xl:flex justify-center items-center border-l border-line-gray p-6 xl:w-3/5 2xl:w-1/2">
              <ContactCode />
            </div>
          </div>
        </div>
      </div>
    </ContactFormProvider>
  )
}

export default ContactMe
