import * as Accordion from "@radix-ui/react-accordion"
import Image from "next/image"
import User from "../../../assets/imgs/about-me/ramon.jpeg"
import Icon from "../../ui/Icon"

import dynamic from "next/dynamic"

const SintaxHighlight = dynamic(() => import("../../ui/SintaxHighlight"), {
  loading: () => null,
})

interface SnippetProps {
  monthsAgo: number
  stars: number
  details: string
  codeSnippet: string
  index: number
}

function Snippet({
  monthsAgo,
  stars,
  codeSnippet,
  details,
  index,
}: SnippetProps) {
  return (
    <li className="mb-12">
      <Accordion.Item value={`snippet-${index}`}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Image
              src={User}
              className="w-9 h-9 rounded-full"
              alt="User Owner of Code Snippet"
            />
            <div className="ml-3">
              <p className="text-sm text-primary-blue-code">@ramonribeiro</p>
              <p className="text-xs text-secondary-gray">
                {monthsAgo} months ago
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex items-start">
              <Accordion.Trigger className="flex items-center">
                <Icon name="Conversation" width={15} height={17} />
                <span className="text-sm text-secondary-gray hover:text-secondary-white ml-2">
                  details
                </span>
              </Accordion.Trigger>
              <div className="hidden xl:flex items-center ml-4">
                <Icon name="Star" width={18} height={17} />
                <span className="text-sm text-secondary-gray hover:text-secondary-white ml-2">
                  {stars} stars
                </span>
              </div>
            </div>
          </div>
        </div>

        <SintaxHighlight className="mt-3">{codeSnippet}</SintaxHighlight>

        <Accordion.Content>
          <div className="flex mt-4 pt-4 border-t border-line-gray">
            <p className="text-sm text-secondary-gray mr-4">{details}</p>

            <Accordion.Trigger className="flex mt-1">
              <Icon name="MenuClose" width={10} height={10} />
            </Accordion.Trigger>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </li>
  )
}

export default Snippet
