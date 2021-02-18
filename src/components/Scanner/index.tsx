import React from 'react';
import { Container, EmptyCard, IDbg } from './styles';
import Button from '../Button';

function Scanner() {
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
          <Button>TAKE PICTURE</Button>
        </EmptyCard>
      </Container>
    </>
  );
}

export default Scanner;
