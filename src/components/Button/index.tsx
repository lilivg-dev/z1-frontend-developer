import React from 'react';
import { Props } from './types';
import { Container } from './style';

function Button({ children, onClick }: Props) {
  return <Container onClick={onClick}>{children}</Container>;
}

export default Button;
