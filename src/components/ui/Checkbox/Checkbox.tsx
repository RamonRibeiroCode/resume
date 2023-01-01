import Icon from "../Icon"

interface CheckboxProps {
  id: string
  active: boolean
  onClick: (id: any) => void
}

function Checkbox({ id, active, onClick }: CheckboxProps) {
  return (
    <div
      className={`flex justify-center items-center w-[18px] h-[18px] border border-secondary-gray rounded-sm cursor-pointer ${
        active ? "bg-secondary-gray" : ""
      }`}
      onClick={() => onClick(id)}
    >
      {active && <Icon name="Checked" width={13} height={10} />}
    </div>
  )
}

export default Checkbox