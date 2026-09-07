import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string
  pulse: number
  pulseSpeed: number
}

const COLORS = ['rgba(0,251,251,', 'rgba(254,0,254,', 'rgba(42,229,0,']

function buildNodes(width: number, height: number, count: number): Node[] {
  const nodes: Node[] = []
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 1 + Math.random() * 2,
      color: COLORS[i % COLORS.length],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.4 + Math.random() * 1.2,
    })
  }
  return nodes
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let nodes: Node[] = []
    let raf = 0
    let running = false

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const small = width < 768
      nodes = buildNodes(width, height, small ? 40 : 70)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const connectDist = 140
      const connectDistSq = connectDist * connectDist

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < -20) a.x = width + 20
        if (a.x > width + 20) a.x = -20
        if (a.y < -20) a.y = height + 20
        if (a.y > height + 20) a.y = -20

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distSq = dx * dx + dy * dy
          if (distSq < connectDistSq) {
            const alpha = (1 - Math.sqrt(distSq) / connectDist) * 0.16
            ctx.strokeStyle = `${a.color}${alpha.toFixed(3)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        n.pulse += n.pulseSpeed * 0.02
        const glow = 0.45 + Math.sin(n.pulse) * 0.25
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `${n.color}${glow.toFixed(3)})`
        ctx.fill()
      }
    }

    const loop = () => {
      draw()
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running) return
      running = true
      if (prefersReducedMotion) {
        draw()
      } else {
        raf = requestAnimationFrame(loop)
      }
    }

    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    resize()
    start()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}