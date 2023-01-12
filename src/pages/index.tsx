import Image from "next/image"

import blurMobile from "../assets/imgs/home/blur-mobile.png"
import blurDesktop from "../assets/imgs/home/blur-desktop.png"
import SnakeGame from "../components/home/SnakeGame"

function Home() {
  return (
    <>
      <div className="flex px-4 flex-1 z-10 xs:px-7 xl:justify-center">
        <div className="flex flex-col justify-between xl:justify-center z-10">
          <div className="mt-24 xl:mb-20 xl:mt-0">
            <h1 className="text-base text-secondary-off-white xs:text-lg">
              Hi all. I am
            </h1>
            <h2 className="text-5xl text-secondary-off-white leading-none -ml-1 my-2 xs:text-heading">
              Ramon Ribeiro
            </h2>

            <p className="text-lg text-accent-green xs:text-xl xl:text-3xl xl:text-secondary-purple">
              {">"} Front-end developer
            </p>
          </div>

          <div className="mb-9">
            <p className="hidden text-sm text-secondary-gray mb-4 xl:block">
              {"// complete the game to continue"}
            </p>

            <p className="text-sm text-secondary-gray">
              {"// find my profile on Github:"}
            </p>

            <div className="text-sm mt-4">
              <span className="text-secondary-purple">const</span>{" "}
              <span className="text-secondary-green">githubLink</span>{" "}
              <span className="text-secondary-white">=</span>{" "}
              <span className="text-accent-orange break-all">
                “https://github.com/RamonRibeiroCode”
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center relative z-0">
          <Image
            className="hidden fixed right-0 xl:block"
            src={blurDesktop}
            alt="Background Blur on Desktop"
            draggable={false}
          />

          <SnakeGame />
        </div>
      </div>

      <Image
        src={blurMobile}
        className="w-full fixed left-0 top-0 xl:hidden"
        alt="Background Blur on Mobile"
        draggable={false}
      />
    </>
  )
}

export default Home
