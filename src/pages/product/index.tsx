import React, { ChangeEvent, useState } from 'react';
import Head from 'next/head';

import { FiUpload } from 'react-icons/fi';
import styles from './styles.module.scss';

import { canSSRAuth } from '../../utils/canSSRAuth';

import Header from '../../components/Header';

function Product() {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [imageAvatar, setImageAvatar] = useState(null);

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    };

    const image = event.target.files[0];
    if (!image) {
      return;
    };

    if (image.type === 'image/jpeg' || image.type === 'image.png') {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(event.target.files[0]));
    };
  };

  return (
    <>
      <Head>
        <title>Novo produto - Sujeito Pizzaria</title>
      </Head>

      <div>
        <Header />

        <main className={styles.container}>
          <h1>Novo Produto</h1>

          <form className={styles.form}>
            <label className={styles.labelAvatar}>
              <span>
                <FiUpload
                  size={30}
                  color="#ffffff"
                />
              </span>

              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFile}
              />

              {avatarUrl && (
                <img
                  className={styles.preview}
                  src={avatarUrl}
                  alt="Foto do produto"
                  width={250}
                  height={250}
                />
              )}

            </label>

            <select>
              <option>
                Bebida
              </option>
              <option>
                Pizzas
              </option>
            </select>

            <input
              className={styles.input}
              type="text"
              placeholder="Digite o nome do produto"
            />

            <input
              className={styles.input}
              type="text"
              placeholder="Preço do produto"
            />

            <textarea
              className={styles.input}
              placeholder="Descreva seu produto..."
            />

            <button
              className={styles.buttonAdd}
              type="submit"
            >
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Product;

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {},
  };
});
