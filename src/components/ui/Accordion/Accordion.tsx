import * as UIAccordion from "@radix-ui/react-accordion"
import { ReactNode } from "react"
import Icon from "../Icon"

import styles from "./Accordion.module.css"

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
      <UIAccordion.Header className="bg-line-gray xl:bg-transparent xl:border-b xl:border-line-gray">
        <UIAccordion.Trigger
          className={`flex items-center w-full my-0 px-4 py-2 ${styles["accordion-trigger"]}`}
        >
          <Icon className="mr-3" name="ArrowRight" width={7} height={10} />

          <span className="text-secondary-white">{title}</span>
        </UIAccordion.Trigger>
      </UIAccordion.Header>

      <UIAccordion.Content className="p-4 xl:border-b xl:border-line-gray">
        {children}
      </UIAccordion.Content>
    </UIAccordion.Item>
  )
}

export default Accordion
