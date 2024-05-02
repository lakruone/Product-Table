import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    float: right;
    background: #fdc404;
    border-radius: 20px;
    color: black;
    width: 160px;
    height: 45px;
    margin: 20px 0;
    text-transform: none;
    &:hover {
      background: #ffea00;
    }
  }
`;

const PrimaryButton = ({children, onClick, sx, type}) => {
  return (
    <StyledButton variant="contained" sx={sx} onClick={onClick} type={type}>{children}</StyledButton>
  )
}

export default PrimaryButton