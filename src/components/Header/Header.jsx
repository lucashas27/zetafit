import React from 'react';
import styles from './Header.module.scss'
import ProSearch from '../../proIcons/ProSearch/ProSearch.jsx';

const Header = () => {
  const isUserLogged = false // mock

  return (
    <div className={styles.headerContainer}>
      <h1>ZetaFit</h1>
      <section className={styles.searchContainer}>
        <input className={styles.inputSearch} type="text" placeholder="Procurar aluno.." />
        <a id={styles.proSearchIcon} href="/"> <ProSearch color={'#FFFFFF'} /> </a>
      </section>
      
      <section className={styles.login}>
        {!isUserLogged && <a href="/">Login</a>}
      </section>

    </div>
  );
};

export default Header;
