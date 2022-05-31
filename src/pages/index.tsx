import React, { useContext, FormEvent, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

import { AuthContext } from '../contexts/AuthContext';

import { caSSRGuest } from '../utils/canSSRGuest';

import { Input } from '../components/ui/Input/index';
import { Button } from '../components/ui/Button/index';

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      toast.warn('Preencha todos campos corretamente.');

      return;
    };

    setLoading(true);

    const data = {
      email,
      password,
    };

    await signIn(data);

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Acessar
            </Button>
          </form>

          <Link href="/signup">
            <a className={styles.text}> Não possui uma conta? Cadastre-se </a>
          </Link>

        </div>
      </div>
    </>
  );
}

export const getServerSideProps = caSSRGuest(async (context) => {
  return {
    props: {},
  };
});
