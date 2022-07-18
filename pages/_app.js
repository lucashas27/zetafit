import './styles.scss'
import 'tailwindcss/tailwind.css'
import Header from '../src/components/Header/Header'
import UserPanel from '../src/components/Panel/UserPanel'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* <UserPanel /> */}
      <Component {...pageProps} />
    </>
  )
}