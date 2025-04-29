"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = 0
    let mouseY = 0
    let isMouseMoving = false
    let mouseTimeout: NodeJS.Timeout
    let gridPoints: { x: number; y: number }[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
      createGrid()
    }

    const createGrid = () => {
      gridPoints = []
      const gridSize = 50
      const cols = Math.floor(canvas.width / gridSize)
      const rows = Math.floor(canvas.height / gridSize)

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          gridPoints.push({
            x: i * gridSize,
            y: j * gridSize,
          })
        }
      }
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 12), 100)

      // Cybersecurity-themed colors with teal accent
      const colors = ["#00BFA6", "#074d77", "#0D1B2A", "#E0E1DD"]

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseMoving = true

      // Reset the timeout on each mouse move
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false
      }, 2000)
    }

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(0, 191, 166, 0.05)"
      ctx.lineWidth = 0.5

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw grid points
      gridPoints.forEach((point) => {
        const distance = Math.sqrt(Math.pow(mouseX - point.x, 2) + Math.pow(mouseY - point.y, 2))
        const size = isMouseMoving && distance < 150 ? 2 - distance / 150 : 1

        ctx.fillStyle = "rgba(0, 191, 166, 0.1)"
        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid first
      drawGrid()

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Add subtle mouse interaction
        if (isMouseMoving) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const angle = Math.atan2(dy, dx)
            const repelForce = 0.2
            particle.speedX -= Math.cos(angle) * repelForce
            particle.speedY -= Math.sin(angle) * repelForce
          }
        }

        // Apply some friction to prevent excessive speed
        particle.speedX *= 0.99
        particle.speedY *= 0.99

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i === j) return

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `${particle.color}${Math.floor(0.1 * (1 - distance / 120) * 255)
              .toString(16)
              .padStart(2, "0")}`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    resizeCanvas()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      clearTimeout(mouseTimeout)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />
}
