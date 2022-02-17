import axios from 'axios'
import MainPage from '../src/components/MainPage/MainPage.jsx'

function HomePage({pokeInfo, pokeName}) {
  return (
    <div>
      <MainPage />
   </div>
  )
}

export async function getStaticProps() {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  const pokeInfo = res.data
  const pokeName = pokeInfo.name

  return {
    props: {
      pokeName,
      pokeInfo
    },
  }
} 

export default HomePage