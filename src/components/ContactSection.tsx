import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-full">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Kontaktirajte nas
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Kontakt
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              
              <Offices
                invert
                className="mt-6 grid gap-8 xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 "
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
