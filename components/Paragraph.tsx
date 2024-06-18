import { A } from './A'


export type Link = {
  type: 'link',
  href: string,
  display: string,
}
export const Link = (display: string, href?: string): Link => ({
  type: 'link',
  href: href ?? `https://www.${display}`,
  display
})

export type Emphasis = {
  type: 'emphasis',
  display: string,
}
export const Emphasis = (display: string): Emphasis => ({
  type: 'emphasis',
  display,
})

export type Italics = {
  type: 'italics',
  display: string,
}
export const Italics = (display: string): Italics => ({
  type: 'italics',
  display,
})
export type Bold = {
  type: 'bold',
  display: string,
}
export const Bold = (display: string): Bold => ({
  type: 'bold',
  display,
})

export type Text = string | Link | Emphasis | Italics | Bold
export type Paragraph = Text[]

export const construct = <T extends any> (t: T) => t

// template tag function
export function paragraph(strings: TemplateStringsArray, ...expressions: Text[]): Paragraph {
  const ret: Paragraph = []
  expressions.forEach((exp, i) => {
    ret[2*i] = strings[i]
    ret[2*i+1] = exp
  })
  ret[2*(strings.length-1)] = strings[strings.length-1]
  return ret
}


export function Paragraph({
  children,
  linkClassName,
  emphasisClassName,
}: {
  children: string | Paragraph,
  linkClassName?: string | undefined,
  emphasisClassName?: string | undefined,
}) {
  return typeof children === 'string'
    ? children
    : children.map((text, idx) =>
        <span key={idx}>{
          typeof text === 'string'
          ? text
          : text.type === 'link'
          ? <A href={text.href} className={linkClassName}>{text.display}</A>
          : text.type === 'emphasis'
          ? <em className={emphasisClassName}>{text.display}</em>
          : text.type === 'italics'
          ? <i>{text.display}</i>
          : <b>{text.display}</b>
        }</span>
      )
}


