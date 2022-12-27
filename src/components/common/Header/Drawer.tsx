import { Dispatch, SetStateAction, ReactNode } from "react"

import Icon from "../../ui/Icon"

interface DrawerProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

function Drawer({ open, setOpen, children }: DrawerProps) {
  return (
    <>
      <button
        className="xl:hidden"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        {open ? (
          <Icon name="MenuClose" width={16} height={16} />
        ) : (
          <Icon name="MenuHam" width={18} height={16} />
        )}
      </button>

      <div
        className={`absolute top-[calc(100%_+_1px)] left-0 bg-primary-blue-default w-full h-[calc(100vh_-_32px_-_58px_-_48px)]  ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  )
}

export default Drawer
