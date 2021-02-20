import React from 'react';
import Cam from '../../components/Cam';
import { Props } from './types';

function Camera({ closeCamera }: Props) {
  return (
    <>
      <Cam closeCamera={closeCamera} />
    </>
  );
}

export default Camera;
