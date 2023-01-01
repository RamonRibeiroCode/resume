interface LabelPageProps {
  title: string
}

function LabelPage({ title }: LabelPageProps) {
  return (
    <div className="px-4 pt-5 pb-7 xl:hidden">
      <h1 className="text-sm text-secondary-white">{title}</h1>
    </div>
  )
}

export default LabelPage
