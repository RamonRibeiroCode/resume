import Icon from "../Icon"

interface CheckboxProps {
  id: string
  active: boolean
  onClick: (id: any) => void
}

function Checkbox({ id, active, onClick }: CheckboxProps) {
  return (
    <div className="relative checkbox">
      <div
        className={`relative z-10 flex justify-center items-center w-[18px] h-[18px] border border-secondary-gray rounded-sm cursor-pointer ${
          active ? "bg-secondary-gray" : "bg-primary-black "
        }`}
        onClick={() => onClick(id)}
      >
        {active && <Icon name="Checked" width={13} height={10} />}
      </div>

      <div className="checkbox-shadow w-5 h-5 absolute rounded-sm top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
    </div>
  )
}

export default Checkbox
