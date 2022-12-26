import Image from "next/image"

import Blurs from "../assets/imgs/Blurs.png"

export default function Home() {
  return (
    <div className="flex flex-col justify-between px-4 flex-1 xs:px-7">
      <Image
        src={Blurs}
        className="w-full fixed left-0 top-0"
        alt="Background Blur"
      />

      <div className="mt-24">
        <h1 className="text-base text-secondary-off-white xs:text-lg">
          Hi all. I am
        </h1>
        <h2 className="text-5xl text-secondary-off-white leading-none -ml-1 my-2 xs:text-heading">
          Ramon Ribeiro
        </h2>

        <p className="text-lg text-accent-green xs:text-xl">
          {">"} Front-end developer
        </p>
      </div>

      <div className="mb-9">
        <p className="text-sm text-secondary-gray">
          {"// find my profile on Github:"}
        </p>

        <div className="text-sm mt-4">
          <span className="text-secondary-purple">const</span>{" "}
          <span className="text-secondary-green">githubLink</span>{" "}
          <span className="text-secondary-white">=</span>{" "}
          <span className="text-accent-orange break-all">
            “https://github.com/example/url”
          </span>
        </div>
      </div>
    </div>
  )
}
