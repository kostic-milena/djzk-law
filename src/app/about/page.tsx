import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-teal-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Temelji našeg rada i uspeha"
        title="Principi na kojima gradimo uspeh"
        invert
      >
        <p>
        Naš rad se oslanja na jasne principe koji nas vode u svakodnevnom pružanju vrhunskih pravnih usluga i izgradnji dugoročnih odnosa sa klijentima.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Stručnost i kontinuirano usavršavanje" invert>
          Pravo je dinamična oblast, a mi verujemo da samo kroz stalno usavršavanje i praćenje promena u zakonodavstvu možemo pružiti najkvalitetnije savete i rešenja našim klijentima. Svaki slučaj analiziramo temeljno, sa ciljem da ponudimo najbolju pravnu strategiju.
          </GridListItem>
          <GridListItem title="Poverenje i transparentnost" invert>
          Gradimo snažne odnose sa klijentima zasnovane na poverenju. Verujemo da je otvorena komunikacija ključ uspeha — jasno informišemo klijente o svim aspektima njihovog slučaja i koracima koji slede. Naša reč je naša obaveza.
          </GridListItem>
          <GridListItem title="Posvećenost rezultatima" invert>
          Uspeh naših klijenata je i naš uspeh. Sa punom pažnjom i odgovornošću pristupamo svakom slučaju, usmereni ka postizanju konkretnih, merljivih rezultata. Naša misija je da zaštitimo prava i interese klijenata na najefikasniji način.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Partneri',
    people: [    
      {
        name: 'Nenad Đoković',
        role: 'Advokat',
        image: { src: imageDriesVincent },
      },
      {
        name: 'Miloš Kostić',
        role: 'Advokat',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Igor Zahirović',
        role: 'Advokat',
        image: { src: imageMichaelFoster },
      },
    ],
  },
  // {
  //   title: 'Tim',
  //   people: [
  //     {
  //       name: 'Jasmina Mićanović',
  //       role: 'Advokat Pripravnik',
  //       image: { src: imageChelseaHagon },
  //     },
  //     // {
  //     //   name: 'Emma Dorsey',
  //     //   role: 'Senior Designer',
  //     //   image: { src: imageEmmaDorsey },
  //     // },
  //     // {
  //     //   name: 'Leonard Krasner',
  //     //   role: 'VP, User Experience',
  //     //   image: { src: imageLeonardKrasner },
  //     // },
  //     // {
  //     //   name: 'Blake Reid',
  //     //   role: 'Junior Copywriter',
  //     //   image: { src: imageBlakeReid },
  //     // },
  //     // {
  //     //   name: 'Kathryn Murphy',
  //     //   role: 'VP, Human Resources',
  //     //   image: { src: imageKathrynMurphy },
  //     // },
  //     // {
  //     //   name: 'Whitney Francis',
  //     //   role: 'Content Specialist',
  //     //   image: { src: imageWhitneyFrancis },
  //     // },
  //     // {
  //     //   name: 'Jeffrey Webb',
  //     //   role: 'Account Coordinator',
  //     //   image: { src: imageJeffreyWebb },
  //     // },
  //     // {
  //     //   name: 'Benjamin Russel',
  //     //   role: 'Senior Developer',
  //     //   image: { src: imageBenjaminRussel },
  //     // },
  //     // {
  //     //   name: 'Angela Fisher',
  //     //   role: 'Front-end Developer',
  //     //   image: { src: imageAngelaFisher },
  //     // },
  //   ],
  // },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'ĐZK ADVOKATI',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          Naša filozofija je zasnovana na bliskoj saradnji sa klijentima, jer samo tako možemo pružiti pravu pravnu podršku koja je u skladu sa njihovim potrebama
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Naša kancelarija sa sedištem u Beogradu pruža visoko profesionalnu pravnu pomoć u različitim oblastima prava, sa posebnim fokusom na radno pravo, porodično pravo, komercijalne sporove i druge specijalizovane pravne usluge. Naš tim iskusnih advokata posvećen je pružanju efikasnih, pravovremenih i prilagođenih rešenja za sve vaše pravne izazove.
          </p>
          <p>
            Naša misija je da pružimo vrhunske pravne usluge i zaštitimo prava naših klijenata kroz temeljnu analizu svakog slučaja i prilagođavanje strategije njihovim specifičnim potrebama. Uvereni smo da je uspeh naših klijenata ključ našeg uspeha, zbog čega se trudimo da izgradimo dugoročne, partnerske odnose zasnovane na poverenju i transparentnosti.
          </p>
          <ul>
            <li>
              Specijalizovani stručnjaci: Naš tim čine advokati sa bogatim iskustvom u različitim pravnim granama, a posebno u oblasti radnog prava, porodičnog prava i komercijalnih sporova.
            </li>
            <li>
              Personalizovani pristup: Svakom klijentu pristupamo individualno i prilagođavamo strategiju rešenja u skladu sa njegovim potrebama i ciljevima.
            </li>
            <li>
              Visoka efikasnost i transparentnost: Naša kancelarija je poznata po brzoj i efikasnoj pravnoj pomoći, uz potpuno transparentnu komunikaciju o svim fazama postupka.
            </li>
            <li>
              Zadovoljstvo klijenata: Naš cilj je ostvariti najbolje rezultate za naše klijente, pružajući im pravnu sigurnost i zaštitu njihovih prava u svim fazama pravnog procesa.
            </li>
          </ul>
          <p>
            Naša misija je da pružimo vrhunske pravne usluge i zaštitimo prava naših klijenata kroz temeljnu analizu svakog slučaja i prilagođavanje strategije njihovim specifičnim potrebama. Uvereni smo da je uspeh naših klijenata ključ našeg uspeha, zbog čega se trudimo da izgradimo dugoročne, partnerske odnose zasnovane na poverenju i transparentnosti.
          </p>
          <p>
            Bilo da ste preduzetnik, zaposleni ili fizičko lice, ĐZK Advokati su pravi izbor za sve vaše pravne potrebe. Naša kancelarija je tu da vam pomogne da zaštitite svoja prava i donesete informisane odluke u vezi sa pravnim pitanjima koja vas pogađaju.
          </p>
          <p>
            Kontaktirajte nas i saznajte kako vam možemo pomoći da ostvarite svoje ciljeve i zaštitite svoja prava kroz pravnu sigurnost i stručnu podršku.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="8" label="Godina uspešnog rada u različitim pravnim oblastima" />
          <StatListItem value="1000+" label="Uspešno zaključenih pravnih postupaka" />
          <StatListItem value="100+" label="Zadovoljnih klijenata, fizičkih lica i privrednih društava" />
          <StatListItem value="100%" label="Pozitivno rešenih slučajeva u korist klijenata" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="ĐZK Blog"
        intro="Naš blog je vaš pouzdan vodič kroz složene pravne teme. Bilo da se suočavate sa izazovima u poslovanju, radnom odnosu ili porodičnim pitanjima, ovde ćete pronaći korisne informacije i savete našeg advokatskog tima."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
