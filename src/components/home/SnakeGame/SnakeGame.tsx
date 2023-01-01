import React from "react"
import useSnake from "../../../hooks/useSnake"
import Icon from "../../ui/Icon"

function SnakeGame() {
  const {
    dim,
    pieces,
    gameOver,
    reset,
    playing,
    setPlaying,
    won,
    score,
    fruitsToWin,
  } = useSnake()

  return (
    <>
      <div className="snake-container relative" id="snake-container">
        <div
          className="game-border rounded-lg"
          style={{
            width: dim,
            height: dim,
            backgroundColor: "rgba(1, 22, 39, 0.80)",
          }}
        >
          {pieces.map((piece, i) => {
            if (piece === "fruit") {
              return (
                <div
                  key={"piece" + i}
                  className="flex justify-center items-center w-3 h-3 rounded-full bg-[#43d9ad33] relative"
                >
                  <div className="w-[6px] h-[6px] bg-[#43D9AD] rounded-full" />

                  <div className="absolute w-[18px] h-[18px] bg-[#43d9ad1a] rounded-full" />
                </div>
              )
            }

            if (piece === "bang") {
              return <div key={"piece" + i} className="w-3 h-3 bg-[#43D9AD]" />
            }

            return <div key={"piece" + i} className="w-3 h-3" />
          })}
        </div>

        {!playing && !gameOver && !won && (
          <button
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max bg-accent-orange text-primary-black rounded-lg py-[10px] px-[14px]"
            onClick={() => setPlaying(true)}
          >
            start-game
          </button>
        )}

        {(won || gameOver) && (
          <>
            <div className="flex justify-center items-center absolute bottom-16 left-0 w-full h-12 bg-[#011627d9] shadow-game">
              <span className="text-2xl text-secondary-green">
                {won ? "WELL DONE!" : "GAME OVER!"}
              </span>
            </div>

            <button
              className={`flex justify-center w-full absolute left-0 bottom-4 text-sm ${
                won ? "text-secondary-white" : "text-secondary-gray"
              }`}
              onClick={reset}
            >
              {won ? "play-again" : "start-again"}
            </button>
          </>
        )}
      </div>

      <div className="ml-6">
        <div className="game-arrows-bg p-4 rounded-lg">
          <div className="mb-4">
            <p className="text-sm text-secondary-white">{"// use keyboard"}</p>
            <p className="text-sm text-secondary-white">
              {"// arrows to play"}
            </p>
          </div>

          <div>
            <div className="flex justify-center mb-1">
              <div className="flex justify-center items-center w-12 h-7 rounded-lg border border-line-gray bg-primary-black">
                <Icon name="ArrowUp" width={9} height={7} />
              </div>
            </div>

            <div className="flex">
              <div className="flex justify-center items-center w-12 h-7 rounded-lg border border-line-gray bg-primary-black mr-1">
                <Icon name="ArrowLeft" width={7} height={10} />
              </div>
              <div className="flex justify-center items-center w-12 h-7 rounded-lg border border-line-gray bg-primary-black mr-1">
                <Icon name="ArrowDown" width={9} height={7} />
              </div>
              <div className="flex justify-center items-center w-12 h-7 rounded-lg border border-line-gray bg-primary-black">
                <Icon name="ArrowRight" width={7} height={10} />
              </div>
            </div>
          </div>
        </div>

        <div className="pl-4 mt-5">
          <p className="text-sm text-secondary-white">{"// food left"}</p>

          <ul className="grid grid-cols-5 mt-3">
            {Array.from(Array(fruitsToWin).keys())
              .reverse()
              .map((value) => (
                <li
                  className={`m-2 ml-0 ${score > value ? "opacity-30" : ""}`}
                  key={String(value)}
                >
                  <div className="flex justify-center items-center w-[14px] h-[14px] rounded-full bg-[#43d9ad33] relative">
                    <div className="w-2 h-2 bg-[#43D9AD] rounded-full" />

                    <div className="absolute w-5 h-5 bg-[#43d9ad1a] rounded-full" />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SnakeGame
