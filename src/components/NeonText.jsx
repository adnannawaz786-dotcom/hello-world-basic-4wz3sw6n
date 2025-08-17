import React from 'react'
import { cn } from '../lib/utils'

const NeonText = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  glow = true,
  flicker = false,
  ...props 
}) => {
  const variants = {
    primary: 'text-cyan-400',
    secondary: 'text-pink-400',
    accent: 'text-purple-400',
    warning: 'text-yellow-400',
    success: 'text-green-400',
    danger: 'text-red-400'
  }

  const sizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl',
    '2xl': 'text-6xl'
  }

  const glowStyles = {
    primary: 'drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] shadow-cyan-400/50',
    secondary: 'drop-shadow-[0_0_10px_rgba(244,114,182,0.8)] shadow-pink-400/50',
    accent: 'drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] shadow-purple-400/50',
    warning: 'drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] shadow-yellow-400/50',
    success: 'drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] shadow-green-400/50',
    danger: 'drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] shadow-red-400/50'
  }

  const baseClasses = cn(
    'font-mono font-bold tracking-wider select-none',
    'transition-all duration-300 ease-in-out',
    variants[variant],
    sizes[size],
    glow && glowStyles[variant],
    flicker && 'animate-pulse',
    className
  )

  return (
    <span 
      className={baseClasses}
      style={{
        textShadow: glow ? `0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor` : 'none'
      }}
      {...props}
    >
      {children}
    </span>
  )
}

export default NeonText