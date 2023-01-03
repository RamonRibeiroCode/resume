import Folder from "../components/about-me/Folder"
import LabelPage from "../components/common/LabelPage"
import SideBar from "../components/common/SideBar"
import ContactLabel from "../components/contact-me/ContactLabel"
import Accordion, { AccordionItem } from "../components/ui/Accordion"
import useAboutMe from "../hooks/useAboutMe"
import { contactLabels } from "./contact-me"

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

      <div className="flex-1 mt-9 px-4 xl:border-l xl:border-line-gray xl:mt-0 xl:p-0">
        <span className="text-secondary-white">{activeArchive.path}</span>

        <div>{activeArchive.content}</div>
      </div>
    </div>
  )
}

export default AboutMe
