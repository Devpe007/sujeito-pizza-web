import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input/index';
import { Button } from '../../components/ui/Button/index';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu cadastro</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

        <div className={styles.login}>
          <h1>Criando sua conta</h1>

          <form action="">
            <Input
              placeholder="Digite seu nome"
              type="text"
            />

            <Input
              placeholder="Digite seu email"
              type="text"
            />

            <Input
              placeholder="Sua senha"
              type="password"
            />

            <Button
              type="submit"
              loading={false}
            >
              Cadastrar
            </Button>
          </form>

          <Link href="/">
            <a className={styles.text}> Já possui uma conta? Faça login </a>
          </Link>

        </div>
      </div>
    </>
  );
}
