import React from 'react';
import styles from './UserPanel.module.css'

const UserPanel = () => {
  return (
    <div className={styles.panel}>
      <ul>
        <li><a href="/dashboard">Dashboards</a></li>
        <li><a href="/">Alunos</a></li>
        <li><a href="/">Calendario</a></li>
        <li><a href="/">Instrutores</a></li>
        <li><a href="/">Relatórios</a></li>
        <li><a href="/">Financeiro</a></li>
        <li><a href="/">Gerente</a></li>
      </ul>
    </div>
  );
};

export default UserPanel;
