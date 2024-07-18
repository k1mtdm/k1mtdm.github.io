import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// screens: {
		// 	xl: {
		// 	  max: '1200px',
		// 	},
		// 	lg: {
		// 	  max: '992px',
		// 	},
		// 	md: {
		// 	  max: '768px',
		// 	},
		// 	sm: {
		// 	  max: '576px',
		// 	},
		// },

		

		extend: {
			colors: {
				'ne-green': '#39ff14',
				'ne-blue': '#1484FF',
				'ne-orange': '#FFAA14',
				'ne-yellow': '#d9eb4b',
				'pink': '#FF14C2',
				'light-green': '#B8D3D1',
				'back-green': '#14726E',
				'hero-orange': '#FF3C00',
				'hero-lime': '#D0FF4C',

			},


			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
				roboto: ['Roboto', 'Noto Sans JP Variable',...defaultTheme.fontFamily.sans],

			  },


			

			animation: {
                "shake-lr": "shake-lr 3s cubic-bezier(0.455, 0.030, 0.515, 0.955) 2s infinite alternate both"
            },
			keyframes: {
                "shake-lr": {
                    "0%,to": {
                        transform: "rotate(0deg)",
                        "transform-origin": "50% 50%"
                    },
                    "10%,90%": {
                        transform: "rotate(8deg)"
                    },
                    "20%,40%,60%": {
                        transform: "rotate(-10deg)"
                    },
                    "30%,50%,70%": {
                        transform: "rotate(10deg)"
                    },
                    "80%": {
                        transform: "rotate(-8deg)"
                    }
                }
            }
		},
	},

	
	plugins: [
		
	],
}
