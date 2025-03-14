import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Konsultacije i analiza slučaja:" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Početna faza započinje prvim kontaktom između klijenta i advokata. Klijent dolazi sa svojim pravnim problemom, a advokat prikuplja sve relevantne informacije kako bi analizirao situaciju i zakonske osnove koje se odnose na slučaj. 
        </p>
        <p>
        U ovoj fazi, advokat pruža inicijalne savete u vezi sa pravnim mogućnostima, pravima i obavezama klijenta. Ako je potrebno, advokat razmatra opciju pokretanja sudskog postupka, ali takođe može preporučiti alternativne metode rešavanja spora, kao što su pregovaranje, medijacija ili arbitraža. U ovoj fazi se takođe dogovaraju uslovi saradnje između advokata i klijenta, uključujući honorar i druge aspekte. Klijent, uz pomoć saveta advokata, odlučuje o daljim koracima u vezi sa rešavanjem svog problema. 
        </p>
        {/* <p>
          Once the full audit is complete, we report back with a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          more importantly, a budget.
        </p> */}
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </Section>
  )
}

function Build() {
  return (
    <Section title="Priprema i sprovođenje pravnih radnji" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        U ovoj fazi, advokat priprema sve potrebne pravne akte, kao što su tužbe, ugovori, žalbe, poravnanja ili drugi relevantni dokumenti. U zavisnosti od prirode slučaja, advokat može preduzeti pregovore sa suprotnom stranom kako bi postigao sporazum van suda. 
        </p>
        <p>
        Ako pregovori nisu uspešni, advokat pokreće sudski postupak podnošenjem tužbe ili drugih relevantnih dokumenata. Tokom ove faze, advokat redovno komunicira sa klijentom, obaveštava ga o napretku slučaja i pruža savete o daljim koracima.
        </p>
        <p>
        Ako je spor rešavan van suda, advokat finalizuje uslove nagodbe ili poravnanja i priprema sve potrebne akte.
        </p>
      </div>
{/* 
      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Finalizacija" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Završna faza obuhvata finalizaciju slučaja, bilo kroz sudski postupak, poravnanje ili nagodbu. Ako slučaj ide putem sudskog postupka, advokat predstavlja klijenta pred sudom, iznosi pravne argumente, dokaze, postavlja svedoke i vodi celu pravnu strategiju. U slučaju poravnanja ili nagodbe, advokat finalizuje sve uslove i obezbeđuje da su svi aspekti sporazuma ispunjeni. 
        </p>
        <p>
        Takođe, u ovoj fazi advokat može pomagati u implementaciji presude ili sporazuma, kao što je izvršenje presude ili naplata duga. Kada je slučaj završen, advokat obaveštava klijenta i pruža savet u vezi sa mogućim narednim koracima.
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List> */}
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow=""
        title="Vrednosti koje nas definišu"
      >
        <p>
        Naša osnovna uverenja temelje se na posvećenosti kvalitetu, transparentnosti i integritetu u svakom koraku, kako bismo našim klijentima pružili najefikasnija i najpouzdanija pravna rešenja.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Profesionalizam">
          Posvećeni smo pružanju pravnih usluga najvišeg kvaliteta, utemeljenih na stručnoj ekspertizi i poštovanju etičkih principa, kako bismo obezbedili najpovoljniji ishod za naše klijente.
          </GridListItem>
          <GridListItem title="Transparentnost">
          Verujemo u otvorenu i jasnu komunikaciju sa klijentima. Pružamo im sve relevantne informacije u svakom koraku procesa, osiguravajući da su u potpunosti informisani o svojim pravima i opcijama.
          </GridListItem>
          <GridListItem title="Efikasnost">
          Težimo maksimalnoj efikasnosti u svim aspektima našeg rada, koristeći resurse na najbolji mogući način kako bismo postigli brze i uspešne rezultate za naše klijente.
          </GridListItem>
          <GridListItem title="Posvećenost ">
          Svaki slučaj nam je važan, a posvećenost potrebama klijenta je naša ključna smernica. Aktivno se bavimo svakim detaljem kako bismo pružili rešenja koja su u najboljem interesu klijenta.
          </GridListItem>
          <GridListItem title="Integritet ">
          Naša kancelarija posluje sa visokim nivoom integriteta, uvek poštujući zakonske norme i etičke standarde. Naš cilj je da postupamo odgovorno, pošteno i sa najvišim nivoom poverenja.
          </GridListItem>
          <GridListItem title="Inovativnost ">
          Neprestano usvajamo nove pravne pristupe i tehnologije kako bismo našim klijentima pružili najmodernija i najefikasnija pravna rešenja.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Proces rada - Profesionalni pristup, efikasno rešenje',
  description:
    'Saznajte kako naš stručni tim pruža profesionalnu pravnu pomoć kroz jasno definisan proces rada. Od inicijalnih konsultacija do finalizacije slučaja, pružamo efikasna i prilagođena pravna rešenja za svaki izazov.',
  keywords: 
    "naš proces rada, pravne usluge, advokatske usluge, pravni saveti, proces rada advokatske kancelarije, efikasno rešavanje spora, profesionalni pravni pristup, konsultacije sa advokatom, pravni tim, pravni postupak",

}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Proces rada" title="Profesionalni pristup, efikasno rešenje">
        <p>
        Naša filozofija temelji se na pružanju efikasnih i visokokvalitetnih pravnih usluga kroz optimalno korišćenje resursa. Oslanjamo se na dugogodišnje iskustvo i primenu potvrđenih pravnih strategija, kako bismo našim klijentima obezbedili najpovoljnije i najefikasnije rešenje.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
