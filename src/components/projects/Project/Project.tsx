import Image, { StaticImageData } from "next/image"

interface ProjectProps {
  position: number
  name: string
  href: string
  imageUrl: string | StaticImageData
  description: string
}

function Project({
  name,
  position,
  href,
  imageUrl,
  description,
}: ProjectProps) {
  return (
    <li className="mb-5 xl:mb-0">
      <div className="mb-4">
        <span className="font-bold text-primary-blue-code">
          Project {position}
        </span>
        <span className="text-secondary-gray">
          {" "}
          /<span className="hidden lg:inline-block">/</span> {name}
        </span>
      </div>

      <article className="border border-secondary-gray rounded-2xl overflow-hidden">
        <a href={href}>
          <Image
            className="w-full"
            src={imageUrl}
            alt="Project Image"
            width={387}
            height={280}
          />
          <div className="p-6">
            <p className="text-secondary-gray">{description}</p>

            <span className="block w-fit text-sm py-[10px] px-[14px] bg-secondary-light-gray rounded-lg mt-6 text-secondary-white hover:bg-accent-orange hover:text-primary-black">
              view-project
            </span>
          </div>
        </a>
      </article>
    </li>
  )
}

export default Project
