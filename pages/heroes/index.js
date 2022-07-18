import HeroesList from "../../src/components/Marvel/HeroesList/HeroesList"
import marvel from '../../services/marvel'

export default function dashboard({ Component, pageProps, result }) {
  return (
    <>
      <HeroesList result={result} />
    </>
  )
  
}

export async function getStaticProps(context) {
  const res = await marvel.get('/characters')

  return {
    props: {result: res.data},
  }
}