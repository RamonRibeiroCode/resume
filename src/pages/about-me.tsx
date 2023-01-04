import Folder from "../components/about-me/Folder"
import Snippet from "../components/about-me/Snippet"
import CodeBar from "../components/common/CodeBar"
import LabelPage from "../components/common/LabelPage"
import SideBar from "../components/common/SideBar"
import ContactLabel from "../components/contact-me/ContactLabel"
import Accordion, { AccordionItem } from "../components/ui/Accordion"
import useAboutMe from "../hooks/useAboutMe"
import { contactLabels } from "./contact-me"

const codeSnippets = [
  {
    monthsAgo: 5,
    stars: 3,
    details:
      "My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.",
    codeId: "1",
  },
  {
    monthsAgo: 9,
    stars: 0,
    details:
      "My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.",
    codeId: "1",
  },
]

function AboutMe() {
  const { folders, activeArchive, setActiveArchive } = useAboutMe()

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
                  setActiveArchive={setActiveArchive}
                  {...folder}
                />
              ))}
            </Accordion>
          </AccordionItem>

          <AccordionItem id="contacts" title="contacts">
            {contactLabels.map((label) => (
              <ContactLabel
                key={label.title}
                title={label.title}
                icon={label.icon}
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
                {"//"} {activeArchive.folder}{" "}
              </span>
              <span className="text-secondary-gray xl:hidden"> / </span>
              <span className="text-secondary-gray">{activeArchive.name}</span>
            </span>
          </div>
        </div>

        <div className="xl:flex h-[calc(100%_-_41px)]">
          <div className="flex-1 mb-4">
            <div className="xl:pt-4 xl:px-9">
              <p className="text-secondary-gray">{activeArchive.content}</p>
            </div>
          </div>

          <div className="flex-1 xl:border-l border-line-gray xl:pt-4 xl:px-9">
            <span className="text-secondary-white xl:text-secondary-gray xl:text-lg">
              {"//"} Code snippet showcase:
            </span>

            <ul className="mt-7">
              {codeSnippets.map((snippet) => (
                <Snippet
                  key={snippet.codeId}
                  monthsAgo={snippet.monthsAgo}
                  stars={snippet.stars}
                  details={snippet.details}
                  codeId={snippet.codeId}
                />
              ))}
            </ul>
          </div>

          <CodeBar />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
