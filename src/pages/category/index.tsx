import React, { FormEvent, useState } from 'react';
import Head from 'next/head';

import styles from './styles.module.scss';

import Header from '../../components/Header';

function Category() {
  const [name, setName] = useState('');

  async function handleRegister(event: FormEvent) {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Nova categoria - Sujeito Pizzaria</title>
      </Head>

      <div>
        <Header />

        <main className={styles.container}>
          <h1>Cadastrar categorias</h1>

          <form
            className={styles.form}
            onSubmit={handleRegister}
          >
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <button
              type="submit"
              className={styles.buttonAdd}
            >
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Category;
