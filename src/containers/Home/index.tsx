import React from 'react';
import Header from '../../components/Header';
import Scanner from '../../components/Scanner';
import { Props } from './types';

function Home({ changeStatus, status, image }: Props) {
  return (
    <>
      <Header />
      <Scanner changeStatus={changeStatus} status={status} image={image} />
    </>
  );
}

export default Home;
