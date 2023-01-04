import Image from "next/image"
import User from "../../../assets/imgs/about-me/ramon.jpeg"
import Icon from "../../ui/Icon"

interface SnippetProps {
  monthsAgo: number
  stars: number
  details: string
  codeId: string
}

function Snippet({ stars }: SnippetProps) {
  return (
    <li className="mb-12">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            src={User}
            className="w-9 h-9 rounded-full"
            alt="User Owner of Code Snippet"
          />
          <div className="ml-3">
            <p className="text-sm text-primary-blue-code">@username</p>
            <p className="text-xs text-secondary-gray">5 months ago</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-start">
            <div className="flex items-center">
              <Icon name="Conversation" width={15} height={17} />
              <span className="text-sm text-secondary-gray ml-2">details</span>
            </div>
            <div className="hidden xl:flex items-center ml-4">
              <Icon name="Star" width={18} height={17} />
              <span className="text-sm text-secondary-gray ml-2">
                {stars} stars
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Snippet