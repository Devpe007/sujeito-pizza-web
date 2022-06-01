import React, { useContext } from 'react';
import Link from 'next/link';

import { FiLogOut } from 'react-icons/fi';
import styles from './styles.module.scss';

import { AuthContext } from '../../contexts/AuthContext';

function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <img
            src="/logo.svg"
            alt="Logo Pizzaria"
            width={190}
            height={60}
          />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
            <a>Categoria</a>
          </Link>

          <Link href="/product">
            <a>Cardápio</a>
          </Link>

          <button onClick={signOut}>
            <FiLogOut
              color="#ffffff"
              size={24}
            />
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Header;
