
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
				// Updated ReVastra Brand Colors - Professional & Unisex
				'rv-primary': '#1E293B',     // Slate Navy
				'rv-secondary': '#38BDF8',   // Sky Blue
				'rv-accent': '#FCD34D',      // Golden Yellow
				'rv-bg-light': '#F1F5F9',    // Off White Gray
				'rv-bg-dark': '#0F172A',     // Charcoal
				'rv-text-primary': '#0F172A', // Charcoal
				'rv-text-secondary': '#64748B', // Muted Blue Gray
				'rv-gradient-start': '#1E293B',
				'rv-gradient-mid': '#38BDF8',
				'rv-gradient-end': '#FCD34D'
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
						boxShadow: '0 0 5px rgba(30, 41, 59, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 25px rgba(56, 189, 248, 0.8), 0 0 35px rgba(252, 211, 77, 0.6)'
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
				'rv-gradient': 'linear-gradient(135deg, #1E293B 0%, #38BDF8 50%, #FCD34D 100%)',
				'rv-gradient-soft': 'linear-gradient(135deg, #1E293B20 0%, #38BDF820 50%, #FCD34D20 100%)',
				'rv-hero-gradient': 'linear-gradient(135deg, #F1F5F9 0%, #1E293B08 50%, #38BDF808 100%)'
			},
			boxShadow: {
				'neon': '0 0 20px rgba(56, 189, 248, 0.5), 0 0 40px rgba(252, 211, 77, 0.3)',
				'neon-hover': '0 0 30px rgba(56, 189, 248, 0.7), 0 0 60px rgba(252, 211, 77, 0.5)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
