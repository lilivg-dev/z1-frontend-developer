import React from 'react';
import { Container, EmptyCard, CancelBtn } from './style';
import { Props } from './types';

function Cam({ closeCamera }: Props) {
  return (
    <>
      <Container>
        <h1>Take picture</h1>
        <p>
          Fit your ID card inside the frame. The picture will be taken
          automatically.
        </p>
        <EmptyCard></EmptyCard>
        <CancelBtn onClick={closeCamera}>CANCEL</CancelBtn>
      </Container>
    </>
  );
}

export default Cam;
