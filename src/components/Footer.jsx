import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import Logo from '@/images/logos/hroc-logo1.png'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Image className="mx-auto h-60 w-auto" src={Logo} />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Visitors</NavLink>
              <NavLink href="#testimonials">Calendar</NavLink>
              <NavLink href="#pricing">Contributions</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://m.facebook.com/profile.php?id=100068291109663&_rdr"
              className="group"
              aria-label="Holy Resurrection Facebook"
              target='_blank'
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.0" x="0px" y="0px" width="50" height="50"
                viewBox="0 0 50 50"
                className="h-12 w-12 fill-slate-500 group-hover:fill-slate-700" >
                <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path></svg>


            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Holy Resurrection Orthodox Church. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
