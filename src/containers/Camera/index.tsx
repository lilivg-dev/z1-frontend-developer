import React, { useCallback, useEffect } from 'react';
import { Props } from './types';
import {
  Container,
  CameraCard,
  CancelBtn,
  Message,
  Check,
  LightBulb,
} from './style';
import { Status } from '../../App';

function Camera({ changeStatus, status, image }: Props) {
  const changeToInitial = useCallback(() => {
    changeStatus(Status.Initial);
    console.log(status);
  }, [changeStatus, status]);

  const mounted = true;

  useEffect(() => {
    if (!mounted)
      return () => {
        if (status === Status.PictureTaken) {
          setTimeout(() => {
            fetch('https://front-exercise.z1.digital/evaluations', {
              method: 'POST',
              body: image,
            })
              .then((response) => response.json())
              .then((response) => {
                if (response.summary.outcome === 'Approved') {
                  changeStatus(Status.Approved);
                } else {
                  changeStatus(Status.Rejected);
                }
              });
          }, 1500);
        }
      };
  }, [status, changeStatus, image, mounted]);

  return (
    <Container>
      <h1>Take picture</h1>
      <p>
        Fit your ID card inside the frame. The picture will be taken
        automatically.
      </p>
      <CameraCard status={status}>
        <img src={image} alt='' />
      </CameraCard>

      <Message>
        {status === Status.PictureTaken ? (
          <>
            <Check className='far fa-check-circle'></Check> Picture taken!
          </>
        ) : (
          <>
            <LightBulb className='far fa-lightbulb'></LightBulb> Room lighting
            is too low
          </>
        )}
      </Message>

      <CancelBtn onClick={changeToInitial}>CANCEL</CancelBtn>
    </Container>
  );
}

export default Camera;
