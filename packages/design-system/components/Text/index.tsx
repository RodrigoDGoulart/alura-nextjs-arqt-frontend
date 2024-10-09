import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  font-family: sans-serif;
`;

interface TetxProps {
  tag: 'h1' | 'h2',
  children: React.ReactNode,
}

export function Text({tag, children, ...props}: TetxProps) {
  return (
    <StyledText as={tag}>
      {children}
    </StyledText>
  )
}
