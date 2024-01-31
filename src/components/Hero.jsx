import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import MainBuilding from '@/images/hroc5.png'

export function Hero() {
  return (
    <section
      id="ourFaith"
      aria-label="Various aspects of our faith"
      className="relative"
    >
      <div><Image className="mx-auto" src={MainBuilding} /></div>


    </section >

  )
}
