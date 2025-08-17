// Theme constants and configuration for cyberpunk neon style

export const COLORS = {
  neon: {
    cyan: '#00ffff',
    magenta: '#ff00ff',
    green: '#00ff41',
    pink: '#ff0080',
    blue: '#0080ff',
    purple: '#8000ff',
    yellow: '#ffff00',
    orange: '#ff8000'
  },
  dark: {
    bg: '#0a0a0a',
    surface: '#1a1a1a',
    card: '#2a2a2a',
    border: '#3a3a3a'
  },
  text: {
    primary: '#ffffff',
    secondary: '#cccccc',
    muted: '#888888'
  }
};

export const ANIMATIONS = {
  glow: {
    duration: '2s',
    timing: 'ease-in-out',
    iteration: 'infinite',
    direction: 'alternate'
  },
  flicker: {
    duration: '0.1s',
    timing: 'linear',
    iteration: 'infinite'
  },
  pulse: {
    duration: '1.5s',
    timing: 'ease-in-out',
    iteration: 'infinite'
  },
  scan: {
    duration: '3s',
    timing: 'linear',
    iteration: 'infinite'
  }
};

export const SHADOWS = {
  neon: {
    cyan: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff',
    magenta: '0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff',
    green: '0 0 20px #00ff41, 0 0 40px #00ff41, 0 0 60px #00ff41',
    pink: '0 0 20px #ff0080, 0 0 40px #ff0080, 0 0 60px #ff0080',
    blue: '0 0 20px #0080ff, 0 0 40px #0080ff, 0 0 60px #0080ff',
    purple: '0 0 20px #8000ff, 0 0 40px #8000ff, 0 0 60px #8000ff'
  },
  text: {
    small: '0 0 10px currentColor',
    medium: '0 0 20px currentColor',
    large: '0 0 30px currentColor',
    xlarge: '0 0 40px currentColor'
  }
};

export const TYPOGRAPHY = {
  fonts: {
    mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Orbitron', 'Exo 2', 'Rajdhani', 'sans-serif']
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem'
  }
};

export const GRADIENTS = {
  neon: {
    primary: 'linear-gradient(45deg, #00ffff, #ff00ff)',
    secondary: 'linear-gradient(135deg, #ff0080, #0080ff)',
    accent: 'linear-gradient(90deg, #00ff41, #ffff00)',
    rainbow: 'linear-gradient(90deg, #ff0080, #ff8000, #ffff00, #00ff41, #00ffff, #0080ff, #8000ff)'
  },
  dark: {
    surface: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
    card: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
    border: 'linear-gradient(90deg, #3a3a3a, #4a4a4a)'
  }
};

export const SPACING = {
  grid: '8px',
  section: '4rem',
  component: '2rem',
  element: '1rem'
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const Z_INDEX = {
  base: 1,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
  toast: 70
};

export const THEME_CONFIG = {
  defaultColor: 'cyan',
  defaultAnimation: 'glow',
  enableParticles: true,
  enableScanlines: true,
  enableFlicker: false,
  glowIntensity: 'medium'
};

export const NEON_VARIANTS = {
  text: {
    default: 'text-white',
    glow: 'text-white drop-shadow-[0_0_10px_currentColor]',
    intense: 'text-white drop-shadow-[0_0_20px_currentColor]'
  },
  border: {
    default: 'border border-cyan-400',
    glow: 'border border-cyan-400 shadow-[0_0_10px_#00ffff]',
    intense: 'border border-cyan-400 shadow-[0_0_20px_#00ffff]'
  },
  background: {
    dark: 'bg-black',
    surface: 'bg-gray-900',
    card: 'bg-gray-800',
    transparent: 'bg-black/50'
  }
};

export const CYBERPUNK_PATTERNS = {
  grid: 'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M0 0h40v40H0z"/%3E%3C/g%3E%3C/svg%3E',
  circuit: 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300ffff" fill-opacity="0.1"%3E%3Cpath d="M30 0v60M0 30h60"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
  hexagon: 'data:image/svg+xml,%3Csvg width="56" height="100" viewBox="0 0 56 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M28 66L0 50V16l28-16 28 16v34z" fill="none" stroke="%23ff00ff" stroke-opacity="0.1" stroke-width="1"/%3E%3C/svg%3E'
};

export const SOUND_EFFECTS = {
  hover: '/sounds/hover.mp3',
  click: '/sounds/click.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3'
};

export const PARTICLE_CONFIG = {
  count: 50,
  speed: 1,
  size: {
    min: 1,
    max: 3
  },
  opacity: {
    min: 0.1,
    max: 0.8
  },
  colors: ['#00ffff', '#ff00ff', '#00ff41', '#ff0080']
};