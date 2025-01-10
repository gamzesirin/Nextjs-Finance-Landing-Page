'use client'
import { useEffect } from 'react'
import Script from 'next/script'

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}
				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/preline/2.0.3/preline.min.js"
					strategy="beforeInteractive"
					onLoad={() => {
						const { initComponents } = require('preline/components')
						initComponents()
					}}
				/>
			</body>
		</html>
	)
}
