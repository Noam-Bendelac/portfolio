import { AnchorHTMLAttributes, PropsWithChildren } from 'react'



export function A({
  href,
  className,
  newTab = true,
  children,
  ...rest
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string,
  className?: string,
  newTab?: boolean,
}>) {
  return <a
    className={className}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
    href={href}
    {...rest}
  >{children}</a>
}

