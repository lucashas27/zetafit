import React from 'react'
import styles from './AlunosCard.module.scss'
import CustomTable from '../../CustomTable/CustomTable'

const AlunosCard = ({id, name, isActive}) => {
  return (
    <>
      <ol className={styles.mainCard}>
        <li>{name}</li>
        <li>Id: {id}</li>
        <li>Situação: {isActive ? 'Ativo' : 'Inativo'}</li>
      </ol>
    </>
  )
}

export default AlunosCard