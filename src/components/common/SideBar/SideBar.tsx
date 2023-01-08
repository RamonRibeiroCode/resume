import { ReactNode } from "react"

interface SideBarProps {
  children?: ReactNode
}

function SideBar({ children }: SideBarProps) {
  return <aside className="w-full h-full xl:max-w-[272px]">{children}</aside>
}

export default SideBar
