import { useEffect, useState, useRef, useCallback } from "react"

const fruitsToWin = 10

function useSnake() {
  const [dim, setDim] = useState(0)
  const [chunk, setChunk] = useState(0)
  const [direction, setDirection] = useState("right")
  const [fruit, setFruit] = useState(26)
  const [score, setScore] = useState(0)

  const [playing, setPlaying] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const [snake, setSnake] = useState<any>([
    {
      direction: "right",
      part: [186, 185, 184, 183],
    },
  ])

  const speedRef = useRef(75)

  const width = window.innerWidth

  const reset = () => {
    speedRef.current = 100

    setScore(0)
    setDirection("right")

    setSnake([
      {
        direction: "right",
        part: [186, 185, 184, 183],
      },
    ])

    setGameOver(false)
    setWon(false)
    setPlaying(true)
  }

  const getPieces = () => {
    let arr = []

    for (let i = 0; i < 400; i++) {
      let addToArr = false
      let j = 0

      while (j < snake.length) {
        if (snake[j].part.indexOf(i) >= 0) {
          addToArr = true

          break
        }

        j++
      }

      addToArr
        ? arr.push("bang")
        : i === fruit
        ? arr.push("fruit")
        : arr.push("")
    }

    return arr
  }

  // handle direction changes
  const turn = useCallback(
    (dir: string, opp: string) => {
      let tempSnake: any = [...snake]

      if (direction !== opp && direction !== dir) {
        setDirection(dir)
        tempSnake.unshift({
          direction: dir,
          part: [],
        })
      }
      setSnake(tempSnake)
    },
    [snake, direction]
  )

  useEffect(() => {
    // determine relative dimensions of game portal
    setDim(240)
    setChunk(dim / 20)

    // score and get longer after eating
    if (snake[0].part[0] === fruit) {
      setScore((prevScore) => prevScore + 1)

      let sneak = [...snake]
      let firstSection = sneak[0]

      if (firstSection.direction === "up") {
        let y = firstSection.part[0] - 20

        if (y < 0) {
          firstSection.part.unshift(y + 400)
        } else {
          firstSection.part.unshift(y)
        }
      } else if (firstSection.direction === "right") {
        let y = firstSection.part[0] + 1

        if (y % 20 === 0) {
          firstSection.part.unshift(y + -20)
        } else {
          firstSection.part.unshift(y)
        }
      } else if (firstSection.direction === "down") {
        let y = firstSection.part[0] + 20

        if (y >= 400) {
          firstSection.part.unshift(y - 400)
        } else {
          firstSection.part.unshift(y)
        }
      } else if (firstSection.direction === "left") {
        let y = firstSection.part[0] - 1

        if (y % 20 === 19) {
          firstSection.part.unshift(y + 20)
        } else {
          firstSection.part.unshift(y)
        }
      }

      speedRef.current = speedRef.current - 2
      setSnake(sneak)
      setFruit(Math.floor(Math.random() * Math.floor(400)))
    }

    // gameover if you eat your tail
    let totalArr: any[] = []

    for (let k = 0; k < snake.length; k++) {
      totalArr = [...totalArr, ...snake[k].part]
    }

    let head = snake[0].part[0]

    if (totalArr.filter((item) => item === head).length >= 2) {
      setGameOver(true)
      setPlaying(false)
    }

    if (playing) {
      // if GAMEOVER pause events

      // listen for directions and update snake instructions accordingly
      const handleKeydown = (e: any) => {
        switch (e.code) {
          case "ArrowUp":
            e.preventDefault()
            turn("up", "down")

            break
          case "ArrowRight":
            e.preventDefault()
            turn("right", "left")
            break
          case "ArrowDown":
            e.preventDefault()
            turn("down", "up")
            break
          case "ArrowLeft":
            e.preventDefault()
            turn("left", "right")
            break
        }
      }

      document.addEventListener("keydown", handleKeydown)

      // Event interval
      const interval = setInterval(() => {
        // Handle snake piece movement
        let dupSneak: any = [...snake]

        for (let i = snake.length - 1; i > 0; i--) {
          // Increment through current snake and reduce to head direction
          if (dupSneak[i].part.length !== 0) {
            let next = dupSneak[i - 1]
            let chunk = dupSneak[i].part.shift()
            next.part.push(chunk)
          } else {
            dupSneak.pop()
          }
        }

        // Perform movement changes to each chunk
        let sneak: any[] = dupSneak

        sneak.forEach((section: any) => {
          if (section.direction === "right") {
            section.part.map((x: number, i: number) => {
              let y = x + 1
              if (y % 20 === 0) {
                return (section.part[i] = y - 20)
              } else {
                return (section.part[i] = y)
              }
            })
          } else if (section.direction === "up") {
            section.part.forEach((x: number, i: number) => {
              let y = x - 20
              if (y < 0) {
                return (section.part[i] = y + 400)
              } else {
                return (section.part[i] = y)
              }
            })
          } else if (section.direction === "left") {
            section.part.forEach((x: number, i: number) => {
              let y = x - 1
              if (y % 20 === 19) {
                return (section.part[i] = y + 20)
              } else {
                return (section.part[i] = y)
              }
            })
          } else if (section.direction === "down") {
            section.part.forEach((x: number, i: number) => {
              let y = x + 20
              if (y >= 400) {
                return (section.part[i] = y - 400)
              } else {
                return (section.part[i] = y)
              }
            })
          }
          return ""
        })

        setSnake(sneak)
      }, speedRef.current)

      // Remove interval and listeners
      return () => {
        clearInterval(interval)
        document.removeEventListener("keydown", handleKeydown)
      }
    }
  }, [turn, width, dim, chunk, snake, direction, score, fruit, playing])

  useEffect(() => {
    if (score >= fruitsToWin) {
      setWon(true)
      setPlaying(false)
    }
  }, [score])

  const pieces = getPieces()

  return {
    dim,
    pieces,
    gameOver,
    reset,
    playing,
    setPlaying,
    score,
    won,
    fruitsToWin,
  }
}

export default useSnake
