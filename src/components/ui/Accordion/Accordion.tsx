import * as UIAccordion from "@radix-ui/react-accordion"
import { ReactNode } from "react"
import Icon from "../Icon"

interface AccordionProps {
  children?: ReactNode
}

function Accordion({ children }: AccordionProps) {
  return (
    <UIAccordion.Root type="single" collapsible>
      {children}
    </UIAccordion.Root>
  )
}

interface AccordionItemProps {
  id: string
  title: string
  className?: string
  children?: ReactNode
}

export function AccordionItem({
  id,
  title,
  className,
  children,
}: AccordionItemProps) {
  return (
    <UIAccordion.Item className={className} value={id}>
      <UIAccordion.Header className="bg-line-gray px-4 py-2">
        <UIAccordion.Trigger className="flex items-center my-0 ">
          <Icon className="mr-3" name="ArrowRight" width={7} height={10} />

          <span className="text-secondary-white">{title}</span>
        </UIAccordion.Trigger>
      </UIAccordion.Header>

      <UIAccordion.Content className="p-4">{children}</UIAccordion.Content>
    </UIAccordion.Item>
  )
}

export default Accordion
