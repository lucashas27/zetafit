import React from 'react';
import UserPanel from '../../components/Panel/UserPanel';
import styles from './MainPage.module.css'

const MainPage = () => {
  return (
  <div className={styles.indexContainer}>
    <UserPanel />
  </div>
    );
};

export default MainPage;
