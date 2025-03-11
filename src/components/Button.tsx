import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded px-4 py-1.5 text-sm font-semibold transition border',
    invert
      ? 'bg-teal-950 text-white border-teal-950 hover:bg-transparent hover:text-teal-950'
      : 'bg-transparent text-teal-950 border-teal-950 hover:bg-teal-950 hover:text-white',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
