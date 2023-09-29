import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* display=fallback means for short load times, the text will be invisible, but for long load times,
          the text will use a fallback font while waiting for this font */}
        {/* Using the font Raleway designed by Matt McInerney, Pablo Impallari, and Rodrigo Fuenzalida */}
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=fallback" rel="stylesheet" />
        
        {/* Yantramanav (यंत्रमानव) is a Devanagari typeface family designed by Erin McLaughlin. */}
        <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@700&display=fallback" rel="stylesheet" />
        
        {/* https://fonts.google.com/specimen/Cabin */}
        {/* Designed by Pablo Impallari and Rodrigo Fuenzalida */}
        <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400..700&display=fallback" rel="stylesheet" />
        
        {/* <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=fallback" rel="stylesheet"></link> */}
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=fallback" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
