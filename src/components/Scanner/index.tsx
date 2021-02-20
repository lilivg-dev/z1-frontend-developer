import React from 'react';
import { Container, EmptyCard, IDbg } from './style';
import Button from '../Button';
import { Props } from './types';

function Scanner({ openCamera }: Props) {
  return (
    <>
      <Container>
        <h1>Scan your ID</h1>
        <p>
          Take a picture. It may take time to validate your personal
          information.
        </p>
        <EmptyCard>
          <IDbg />
          <Button onClick={openCamera}>TAKE PICTURE</Button>
        </EmptyCard>
      </Container>
    </>
  );
}

export default Scanner;
