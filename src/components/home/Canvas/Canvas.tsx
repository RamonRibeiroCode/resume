import React, { ForwardedRef, forwardRef, useEffect } from "react"

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & {
  draw: (context: CanvasRenderingContext2D) => void
  width: number
  height: number
}

function Canvas(
  { draw, ...props }: CanvasProps,
  canvasRef: ForwardedRef<unknown>
) {
  useEffect(() => {
    if (!canvasRef) {
      return
    }

    const canvas = (canvasRef as React.RefObject<HTMLCanvasElement>).current

    if (!canvas) {
      return
    }

    const context = canvas.getContext("2d")
    if (!context) {
      return
    }

    draw(context)
    return () => context.clearRect(0, 0, window.innerWidth, 400)
  }, [draw, canvasRef])

  if (!canvasRef) {
    return null
  }

  return (
    <canvas
      className="bg-[#011627] rounded-lg"
      ref={canvasRef as any}
      {...props}
    />
  )
}

const canvasWitRef = forwardRef(Canvas)

export default canvasWitRef
