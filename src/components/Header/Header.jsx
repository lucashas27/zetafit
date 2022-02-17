import React from 'react';
import styles from './Header.module.css'
import ProSearch from '../../proIcons/ProSearch/ProSearch.jsx';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>ZetaFit</h1>
     <a href="/"> <ProSearch color={'#FFFFFF'} /> </a>
    </div>
  );
};

export default Header;
