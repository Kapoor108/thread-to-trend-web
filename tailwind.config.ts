
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated ReVastra Brand Colors - Earth-toned & Eco-conscious
				'rv-primary': '#95A677',     // Sage Green
				'rv-secondary': '#A39384',   // Warm Taupe
				'rv-accent': '#D4A017',      // Mustard Yellow
				'rv-accent-2': '#B7410E',    // Brick Red
				'rv-bg-light': '#F5F1E9',    // Soft Cream
				'rv-bg-dark': '#1A292F',     // Deep Navy Blue
				'rv-text-primary': '#1A292F', // Deep Navy Blue
				'rv-text-secondary': '#7C7C7C', // Dust Gray
				'rv-highlight': '#4FA3D9',   // Azure Blue
				'rv-gradient-start': '#95A677',
				'rv-gradient-mid': '#D4A017',
				'rv-gradient-end': '#B7410E'
			},
			fontFamily: {
				'heading': ['Poppins', 'sans-serif'],
				'body': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'xl': '1rem',
				'2xl': '1.5rem',
				'3xl': '2rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(149, 166, 119, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 25px rgba(212, 160, 23, 0.8), 0 0 35px rgba(183, 65, 14, 0.6)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'rv-gradient': 'linear-gradient(135deg, #95A677 0%, #D4A017 50%, #B7410E 100%)',
				'rv-gradient-soft': 'linear-gradient(135deg, #95A67720 0%, #D4A01720 50%, #B7410E20 100%)',
				'rv-hero-gradient': 'linear-gradient(135deg, #F5F1E9 0%, #95A67708 50%, #D4A01708 100%)'
			},
			boxShadow: {
				'neon': '0 0 20px rgba(212, 160, 23, 0.5), 0 0 40px rgba(183, 65, 14, 0.3)',
				'neon-hover': '0 0 30px rgba(212, 160, 23, 0.7), 0 0 60px rgba(183, 65, 14, 0.5)',
				'glass': '0 8px 32px 0 rgba(26, 41, 47, 0.37)',
			}
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("tailwindcss-animate")
	],
} satisfies Config;
