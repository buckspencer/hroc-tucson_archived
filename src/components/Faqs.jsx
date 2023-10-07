import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.png'

const faqs = [
  {
    id: 1,
    question:
      "What time are the church services?",
    answer:
      "Our Sunday services are held at 9:00 AM and 11:00 AM.",
  },
  {
    id: 2,
    question:
      "Is there a dress code for attending church?",
    answer:
      "While there is no strict dress code, we recommend dressing modestly and respectfully when attending our services.",
  },
  {
    id: 3,
    question:
      "Do I need to make a reservation to attend a church service?",
    answer:
      "Reservations are not required, but they can help us better prepare for your visit. You can make a reservation on our website.",
  },
  {
    id: 4,
    question:
      "Is there a children\"s program during church services?",
    answer:
      "Yes, we have a dedicated children\"s program for kids of all ages during our services. Your children are welcome to join!",
  },
  {
    id: 5,
    question:
      "Can I participate in community activities at the church?",
    answer:
      "Absolutely! We encourage you to get involved in our various community activities and groups. Check our website for more information.",
  },
  {
    id: 6,
    question:
      "How can I learn more about the church\"s beliefs and teachings?",
    answer:
      "You can attend our newcomer\"s orientation sessions or reach out to our pastors and leaders to learn more about our beliefs and teachings.",
  },
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt="background"
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-display leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Have a different question and can’t find the answer you’re looking for? Reach out to our office by{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}
