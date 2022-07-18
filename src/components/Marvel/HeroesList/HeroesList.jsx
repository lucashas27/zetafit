import React, { useEffect, useState } from 'react'
import styles from './HeroesList.module.scss'
import HeroesGridCard from '../../HeroesGridCards/HeroesGridCards'

const HeroesList = ({result}) => {
  const [resultData, setResultData] = useState()

  useEffect(() => {
    setResultData(result.data.results)
  }, [])

  console.log(resultData)
  
  return (
    <>    
      <div className={styles.wrapper}>
      {resultData && resultData.map((items => 
          <HeroesGridCard
            name={items.name}
            description={items.description}
          /> 
          ))}
      </div>

    </>
  )
}

export default HeroesList