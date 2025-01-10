'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Particles from '../particles'

export function Banner() {
	const { resolvedTheme } = useTheme()
	const [color, setColor] = useState('#ffffff')

	useEffect(() => {
		setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000')
	}, [resolvedTheme])

	return (
		<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
			<span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-6xl font-semibold leading-none">
				<span className="bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent">Bega Finance App</span>
				<div className="pt-3">
					<span className="bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent text-4xl">
						En iyi finansal kararları alın
					</span>
					<div className="pt-5 text-lg  max-w-4xl mx-auto ">
						Finansal yaşamınızı kolaylaştırmak için tasarlanmış güçlü ve kullanıcı dostu bir uygulama! Gelir, gider ve
						birikimlerinizi kontrol altına alın, finansal hedeflerinize ulaşmak için bir adım önde olun.
					</div>
				</div>
			</span>
			<Particles className="absolute inset-0 z-0" quantity={100} ease={80} color={color} refresh />
		</div>
	)
}
