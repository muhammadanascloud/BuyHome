import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#000000',
  			secondaryBg: '#2b2b2b',
  			accent: '#1e3a8a',
  			highlight: '#3b82f6',
  			text: '#ecf0f1',
  			heading: '#60a5fa',
  			accentOrange: '#e67e22'
  		},
  		fontFamily: {
  			heading: ["Montserrat", "sans-serif"],
  			body: ["Roboto", "sans-serif"]
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			glow: {
  				'0%, 100%': {
  					opacity: '0.8'
  				},
  				'50%': {
  					opacity: '0.5'
  				}
  			},
  			typewriter: {
  				'0%': {
  					width: '0%'
  				},
  				'100%': {
  					width: '100%'
  				}
  			},
  			scroll: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		animation: {
  			fadeIn: 'fadeIn 1s ease-in-out',
  			slideUp: 'slideUp 0.7s ease-out forwards',
  			glow: 'glow 5s ease-in-out infinite',
  			typewriter: 'typewriter 3s steps(30) 1s 1 normal both',
  			scroll: 'scroll 60s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
