import { ReactNode } from "react"

interface SideBarProps {
  children?: ReactNode
}

function SideBar({ children }: SideBarProps) {
  return <div className="w-full h-full xl:max-w-[272px]">{children}</div>
}

export default SideBar
