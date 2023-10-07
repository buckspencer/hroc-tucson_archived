'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Info from '@/components/Info'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/church-background1.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'What we beleive',
    description:
      "God the Father is the fountainhead of the Holy Trinity. ",
    fullText: "Liturgy is a term used to describe the shape or form of the Church's corporate worship of God. The word \"liturgy\" derives from a Greek word which means\"the common work.\" All the biblical references to worship in heaven involve liturgy. In the Old Testament, God ordered a liturgy, or specific pattern of worship. We find it described in detail in the Books of Exodus and Leviticus. In the New Testament we find the Church carrying over the worship of Old Testament Israel as expressed in both the synagogue and the temple, adjusting them in keeping with their fulfillment in Christ. The Orthodox Liturgy, which developed over many centuries, still maintains that ancient shape of worship. The main elements in the Liturgy include hymns, the reading and proclamation of the Gospel, prayers, and the Eucharist itself. For Orthodox Christians, the expressions \"the Liturgy\" or \"the Divine Liturgy\" refer to the eucharistic rite instituted by Christ Himself at the Last Supper.",
    image: screenshotExpenses,
  },
  {
    title: 'Mysteries',
    description:
      "The Sacraments of the Orthodox Church, like the Church Herself, can be said to possess a double character, for they are at the same time inward and outward, visible and invisible. ",
    image: screenshotExpenses,
  },
  {
    title: 'Holy Tradition',
    description:
      "One of the distinctive characteristics of the Holy Orthodox Church is its changelessness, its loyalty to the past, its sense of living continuity with the ancient Church. ",
    image: screenshotExpenses,
  },
  {
    title: 'Feast Days',
    description:
      'On Saturday, the day after the crucifixion of the Lord, His disciples and followers were filled with gloom, for they had seen their Lord and Master die, crucified on a cross.',
    image: screenshotExpenses,
  },
  {
    title: 'Worship Services',
    description:
      'On Saturday, the day after the crucifixion of the Lord, His disciples and followers were filled with gloom, for they had seen their Lord and Master die, crucified on a cross.',
    image: screenshotExpenses,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Various aspects of our faith"
      className="relative overflow-hidden bg-[#E8DDB5] pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt="background"
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display pt-20 text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Holy Resurrection is a parish of the Antiochian Orthodox Christian Archdiocese of North America.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Our congregation is comprised of people from many ethnic backgrounds all who share a Biblical love for, and commitment to, the Holy Trinity: Father, Son and Holy Spirit. “Antiochian” refers to the city of Antioch in the New Testament where the disciples of our Jesus Christ “were first called Christians” (Acts 11:26).

            The Orthodox Christian Church confesses the faith delivered once for all to the saints.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="">
                      <Info title={feature.title} description={feature.description} fullText={feature.fullText} image={feature.image} />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
