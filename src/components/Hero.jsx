import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import MainBuilding from '@/images/holy-resurrection.jpeg'

export function Hero() {
  return (
    <section
      id="ourFaith"
      aria-label="Various aspects of our faith"
      className="relative border-t-8 border-r-8 border-l-8 border-red-800"
    >
      <Container className="pb-16 h-1/8 text-center relative">
        <h3 className="mx-auto pt-12 font-display text-2xl font-small tracking-tight text-slate-900 text-center">
          Greetings in the Name of our Lord God and Savior Jesus Christ!
        </h3>
        <Image className="pt-4 mx-auto rounded opacity-60" src={MainBuilding} />

        <h3 className='mx-auto font-display text-lg font-small tracking-tight text-slate-900 text-center'>On behalf of the entire parish family, welcome to the Holy Resurrection Orthodox Church</h3>
        <div className="mt-5 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Our Parish
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section >

  )
}
