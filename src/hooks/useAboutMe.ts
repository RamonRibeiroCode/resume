import { useState } from "react"

export interface Folder {
  name: string
  color: FolderColors
  archives: Archive[]
}

type FolderColors = "Orange" | "Blue" | "Green"

export interface Archive {
  folder: string
  name: string
  content: string
}

const personalInfoFolders: Folder[] = [
  {
    name: "bio",
    color: "Orange",
    archives: [
      {
        folder: "bio",
        name: "me",
        content: `About me\nI have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.`,
      },
    ],
  },
  {
    name: "interests",
    color: "Green",
    archives: [
      {
        folder: "interests",
        name: "flutter",
        content: "",
      },
    ],
  },
  {
    name: "education",
    color: "Blue",
    archives: [
      {
        folder: "education",
        name: "high-school",
        content: "",
      },
      {
        folder: "education",
        name: "university",
        content: "",
      },
    ],
  },
]

const [initialFolder] = personalInfoFolders
const [initialArchive] = initialFolder.archives

function useAboutMe() {
  const [activeArchive, setActiveArchive] = useState<Archive>(initialArchive)

  return {
    folders: personalInfoFolders,
    initialArchive,
    activeArchive,
    setActiveArchive,
  }
}

export default useAboutMe
