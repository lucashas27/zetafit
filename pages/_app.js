import './styles.css'
import 'tailwindcss/tailwind.css'
import Header from '../src/components/Header/Header'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}