import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.png'

const faqs = [
  [
    {
      question: 'What time are the church services?',
      answer: 'Our Sunday services are held at 9:00 AM and 11:00 AM.',
    },
    {
      question: 'Is there a dress code for attending church?',
      answer: 'While there is no strict dress code, we recommend dressing modestly and respectfully when attending our services.',
    },
    {
      question: 'Do I need to make a reservation to attend a church service?',
      answer: 'Reservations are not required, but they can help us better prepare for your visit. You can make a reservation on our website.',
    },
    {
      question: 'Is there a children\'s program during church services?',
      answer: 'Yes, we have a dedicated children\'s program for kids of all ages during our services. Your children are welcome to join!',
    },
    {
      question: 'What COVID-19 safety measures are in place at the church?',
      answer: 'We have implemented various safety measures, including mask requirements, social distancing, and hand sanitizing stations, to ensure the safety of our congregation.',
    },
    {
      question: 'Can I participate in community activities at the church?',
      answer: 'Absolutely! We encourage you to get involved in our various community activities and groups. Check our website for more information.',
    },
    {
      question: 'How can I learn more about the church\'s beliefs and teachings?',
      answer: 'You can attend our newcomer\'s orientation sessions or reach out to our pastors and leaders to learn more about our beliefs and teachings.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, feel free to contact the office.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
