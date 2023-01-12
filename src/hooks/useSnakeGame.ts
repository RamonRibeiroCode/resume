import React, { useEffect, useRef, useState } from "react"
import {
  SEGMENT_SIZE,
  randomPositionOnGrid,
  createSnakeMovement,
  hasSnakeEatenItself,
  willSnakeHitTheFood,
} from "../helpers/home/snakeGame"
import useInterval from "./useInterval"

export enum GameState {
  RUNNING,
  GAME_OVER,
  PAUSED,
  WON,
}

export interface Position {
  x: number
  y: number
}

export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const MOVEMENT_SPEED = 150

interface UseGameLogicProps {
  canvasWidth?: number
  canvasHeight?: number
  canvasRef: React.RefObject<HTMLCanvasElement>
}

const initialSnakeBody = [
  {
    x: 110,
    y: 140,
  },
  {
    x: 110,
    y: 130,
  },
  {
    x: 110,
    y: 120,
  },
  {
    x: 110,
    y: 110,
  },
  {
    x: 110,
    y: 100,
  },
]

const initialFoodPosition = {
  x: 10,
  y: 10,
}

const initialBodyLenght = initialSnakeBody.length

const fruitsToWin = 10

const useGameLogic = ({ canvasHeight, canvasWidth }: UseGameLogicProps) => {
  const [gameState, setGameState] = useState<GameState>(GameState.PAUSED)

  const [snakeBody, setSnakeBody] = useState<Position[]>(initialSnakeBody)
  const [foodPosition, setFoodPosition] =
    useState<Position>(initialFoodPosition)

  const [direction, _setDirection] = useState<Direction | undefined>()
  const directionRef = useRef(direction)
  const setDirection = (data: Direction | undefined) => {
    directionRef.current = data
    _setDirection(data)
  }

  const { moveDown, moveUp, moveLeft, moveRight } = createSnakeMovement()

  const snakeHeadPosition = snakeBody[snakeBody.length - 1]
  const score = snakeBody.length - initialBodyLenght

  const resetGameState = () => {
    setDirection(undefined)
    setFoodPosition(initialFoodPosition)

    setSnakeBody(initialSnakeBody)
  }

  const startGame = () => {
    document.addEventListener("keydown", onKeyDownHandler)

    setGameState(GameState.RUNNING)
  }

  const onKeyDownHandler = (event: KeyboardEvent) => {
    switch (event.code) {
      case "KeyS":
        if (directionRef.current !== Direction.UP) {
          setDirection(Direction.DOWN)
        }
        break
      case "ArrowDown":
        if (directionRef.current !== Direction.UP) {
          setDirection(Direction.DOWN)
        }
        break
      case "KeyW":
        if (directionRef.current !== Direction.DOWN) {
          setDirection(Direction.UP)
        }
        break
      case "ArrowUp":
        if (directionRef.current !== Direction.DOWN) {
          setDirection(Direction.UP)
        }
        break
      case "KeyD":
        if (directionRef.current !== Direction.LEFT) {
          setDirection(Direction.RIGHT)
        }
        break
      case "ArrowRight":
        if (directionRef.current !== Direction.LEFT) {
          setDirection(Direction.RIGHT)
        }
        break
      case "KeyA":
        if (directionRef.current !== Direction.RIGHT) {
          setDirection(Direction.LEFT)
        }
        break
      case "ArrowLeft":
        if (directionRef.current !== Direction.RIGHT) {
          setDirection(Direction.LEFT)
        }
        break
    }
  }

  const moveSnake = () => {
    let snakeBodyAfterMovement: Position[] | undefined

    switch (directionRef.current) {
      case Direction.UP:
        if (snakeHeadPosition.y > 0) {
          snakeBodyAfterMovement = moveUp(snakeBody)
        } else {
          return setGameState(GameState.GAME_OVER)
        }

        break
      case Direction.DOWN:
        if (canvasHeight && snakeHeadPosition.y < canvasHeight - SEGMENT_SIZE) {
          snakeBodyAfterMovement = moveDown(snakeBody)
        } else {
          return setGameState(GameState.GAME_OVER)
        }

        break
      case Direction.LEFT:
        if (snakeHeadPosition.x > 0) {
          snakeBodyAfterMovement = moveLeft(snakeBody)
        } else {
          return setGameState(GameState.GAME_OVER)
        }

        break
      case Direction.RIGHT:
        if (canvasWidth && snakeHeadPosition.x < canvasWidth - SEGMENT_SIZE) {
          snakeBodyAfterMovement = moveRight(snakeBody)
        } else {
          return setGameState(GameState.GAME_OVER)
        }

        break
    }

    // snake eats itself
    if (snakeBodyAfterMovement) {
      const isGameOver = hasSnakeEatenItself(snakeBodyAfterMovement)

      if (isGameOver) {
        setGameState(GameState.GAME_OVER)
      }
    }

    if (
      direction !== undefined &&
      foodPosition &&
      willSnakeHitTheFood({
        foodPosition,
        snakeHeadPosition,
        direction,
      })
    ) {
      setSnakeBody([
        ...snakeBodyAfterMovement!,
        { x: foodPosition.x, y: foodPosition.y },
      ])

      setFoodPosition({
        x: randomPositionOnGrid({
          threshold: canvasWidth!,
        }),
        y: randomPositionOnGrid({ threshold: canvasHeight! }),
      })
    } else if (snakeBodyAfterMovement) {
      setSnakeBody(snakeBodyAfterMovement)
    }
  }

  useEffect(() => {
    if (score === fruitsToWin) {
      setGameState(GameState.WON)
    }
  }, [score, snakeBody.length])

  useInterval(
    moveSnake,
    gameState === GameState.RUNNING ? MOVEMENT_SPEED : null
  )

  return {
    snakeBody,
    onKeyDownHandler,
    foodPosition,
    resetGameState,
    startGame,
    gameState,
    score,
    fruitsToWin,
  }
}

export default useGameLogic
