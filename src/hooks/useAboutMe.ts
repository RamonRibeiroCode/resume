import { useState } from "react"

import { Archive, Folder } from "../__generated__/graphql"

export interface AboutMeContent extends Archive {
  folderName: string
}

function useAboutMe(folders: Folder[]) {
  const [initialFolder] = folders
  const [initialArchive] = initialFolder.archives

  const initialContent: AboutMeContent = {
    folderName: initialFolder.name,
    ...initialArchive,
  }

  const [activeContent, setActiveContent] =
    useState<AboutMeContent>(initialContent)

  return {
    initialArchive,
    activeContent,
    setActiveContent,
  }
}

export default useAboutMe
