import React, { useEffect, useRef, useState } from "react"

import Canvas from "../Canvas"

import { draw } from "../../../helpers/home/snakeGame"
import useSnakeGame from "../../../hooks/useSnakeGame"

export enum GameState {
  RUNNING,
  GAME_OVER,
  PAUSED,
}

function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { snakeBody, foodPosition, resetGameState, startGame, gameState } =
    useSnakeGame({
      canvasWidth: 240,
      canvasHeight: 400,
      canvasRef,
    })

  const drawGame = (ctx: CanvasRenderingContext2D) => {
    draw({ ctx, snakeBody, foodPosition })
  }

  return (
    <div>
      <Canvas width={240} height={400} ref={canvasRef} draw={drawGame} />

      {gameState === GameState.GAME_OVER && (
        <button
          onClick={() => {
            resetGameState()
            startGame()
          }}
        >
          Play Again
        </button>
      )}

      {gameState === GameState.PAUSED && (
        <button onClick={startGame}>play</button>
      )}

      <div>{`Your score: ${(snakeBody.length - 1) * 10}`}</div>
    </div>
  )
}

export default Game
