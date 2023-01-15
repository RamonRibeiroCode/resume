import { GetStaticProps } from "next"
import Markdown from "react-markdown"
import { gql } from "@apollo/client"

import Folder from "../../components/about-me/Folder"
import Snippet from "../../components/about-me/Snippet"
import CodeBar from "../../components/common/CodeBar"
import LabelPage from "../../components/common/LabelPage"
import SideBar from "../../components/common/SideBar"
import ContactLabel from "../../components/contact-me/ContactLabel"
import Accordion, { AccordionItem } from "../../components/ui/Accordion"
import useAboutMe from "../../hooks/useAboutMe"
import { client } from "../../lib/apollo"
import {
  CodeSnippet,
  Contact,
  Folder as FolderType,
} from "../../__generated__/graphql"
import styles from "./styles.module.css"

interface AboutMeProps {
  contacts: Contact[]
  codeSnippets: CodeSnippet[]
  folders: FolderType[]
}

function AboutMe({ contacts, codeSnippets, folders }: AboutMeProps) {
  const { activeContent, setActiveContent } = useAboutMe(folders)

  return (
    <div className="flex flex-col flex-1 xl:flex-row">
      <SideBar>
        <LabelPage title="_about-me" />

        <Accordion defaultOpened="personal-info">
          <AccordionItem
            id="personal-info"
            title="personal-info"
            className="mb-1 xl:mb-0"
          >
            <Accordion>
              {folders.map((folder) => (
                <Folder
                  key={folder.name}
                  setActiveContent={setActiveContent}
                  {...folder}
                />
              ))}
            </Accordion>
          </AccordionItem>

          <AccordionItem id="contacts" title="contacts">
            {contacts.map((contact) => (
              <ContactLabel
                key={contact.title}
                title={contact.title}
                icon={contact.icon}
              />
            ))}
          </AccordionItem>
        </Accordion>
      </SideBar>

      <div className="flex-1 mt-4 px-4 xl:border-l xl:border-line-gray xl:mt-0 xl:p-0">
        <div className="mb-3 xl:mb-0 xl:flex xl:w-full xl:pl-4 xl:h-[41px] xl:border-b xl:border-line-gray">
          <div className="xl:flex items-center xl:pr-4 xl:h-full xl:border-r xl:border-line-gray">
            <span className="text-secondary-white">
              <span className="xl:hidden">
                {"//"} {activeContent.folderName}{" "}
              </span>
              <span className="text-secondary-gray xl:hidden"> / </span>
              <span className="text-secondary-gray">{activeContent.name}</span>
            </span>
          </div>
        </div>

        <div className="xl:flex h-[calc(100%_-_41px)]">
          <div className="xl:w-1/2 mb-4">
            <div className="xl:pt-4 xl:px-9">
              <Markdown className={`text-secondary-gray ${styles["about-me"]}`}>
                {activeContent.content}
              </Markdown>
            </div>
          </div>

          <div className="xl:w-1/2 xl:border-l border-line-gray xl:pt-4 xl:px-9">
            <span className="text-secondary-white xl:text-secondary-gray xl:text-lg">
              {"//"} Code snippet showcase:
            </span>

            <Accordion>
              <ul className="mt-7">
                {codeSnippets.map((snippet, index) => (
                  <Snippet
                    key={snippet.details}
                    monthsAgo={snippet.monthsAgo}
                    stars={snippet.stars}
                    details={snippet.details}
                    codeSnippet={snippet.codeSnippet}
                    index={index}
                  />
                ))}
              </ul>
            </Accordion>
          </div>

          <CodeBar />
        </div>
      </div>
    </div>
  )
}

const GET_CONTACT_ME = gql`
  query GetAboutMe {
    contacts {
      title
      icon {
        name
        width
        height
      }
    }

    codeSnippets {
      monthsAgo
      stars
      details
      codeSnippet
    }

    folders {
      name
      color
      archives {
        name
        content
      }
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

export default AboutMe
