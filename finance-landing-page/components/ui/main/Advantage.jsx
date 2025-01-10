import React from 'react'
import TypingAnimation from '../typing-animation'
import Image from 'next/image'

const Advantage = () => {
	return (
		<div className=" w-full max-w-4xl mx-auto  flex flex-col items-start justify-between py-5">
			<TypingAnimation>Neden Bega Finance App ?</TypingAnimation>
			<div className="flex items-start justify-between w-full">
				<ul>
					<li>
						<span className="text-green-700 font-bold">Bütçe Yönetimi: </span>
						Harcamalarınızı kategorilere ayırın, gelir ve giderlerinizi detaylı bir şekilde takip edin.
					</li>
					<li>
						<span className="text-green-700 font-bold">Görselleştirilmiş Veriler: </span> Harcamalarınızı grafiklerle
						inceleyerek bütçenizi daha etkili yönetin.
					</li>

					<li>
						<span className="text-green-700 font-bold">Güvenli ve Kolay Kullanım: </span>
						Verileriniz her zaman güvende, kullanıcı dostu arayüzümüzle her şey bir tık uzağınızda.
					</li>
				</ul>
				<Image src="/images/advantage.png" alt="advantage" width={400} height={400} />
			</div>
		</div>
	)
}

export default Advantage
