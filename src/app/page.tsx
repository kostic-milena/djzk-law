import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { Button } from '@/components/Button'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-teal-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
          Stotine zadovoljnih klijenata. Naša najveća preporuka.
          </h2>
          <div className="h-px flex-auto bg-white" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Vaši pouzdani pravni partneri"
        className="mt-24 sm:mt-32 lg:mt-40 w-full"
      >
        <p>
        Tim iskusnih advokata specijalizovan je za pružanje visokokvalitetne pravne pomoći i podrške u različitim pravnim oblastima. Sa sedištem u Beogradu, naš cilj je da svakom klijentu obezbedimo efikasna i prilagođena pravna rešenja, uz poštovanje najviših profesionalnih standarda.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                {/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  {/* {/* <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Pravne oblasti</span>
                </p> */}
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Sigurnost u svakom pravnom koraku"
        title="Zašto izabrati nas?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Naš pristup je zasnovan na stručnosti, posvećenosti i poverenju. Radimo sa ciljem da zaštitimo vaše interese i pronađemo najbolje pravno rešenje za vas.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Iskustvo i stručnost">
            Višegodišnje iskustvo u različitim granama prava garantuje kvalitetnu pravnu podršku.
            </ListItem>
            <ListItem title="Individualni pristup">
            Svakom klijentu se posvećujemo pažljivo, kreirajući strategiju prema njegovim potrebama.
            </ListItem>
            <ListItem title="Transparentnost ">
            Jasna komunikacija i poštovanje pravnih etičkih normi osiguravaju poverenje i sigurnost.
            </ListItem>
            <ListItem title="Efikasnost ">
            Brzo i precizno rešavanje pravnih pitanja uz punu profesionalnost.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="pt-24 sm:pt-32 md:pt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-7xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            ĐZK
          </h1>
          <h2 className="font-display text-5xl tracking-tight text-neutral-700 [text-wrap:balance] sm:text-5xl">
            ADVOKATI
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            Zaštita vaših prava, bez kompromisa.
          </p>
          <Button
            href={"/contact"}
            aria-label={`#`}
            className="mt-8"
          >
            Zakažite konsultacije
          </Button>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Marko J.', logo: logoPhobiaDark }}
      >
        Saradnja sa ovim timom advokata bila je izuzetno profesionalna i efikasna. Njihova pravna podrška nam je pomogla da zaštitimo poslovne interese i rešimo kompleksna pravna pitanja. Posebno cenimo njihov proaktivan pristup i jasnoću u komunikaciji. Preporučujemo ih svim kompanijama koje traže pouzdanog pravnog partnera.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
