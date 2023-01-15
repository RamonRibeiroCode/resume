import React, { useCallback, useRef } from "react"

import Canvas from "../Canvas"
import { draw } from "../../../helpers/home/snakeGame"
import useSnakeGame, { GameState } from "../../../hooks/useSnakeGame"
import Icon from "../../ui/Icon"

function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const {
    snakeBody,
    foodPosition,
    resetGameState,
    startGame,
    gameState,
    fruitsToWin,
    score,
  } = useSnakeGame({
    canvasWidth: 240,
    canvasHeight: 400,
    canvasRef,
  })

  const drawGame = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      draw({ ctx, snakeBody, foodPosition })
    },
    [foodPosition, snakeBody]
  )

  const isGameEnded =
    gameState === GameState.GAME_OVER || gameState === GameState.WON

  return (
    <div className="hidden snake-game relative ml-20 z-10 p-9 rounded-lg game-backdrop border border-[#0C1616] xl:flex 2xl:ml-32">
      <div>
        <div className="snake-game-screw absolute flex justify-center items-center w-4 h-4 rounded-full top-3 left-3">
          <Icon name="GameX" width={7} height={6} />
        </div>
        <div className="snake-game-screw absolute flex justify-center items-center w-4 h-4 rounded-full top-3 right-3">
          <Icon name="GameX" width={7} height={6} />
        </div>
        <div className="snake-game-screw absolute flex justify-center items-center w-4 h-4 rounded-full bottom-3 left-3">
          <Icon name="GameX" width={7} height={6} />
        </div>
        <div className="snake-game-screw absolute flex justify-center items-center w-4 h-4 rounded-full bottom-3 right-3">
          <Icon name="GameX" width={7} height={6} />
        </div>
      </div>
      <div className="relative">
        <Canvas width={240} height={400} ref={canvasRef} draw={drawGame} />

        {isGameEnded && (
          <>
            <div className="flex justify-center items-center absolute bottom-16 left-0 w-full h-12 bg-[#011627d9] shadow-game">
              <span className="text-2xl text-secondary-green">
                {gameState === GameState.WON ? "WELL DONE!" : "GAME OVER!"}
              </span>
            </div>

            <button
              className={`flex justify-center w-full absolute left-0 bottom-10 text-sm ${
                gameState === GameState.WON
                  ? "text-secondary-white"
                  : "text-secondary-gray"
              }`}
              onClick={() => {
                resetGameState()
                startGame()
              }}
            >
              {gameState === GameState.WON ? "play-again" : "start-again"}
            </button>
          </>
        )}

        {gameState === GameState.PAUSED && (
          <button
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max bg-accent-orange text-primary-black rounded-lg py-[10px] px-[14px]"
            onClick={startGame}
          >
            start-game
          </button>
        )}
      </div>
      <div className="ml-6">
        <div className="snake-game-arrows p-4 rounded-lg">
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
    </div>
  )
}

export default Game
