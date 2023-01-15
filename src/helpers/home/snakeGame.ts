import { Position, Direction } from "../../hooks/useSnakeGame"

interface DrawArgs {
  ctx: CanvasRenderingContext2D
  snakeBody: Position[]
  foodPosition?: Position
}

export const SEGMENT_SIZE = 10

export const draw = ({ ctx, snakeBody, foodPosition }: DrawArgs) => {
  ctx.fillStyle = "#43D9AD"

  if (foodPosition) {
    ctx.stroke()
    ctx.fillRect(foodPosition?.x, foodPosition?.y, SEGMENT_SIZE, SEGMENT_SIZE)
  }

  snakeBody.forEach((segment, index) => {
    const snakeHead = index !== snakeBody.length - 1

    if (snakeHead) {
      ctx.fillStyle = "#43D9AD"
    } else {
      ctx.fillStyle = "#43d9ad33"
    }

    ctx.fillRect(segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE)
  })
}

interface RandomPositionOnGridArgs {
  gridSize?: number
  threshold: number
}

export const randomPositionOnGrid = ({
  gridSize = SEGMENT_SIZE,
  threshold,
}: RandomPositionOnGridArgs) =>
  Math.floor(Math.random() * (threshold / gridSize)) * gridSize

export const createSnakeMovement = (gridSize = SEGMENT_SIZE) => ({
  moveRight: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPos = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPos, x: headPos.x + gridSize }]
  },
  moveLeft: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPos = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPos, x: headPos.x - gridSize }]
  },
  moveDown: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPos = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPos, y: headPos.y + gridSize }]
  },
  moveUp: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPos = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPos, y: headPos.y - gridSize }]
  },
})

interface WillSnakeHitTheFoodArgs {
  foodPosition: Position
  snakeHeadPosition: Position
  direction: Direction
}

export const willSnakeHitTheFood = ({
  foodPosition,
  snakeHeadPosition,
  direction,
}: WillSnakeHitTheFoodArgs) => {
  switch (direction) {
    case Direction.UP:
      return (
        foodPosition.x === snakeHeadPosition.x &&
        snakeHeadPosition.y - SEGMENT_SIZE === foodPosition.y
      )
    case Direction.DOWN:
      return (
        foodPosition.x === snakeHeadPosition.x &&
        snakeHeadPosition.y + SEGMENT_SIZE === foodPosition.y
      )
    case Direction.LEFT:
      return (
        foodPosition.y === snakeHeadPosition.y &&
        snakeHeadPosition.x - SEGMENT_SIZE === foodPosition.x
      )

    case Direction.RIGHT:
      return (
        foodPosition.y === snakeHeadPosition.y &&
        snakeHeadPosition.x + SEGMENT_SIZE === foodPosition.x
      )
  }
}

export const hasSnakeEatenItself = (snakeBody: Position[]) => {
  if (snakeBody.length <= 1) {
    return false
  }

  const head = snakeBody[snakeBody.length - 1]
  const body = snakeBody.slice(0, snakeBody.length - 1)

  return body.some((segment) => segment.x === head.x && segment.y === head.y)
}
