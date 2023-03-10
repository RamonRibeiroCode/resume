import { Dispatch, SetStateAction } from "react"
import * as UIAccordion from "@radix-ui/react-accordion"

import type { AboutMeContent } from "../../../hooks/useAboutMe"
import Archive from "../Archive"
import Icon from "../../ui/Icon"
import { Folder as FolderType } from "../../../__generated__/graphql"
import styles from "./Folder.module.css"

interface FolderProps extends FolderType {
  setActiveContent: Dispatch<SetStateAction<AboutMeContent>>
}

function Folder({ name, color, archives, setActiveContent }: FolderProps) {
  return (
    <UIAccordion.Item value={`folder-${name}`} className="mb-3 last:mb-0">
      <UIAccordion.Header>
        <UIAccordion.Trigger
          className={`flex items-center ${styles["folder-trigger"]}`}
        >
          <Icon
            className={styles["arrow-folder"]}
            name="ArrowFolder"
            width={9}
            height={13}
          />
          <Icon
            name={`${color}Folder`}
            width={16}
            height={13}
            className="ml-3 mr-2"
          />

          <span
            className={`text-secondary-gray pt-[2px] ${styles["folder-title"]}`}
          >
            {name}
          </span>
        </UIAccordion.Trigger>
      </UIAccordion.Header>

      <UIAccordion.Content className="text-secondary-white">
        <ul className="pl-5 pt-2">
          {archives.map((archive) => (
            <Archive
              key={archive.name}
              setActiveContent={setActiveContent}
              folderName={name}
              {...archive}
            />
          ))}
        </ul>
      </UIAccordion.Content>
    </UIAccordion.Item>
  )
}

export default Folder
