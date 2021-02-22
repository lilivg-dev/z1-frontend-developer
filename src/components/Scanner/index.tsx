import React from 'react';
import {
  Container,
  EmptyCard,
  ApCard,
  ApStatus,
  Check,
  RjCard,
  RjStatus,
  Times,
  IMG,
} from './style';
import Button from '../Button';
import { Props } from './types';
import { Status } from '../../App';
import svg from '../../images/IDbg.svg';

function Scanner({ changeStatus, status, image }: Props) {
  const changeToAnotherStatus = () => {
    changeStatus(Status.LowLight);
    setTimeout(() => {
      changeStatus(Status.PictureTaken);
    }, 1000);
  };

  return (
    <>
      <Container>
        <h1>Scan your ID</h1>
        <p>
          Take a picture. It may take time to validate your personal
          information.
        </p>

        {status === Status.Initial ? (
          <EmptyCard>
            <img src={svg} alt='' />
            <Button onClick={changeToAnotherStatus}>TAKE PICTURE</Button>
          </EmptyCard>
        ) : null}
        {status === Status.Approved ? (
          <ApCard>
            <IMG src={image} alt='' />
            <ApStatus>
              <Check className='fas fa-check'></Check> ACCEPTED
            </ApStatus>
          </ApCard>
        ) : null}
        {status === Status.Rejected ? (
          <RjCard>
            <IMG src={image} alt='' />
            <Button onClick={changeToAnotherStatus}>RETAKE PICTURE</Button>
            <RjStatus>
              <Times className='fas fa-times'></Times> REJECTED
            </RjStatus>
          </RjCard>
        ) : null}
      </Container>
    </>
  );
}

export default Scanner;
