import React from 'react';
import Header from '../../components/Header';
import Scanner from '../../components/Scanner';
import { Props } from './types';

function Home({ openCamera }: Props) {
  return (
    <>
      <Header />
      <Scanner openCamera={openCamera} />
    </>
  );
}

export default Home;
