import React from 'react'
import style from './HeroesGridCards.module.scss'

const HeroesGridCards = ({name, description}) => {
  return (
    <div className={style.wrapper}>
      {name}
      <div className={style.description}>
        {description}
      </div>
      
    </div>
  )
}

export default HeroesGridCards