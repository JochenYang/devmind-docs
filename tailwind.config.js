/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      // Swiss Design 颜色系统 (95% 黑白灰 + 5% 红色强调)
      colors: {
        // 主色调 (Achromatic Scale)
        'swiss': {
          'black': '#000000',
          'charcoal': '#1A1A1A',
          'text': {
            'primary': '#333333',
            'secondary': '#666666',
            'tertiary': '#999999',
          },
          'border': '#CCCCCC',
          'surface': {
            'subtle': '#E5E5E5',
            'base': '#F5F5F5',
          },
          'background': '#FFFFFF',
        },
        // 强调色 (Accent Color - 5%使用)
        'accent': {
          'base': '#DC143C',
          'dark': '#A01028',
        },
        // 暗色主题
        'dark': {
          'bg': {
            'primary': '#0A0A0A',
            'surface': '#1A1A1A',
            'elevated': '#2A2A2A',
          },
          'text': {
            'primary': '#FFFFFF',
            'secondary': '#CCCCCC',
            'tertiary': '#999999',
          },
          'border': '#333333',
        },
        // 保留原有shadcn/ui颜色以兼容性
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#DC143C',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          foreground: '#333333',
        },
        accent: {
          DEFAULT: '#DC143C',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#DC143C',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F5F5F5',
          foreground: '#666666',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#333333',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#333333',
        },
      },
      
      // 字体系统 (Helvetica / Inter)
      fontFamily: {
        'swiss': ['Helvetica Neue', 'Helvetica', 'Inter', 'Arial', 'sans-serif'],
        'code': ['SF Mono', 'Monaco', 'Cascadia Code', 'Courier New', 'monospace'],
      },
      
      // 字体尺寸系统
      fontSize: {
        'display': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subhead': ['28px', { lineHeight: '1.3' }],
        'body-large': ['20px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'small': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'code': ['14px', { lineHeight: '1.6' }],
      },
      
      // 间距系统 (严格8pt网格)
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      
      // 圆角 (Minimal Rounding)
      borderRadius: {
        'none': '0px',
        'subtle': '2px',
        'sm': '4px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
      },
      
      // 边框
      borderWidth: {
        'thin': '1px',
        'thick': '3px',
        'accent': '4px',
      },
      
      // 阴影 (最小化使用)
      boxShadow: {
        'none': 'none',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.12)',
      },
      
      // 动效时长
      transitionDuration: {
        'instant': '150ms',
        'fast': '200ms',
      },
      
      // 布局
      maxWidth: {
        'reading': '700px',
      },
      
      // 断点
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      
      // 动画
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'slide-in-left': 'slide-in-left 200ms ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}