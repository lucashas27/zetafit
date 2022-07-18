import React from 'react'
import MaterialTable from 'material-table'
import styles from './CustomTable.module.scss'

const CustomTable = ({data, title, columns, localization}) => {
  return (
      <div className={styles.table}>
        <MaterialTable
          style={styles.table}
          columns={columns}
          data={data}
          title={title}
          dateSetting={{
            locale: {localization}}
          }
        />
      </div>
  )
}

export default CustomTable