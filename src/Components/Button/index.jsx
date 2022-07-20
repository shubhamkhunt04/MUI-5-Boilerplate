import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { hexToRGBA } from '../../helpers';

const Button = (props) => {
  const StyledButton = styled(MuiButton)(({ theme }) => ({
    textTransform: 'capitalize',
    borderRadius: '10px',
    borderColor: theme.palette.primary.dark,
    '&.MuiButton-outlined': {
      '&:hover': {
        backgroundColor: hexToRGBA(theme.palette.primary.dark, 0.15),
      },
    },
  }));

  return <StyledButton {...props} />;
};

export default Button;
