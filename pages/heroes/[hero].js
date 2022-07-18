import { useRouter } from 'next/router'
import HeroCard from '../../src/components/Marvel/HeroCard/HeroCard'

const Hero = () => {
  const router = useRouter()
  const { hero }  = router.query

  return (
    <>
      <HeroCard id={hero} />
    </>
  )
}

export default Hero

