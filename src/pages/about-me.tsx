import { useState } from "react"
import Folder from "../components/about-me/Folder"
import LabelPage from "../components/common/LabelPage"
import SideBar from "../components/common/SideBar"
import ContactLabel from "../components/contact-me/ContactLabel"
import Accordion, { AccordionItem } from "../components/ui/Accordion"
import Icon from "../components/ui/Icon"
import { contactLabels } from "./contact-me"

export type FolderColors = "Orange" | "Blue" | "Green"

const personalInfoFolders = [
  {
    name: "bio",
    color: "Orange" as FolderColors,
    archives: [
      {
        name: "me",
        content: "",
      },
    ],
  },
  {
    name: "interests",
    color: "Green" as FolderColors,
  },
  {
    name: "education",
    color: "Blue" as FolderColors,
    archives: [
      {
        name: "high-school",
        content: "",
      },
      {
        name: "university",
        content: "",
      },
    ],
  },
]

function AboutMe() {
  const [activeContent, setActiveContent] = useState("")

  return (
    <div className="flex flex-col flex-1 xl:flex-row">
      <SideBar>
        <LabelPage title="_about-me" />

        <Accordion>
          <AccordionItem
            id="personal-info"
            title="personal-info"
            className="mb-1 xl:mb-0"
          >
            <Accordion>
              {personalInfoFolders.map((folder) => (
                <Folder
                  key={folder.name}
                  name={folder.name}
                  color={folder.color}
                  archives={folder.archives}
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

      <div className="flex-1 mt-9 px-4 xl:border-l xl:border-line-gray xl:mt-0 xl:p-0"></div>
    </div>
  )
}

export default AboutMe
