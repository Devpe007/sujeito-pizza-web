import React from 'react';
import Head from 'next/head';

import { FiRefreshCcw } from 'react-icons/fi';
import styles from './styles.module.scss';

import { canSSRAuth } from '../../utils/canSSRAuth';

import Header from '../../components/Header';

function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - Sujeito Pizzaria</title>
      </Head>

      <div>
        <Header />

        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Últimos pedidos</h1>
            <button>
              <FiRefreshCcw
                color="#3fffa3"
                size={25}
              />
            </button>
          </div>

          <article className={styles.listOrders}>
            <section className={styles.orderItem}>
              <button>
                <div className={styles.tag} />
                <span>Mesa 30</span>
              </button>
            </section>
          </article>
        </main>
      </div>
    </>
  );
};

export default Dashboard;

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {},
  };
});
