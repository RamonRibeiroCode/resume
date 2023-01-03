import * as UIAccordion from "@radix-ui/react-accordion"
import Icon from "../../../components/ui/Icon"
import { FolderColors } from "../../../pages/about-me"
import Accordion from "../../ui/Accordion"
import Archive from "../Archive"

import styles from "./Folder.module.css"

interface FolderProps {
  name: string
  color: FolderColors
  archives?: FolderArchive[]
}

interface FolderArchive {
  name: string
  content: string
}

function Folder({ name, color, archives }: FolderProps) {
  return (
    <UIAccordion.Item value={`folder-${name}`} className="mb-4 last:mb-0">
      <UIAccordion.Header>
        <UIAccordion.Trigger
          className={`flex items-center m-0 ${styles["folder-trigger"]}`}
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
          {archives?.map((archive) => (
            <Archive key={archive.name} name={archive.name} />
          ))}
        </ul>
      </UIAccordion.Content>
    </UIAccordion.Item>
  )
}

export default Folder
