import type { AppProps } from 'next/app'
import '../styles/globals.css'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  // MyApp remains mounted even as different `Component`s get mounted and unmounted
  return <Component {...pageProps} />
}
