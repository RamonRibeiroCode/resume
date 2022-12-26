import Image from "next/image"

import blurMobile from "../assets/imgs/home/blur-mobile.png"
import blurDesktop from "../assets/imgs/home/blur-desktop.png"
import snakeGame from "../assets/imgs/home/snake-game.png"

export default function Home() {
  return (
    <>
      <div className="flex px-4 flex-1 z-10 xs:px-7 xl:justify-center">
        <div className="flex flex-col justify-between xl:justify-center">
          <div className="mt-24 xl:mb-20">
            <h1 className="text-base text-secondary-off-white xs:text-lg">
              Hi all. I am
            </h1>
            <h2 className="text-5xl text-secondary-off-white leading-none -ml-1 my-2 xs:text-heading">
              Ramon Ribeiro
            </h2>

            <p className="text-lg text-accent-green xs:text-xl xl:text-3xl xl:text-gradient-purple">
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

        <div className="flex items-center relative">
          <Image
            className="hidden fixed right-0 xl:block"
            src={blurDesktop}
            alt="Background Blur on Desktop"
            draggable={false}
          />

          <Image
            className="hidden ml-20 object-contain z-10 xl:block 2xl:ml-32"
            src={snakeGame}
            alt="Snake Game"
            draggable={false}
          />
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
