import { useEffect, useRef } from 'react'
import styles from './AnimatedBackground.module.css'

type AnimatedBackgroundProps = {
  accent: string
}

type Particle = {
  x: number
  y: number
  radius: number
  velocityX: number
  velocityY: number
}

const particleCount = 200
const connectionDistance = 200

function createParticles(width: number, height: number): Particle[] {
  return Array.from({ length: particleCount }, (_, index) => ({
    x: (index * 97) % width,
    y: (index * 173) % height,
    radius: 1.2 + (index % 3) * 0.45,
    velocityX: ((index % 5) - 2) * 0.08,
    velocityY: ((index % 7) - 3) * 0.06,
  }))
}

function drawScene(
  context: CanvasRenderingContext2D,
  particles: Particle[],
  width: number,
  height: number,
  accent: string,
) {
  context.clearRect(0, 0, width, height)
  context.fillStyle = accent

  particles.forEach((particle) => {
    particle.x += particle.velocityX
    particle.y += particle.velocityY

    if (particle.x < -10) particle.x = width + 10
    if (particle.x > width + 10) particle.x = -10
    if (particle.y < -10) particle.y = height + 10
    if (particle.y > height + 10) particle.y = -10

    context.globalAlpha = 0.5
    context.beginPath()
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    context.fill()
  })

  particles.forEach((particle, particleIndex) => {
    particles.slice(particleIndex + 1).forEach((otherParticle) => {
      const distanceX = particle.x - otherParticle.x
      const distanceY = particle.y - otherParticle.y
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

      if (distance < connectionDistance) {
        context.globalAlpha = (1 - distance / connectionDistance) * 0.11
        context.strokeStyle = accent
        context.lineWidth = 1
        context.beginPath()
        context.moveTo(particle.x, particle.y)
        context.lineTo(otherParticle.x, otherParticle.y)
        context.stroke()
      }
    })
  })

  context.globalAlpha = 1
}

function AnimatedBackground({ accent }: AnimatedBackgroundProps) {
  const canvasReference = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasReference.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrame = 0
    let particles: Particle[] = []

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio, 2)
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      particles = createParticles(width, height)

      if (reducedMotion) {
        drawScene(context, particles, width, height, accent)
      }
    }

    const animate = () => {
      drawScene(context, particles, window.innerWidth, window.innerHeight, accent)
      animationFrame = window.requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    if (!reducedMotion) {
      animationFrame = window.requestAnimationFrame(animate)
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [accent])

  return <canvas className={styles.canvas} ref={canvasReference} aria-hidden="true" />
}

export default AnimatedBackground
