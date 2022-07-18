import React, { useEffect, useState } from 'react'
import styles from './HeroCard.module.scss'
import marvel from '../../../../services/marvel'
// import { useParams } from 'react-router-dom'
import { useRouter } from 'next/router'

const HeroCard = (id) => {
  const [heroData, setHeroData] = useState()
  const [favoritedHero, setFavoritedHero] = useState()
  const [isHeroFavorited, setIsHeroFavorited] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const queryHeroId = router.query.hero
    try {
      if (queryHeroId) {
      marvel.get(`/characters/${queryHeroId}`)
        .then(response => setHeroData(response.data.data)) 
      }
    } catch (e) {
      console.log('try catch ', e)
    }
  }, [router])

  const favoriteHero = (id) => {
    setFavoritedHero(true)
    if (typeof window !== 'undefined') {
       localStorage.setItem('favoriteHero', id);
    }
  }

  const removeHero = (id) => {
    setFavoritedHero(false)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('favoriteHero', id);
    }
  }

  const getHeroLocalStorage = () => {
    if (typeof window !== 'undefined') {
      let heroName = localStorage.getItem('favoriteHero');
      if (heroName !== null) {
        setIsHeroFavorited(heroName)
      }
      return heroName
    }
  }

  return (
    <>
    <div className={styles.heroCard}>
      {heroData && heroData.results[0].title}
      <button className={styles.favoriteButton} 
        onClick={() => favoritedHero && isHeroFavorited ? removeHero(id.id) : favoriteHero(id.id)}>
          {favoritedHero ? 'Remover Heroi' : 'Favoritar Heroi'}</button>
    </div>
    <div className={styles.description}>
    {heroData && heroData.results[0].name} 
    </div>
    {isHeroFavorited && isHeroFavorited}
    </>
  )
}

export default HeroCard
