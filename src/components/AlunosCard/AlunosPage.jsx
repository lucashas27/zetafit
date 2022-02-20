import React, { useEffect, useState } from 'react'
import styles from './AlunosPage.module.scss'
import api from '../../../services/api'
import AlunosCard from './Card/AlunosCard'
import CustomTable from '../CustomTable/CustomTable'

const AlunosPage = () => {
  const [alunosData, setAlunosData] = useState([])

  useEffect(() => {
    api.get('/alunos')
      .then(response => setAlunosData(response.data.userData))
  }, [])

  const tableColumns = 
    [
      { title: 'Nome', field: 'name' },
      { title: 'Status', field: 'isAdimplente' },
      { title: 'Plano', field: 'userPlano' }
    ]

    const getValidUser = (data) => {
      const isUserActive = usuario => usuario.isActive;
      const validUsers = data.filter(isUserActive);
        return validUsers
    }

  return (
    <div className={styles.tableContainer}>
      {alunosData &&
      <CustomTable 
        data={getValidUser(alunosData)} 
        columns={tableColumns}
        title={"Lista de alunos"} 
        localization={'pt_BR'}
      />
    }
    </div>
  )
}

export default AlunosPage