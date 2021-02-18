import React from 'react';
import { Props } from './types';
import { Container } from './styles';

function Button({ children }: Props) {
  return <Container>{children}</Container>;
}

export default Button;
