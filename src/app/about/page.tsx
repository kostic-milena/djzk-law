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
        eyebrow="Temelj našeg rada i uspeha"
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
    title: 'Advokati',
    people: [    
      {
        name: 'Nenad S. Đoković',
        role: 'Advokat',
        image: { src: imageDriesVincent },
        experience: 'Poznat po temeljnom i analitičnom pristupu svakom pravnom pitanju, bez površnih rešenja i prečica. Ne odustaje lako pred izazovima i posvećen je pronalaženju najboljih pravnih rešenja za klijente, bilo kroz pregovore, izradu precizno formulisanih ugovora ili zastupanju u sudskim i upravnim postupcima. Specijalizovan za građansko pravo, sa posebnim fokusom na stvarno pravo, izradu složenih ugovora i pravnu podršku u procesima građenja. Ima značajno iskustvo u rešavanju složenih imovinskih i ugovornih pitanja, kao i u zastupanju klijenata pred sudovima i drugim nadležnim organima.'
      },
      {
        name: 'Miloš Kostić',
        role: 'Advokat',
        image: { src: imageLeslieAlexander },
        experience: 'Sa više od 15 godina iskustva u privrednom pravu, specijalizovan za savetovanje kompanija u vezi sa ugovornim odnosima, osnivanjem i restrukturiranjem preduzeća, kao i rešavanjem privrednih sporova. Ima bogato iskustvo u pregovaranju, izradi ugovora i rešavanju poslovnih izazova, sa posebnim fokusom na bankarsko pravo i analizu kreditnih pitanja. Sa Masterom prava (LL.M.) iz međunarodnog prava, stečenim na Pravnom fakultetu Univerziteta u Beogradu, poseduje duboko razumevanje domaćih i međunarodnih pravnih i finansijskih okvira. Saradnja sa domaćim i međunarodnim klijentima omogućila mu je efikasno rešavanje složenih pravnih pitanja u privredi i finansijama, dok učešće na međunarodnim konferencijama kontinuirano unapređuje njegove stručne kompetencije.',
      },
      {
        name: 'Igor Zahirović',
        role: 'Advokat',
        image: { src: imageMichaelFoster },
        experience: 'Sa više od 15 godina iskustva u radnom pravu, specijalizovan za zastupanje klijenata u radnim sporovima, izradu ugovora o radu, regulisanje prava i obaveza poslodavaca i zaposlenih, kao i prevenciju pravnih rizika. Poseduje iskustvo u kolektivnom pregovaranju, zaštiti prava radnika, kao i usklađivanju sa zakonodavstvom u oblasti zapošljavanja. Posvećen je detaljnoj analizi i strateškom rešavanju problema, pružajući efikasnu pravnu podršku u dinamičnom poslovnom okruženju. Diplomirao je na Pravnom fakultetu Univerziteta u Beogradu, a redovno se usavršava kroz seminare i programe u oblasti radnog prava. Takođe, pruža savete poslodavcima u vezi sa najboljim praksama u upravljanju ljudskim resursima i minimiziranju pravnih rizika.',
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
                <div
                  role="list"
                  className="grid grid-cols-1"
                >
                  {group.people.map((person) => (
                    <div key={person.name} className='grid grid-cols-1 xl:grid-cols-2'>
                      <FadeIn>
                        <div className="overflow-hidden rounded-3xl bg-neutral-100 my-10">
                          <Image
                            alt=""
                            {...person.image}
                            className="object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          
                        </div>
                      </FadeIn>
                      <FadeIn>
                        <div className="pb-12 xl:p-12">
                              <p className="font-display text-xl font-semibold tracking-wide text-neutral-950">
                                {person.name}
                              </p>
                              <p className="mt-1 text-md text-neutral-800 italic">
                                {person.role}
                              </p>
                              <p className="mt-4 text-sm text-neutral-950">
                                {person.experience}
                              </p>
                            
                          </div>
                      </FadeIn>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Advokatska kancelarija u Beogradu | Pravni savetnici i zastupanje u Beogradu',
  description:
    'Advokatska kancelarija u Beogradu nudi profesionalne pravne usluge u oblastima građanskog, privrednog, radnog i imovinskog prava. Pružamo savetovanje i zastupanje za fizička i pravna lica, sa fokusom na sigurnost, efikasnost i transparentnost u pravnim procesima.',
  keywords: 
    'advokatska kancelarija Beograd, pravni savetnici Beograd, advokati Beograd, pravna pomoć Beograd, privredno pravo Beograd, radno pravo Beograd, imovinsko pravo Beograd, građansko pravo Beograd, pravno zastupanje Beograd, pravne usluge Beograd.'
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="ĐZK Advokati" title="Stručnost, poverenje i pravna sigurnost">
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

          <p className='text-2xl font-semibold text-neutral-950 mt-10'>Zašto izabrati ĐZK Advokate?</p>
          <ul>
            <li>
              <strong>Specijalizovani stručnjaci:</strong> Naš tim čine advokati sa bogatim iskustvom u različitim pravnim granama, a posebno u oblasti radnog prava, porodičnog prava i komercijalnih sporova.
            </li>
            <li>
            <strong>Personalizovani pristup:</strong> Svakom klijentu pristupamo individualno i prilagođavamo strategiju rešenja u skladu sa njegovim potrebama i ciljevima.
            </li>
            <li>
              <strong>Personalizovani pristup:</strong> Visoka efikasnost i transparentnost: Naša kancelarija je poznata po brzoj i efikasnoj pravnoj pomoći, uz potpuno transparentnu komunikaciju o svim fazama postupka.
            </li>
            <li>
              <strong>Zadovoljstvo klijenata:</strong> Naš cilj je ostvariti najbolje rezultate za naše klijente, pružajući im pravnu sigurnost i zaštitu njihovih prava u svim fazama pravnog procesa.
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
