import { GetStaticProps } from "next"
import { gql } from "@apollo/client"

import ContactLabel from "../components/contact-me/ContactLabel"
import LabelPage from "../components/common/LabelPage"
import SideBar from "../components/common/SideBar"
import Accordion, { AccordionItem } from "../components/ui/Accordion"
import FindMeLink from "../components/contact-me/FindMeLink"
import ContactForm from "../components/contact-me/ContactForm"
import Icon from "../components/ui/Icon"
import ContactCode from "../components/contact-me/ContactCode"
import CodeBar from "../components/common/CodeBar"
import { ContactFormProvider } from "../contexts/ContactForm"
import { client } from "../lib/apollo"
import { Contact, FindMeLink as FindMeLinkType } from "../__generated__/graphql"

interface ContactMeProps {
  contacts: Contact[]
  findMeLinks: FindMeLinkType[]
}

function ContactMe({ contacts, findMeLinks }: ContactMeProps) {
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
              {contacts.map((contact) => (
                <ContactLabel
                  key={contact.title}
                  title={contact.title}
                  icon={contact.icon}
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

            <CodeBar />
          </div>
        </div>
      </div>
    </ContactFormProvider>
  )
}

const GET_CONTACT_ME = gql`
  query GetContactMe {
    contacts {
      title
      icon {
        name
        width
        height
      }
    }

    findMeLinks {
      title
      href
    }
  }
`

interface PageQuery {
  contacts: Contact[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.query<PageQuery>({
    query: GET_CONTACT_ME,
  })

  const queries = response.data

  return {
    props: {
      ...queries,
    },
    revalidate: 60 * 5, // 5 MINUTES
  }
}

export default ContactMe
