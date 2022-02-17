import React, { useState } from 'react';
import BarChart from './BarChart/BarChart'
import { UserData } from './Data'
import styles from './DashBoardsPage.module.css'

const DashboardsPage = () => {
  const [userData, setUserData] = useState({
    labels: ['Basico', 'Plus', 'VIP'],
    datasets: [
      {
        label: "Planos dos Usuarios",
        data: UserData.map((data) => data.userMensalidade),
        backgroundColor: ["green"]
      }
    ]
  })

  return (
    <div className={styles.barChart} >
      <BarChart chartData={userData} />
    </div>
  );
};

export default DashboardsPage;
