import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import Image from 'next/image'
import imageLogoDjzk from '@/images/djzk_logo.png'

const navigation = [
  {
    title: 'Pravne oblasti',
    links: [
      { title: 'Privredno pravo', href: '/work/family-fund' },
      { title: 'Porodično pravo', href: '/work/unseal' },
      { title: 'Radno pravo', href: '/work/phobia' },
      {
        title: (
          <>
            Pogledaj sve <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'ĐZK Advokati',
    links: [
      { title: 'Advokati', href: '/about' },
      { title: 'Proces rada', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Kontakt', href: '/contact' },
    ],
  },
  // {
  //   title: 'Connect',
  //   links: socialMediaProfiles,
  // },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Budite u toku sa pravnim savetima i novostima!
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Prijavite se na naš newsletter i saznajte važne izmene zakona, korisne pravne savete i novosti iz sveta prava.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email adresa"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            {/* <Logo className="h-8" fillOnHover /> */}
            <Image
              src={imageLogoDjzk}
              width={100}
              height={100}
              alt="Logo"
            />

          </Link>
          <p className="text-sm text-neutral-700">
            © ĐZK Advokati {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
