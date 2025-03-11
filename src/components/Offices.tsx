import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Advokatska kancelarija" invert={invert}>
          Dositejeva 11
          <br />
          11000 Beograd (Stari Grad)
          <br />
          office@djokovic-kostic.rs
        </Office>
      </li>
      <li>
        <Office name="Advokat Miloš Kostić" invert={invert}>
          milos@djokovic-kostic.rs
          <br />
        0642725272
        </Office>
      </li>
      <li>
        <Office name="Advokat Nenad Đoković" invert={invert}>
          nenad@djokovic-kostic.rs
          <br />
        0642725272
        </Office>
      </li>
      <li>
      <Office name="Advokat Igor Zahirović" invert={invert}>
          igor@djokovic-kostic.rs
          <br />
        0642725272
        </Office>
        </li>
    </ul>
  )
}
