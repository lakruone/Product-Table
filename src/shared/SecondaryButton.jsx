import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    float: right;
    border-color: #fdc404;
    border-radius: 20px;
    color: black;
    width: 160px;
    height: 45px;
    margin: 20px 0;
    text-transform: none;
    &:hover {
      background: #ffea00;
      border-color: #fdc404;
    }
  }
`;

const SecondaryButton = ({children, onClick, sx}) => {
  return (
    <StyledButton variant="outlined" sx={sx} onClick={onClick}>{children}</StyledButton>
  )
}

export default SecondaryButton