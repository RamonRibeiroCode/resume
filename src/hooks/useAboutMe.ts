import { useState } from "react"

export interface Folder {
  name: string
  color: FolderColors
  archives: Archive[]
}

type FolderColors = "Orange" | "Blue" | "Green"

export interface Archive {
  path: string
  name: string
  content: string
}

const personalInfoFolders: Folder[] = [
  {
    name: "bio",
    color: "Orange",
    archives: [
      {
        path: "bio / me",
        name: "me",
        content: "",
      },
    ],
  },
  {
    name: "interests",
    color: "Green",
    archives: [
      {
        path: "interests / flutter",
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
        path: "education / high-school",
        name: "high-school",
        content: "",
      },
      {
        path: "education / university",
        name: "university",
        content: "",
      },
    ],
  },
]

const initialArchive = personalInfoFolders[0].archives[0]

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
