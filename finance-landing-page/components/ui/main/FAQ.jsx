'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const faqData = [
	{
		question: 'Bega Finance App ücretsiz mi?',
		answer: 'Evet! Bega Finance App, tamamen ücretsizdir.'
	},
	{
		question: 'Kişisel verilerim güvende mi?',
		answer:
			'Kesinlikle! Bega Finance App, verilerinizi üst düzeyde güvenlik protokolleriyle korur. Bilgileriniz üçüncü taraflarla paylaşılmaz.'
	},
	{
		question: 'Uygulama hangi para birimlerini destekliyor?',
		answer:
			'Bega Finance App, dünya çapında birçok para birimini destekler. Kullanıcılar istedikleri para birimini seçerek işlemlerini yönetebilir.'
	},
	{
		question: 'Bütçe oluşturmak ve takip etmek kolay mı?',
		answer:
			'Evet! Kullanıcı dostu arayüzümüz sayesinde bütçenizi hızlıca oluşturabilir ve detaylı raporlarla kolayca takip edebilirsiniz.'
	}
]

export default function FAQ() {
	return (
		<Card className="w-full max-w-4xl mx-auto mb-4">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-center">Sıkça Sorulan Sorular</CardTitle>
			</CardHeader>
			<CardContent>
				<Accordion type="single" collapsible className="w-full">
					{faqData.map((item, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger>{item.question}</AccordionTrigger>
							<AccordionContent>
								<p>{item.answer}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</CardContent>
		</Card>
	)
}
