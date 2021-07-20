const path = require('path');
const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			...defaultColors,
			darkblue: '#0071c2'
		},
		extend: {
			zIndex: {
				'-10': '-10'
			},
			minHeight: {
				line: '1.4em',
				header: '4rem',
				screen: '100vh',
				auto: 'auto',
				full: '100%',
				review: '77vh'
			},
			minWidth: {
				0: '0',
				'1/6': '15%',
				'1/5': '20%',
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				full: '100%',
				inherit: 'inherit'
			},
			width: {
				sidebar: '20rem'
			},
			letterSpacing: {
				tighter: '-.05em',
				tight: '-.025em',
				normal: '0',
				wide: '.025em',
				wider: '.05em',
				widest: '.1em',
				title: '.24em'
			},
			backgroundImage: theme => ({
				header: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.5) 0.01%, rgba(0, 0, 0, 0.6) 68.77%, rgba(0, 0, 0, 0.6) 101.56%), 
            url("assets/header.jpg")`,
				review:
					'url("https://opengeekslab.com/wp-content/uploads/2019/11/Key-Factors-While-Hotel-Booking-App-Planning.png")'
			})
		}
	},
	variants: {
		scrollbar: ['rounded'],
		extend: {
			opacity: ['disabled'],
			cursor: ['disabled'],
			borderWidth: ['last'],
			margin: ['last'],
			margin: ['first'],
			backgroundColor: ['active']
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
