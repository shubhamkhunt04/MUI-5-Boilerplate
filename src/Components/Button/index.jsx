// * React Imports
import React from 'react';

// * Mui Imports
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// * Other Imports
import { hexToRGBA } from '../../helpers';

const Button = (props) => {
  const StyledButton = styled(MuiButton)(({ theme }) => ({
    textTransform: 'capitalize',
    borderRadius: '0.625rem',
    // * variant
    '&.MuiButton-contained': {
      color: theme.palette.white,
    },
    '&.MuiButton-outlinedPrimary': {
      border: `0.0625rem solid ${theme.palette.primary.main}`,
      '&:hover': {
        backgroundColor: hexToRGBA(theme.palette.primary.dark, 0.15),
      },
    },
    '&.MuiButton-outlinedSecondary': {
      border: `0.0625rem solid ${theme.palette.secondary.main}`,
      '&:hover': {
        backgroundColor: hexToRGBA(theme.palette.secondary.dark, 0.15),
      },
    },

    // * size
    '&.MuiButton-sizeSmall': {
      width: '7.75rem',
      height: '3rem',
    },
    '&.MuiButton-sizeMedium': {
      width: '8.75rem',
      height: '3.25rem',
    },
    '&.MuiButton-sizeLarge': {
      width: '12.5rem',
      height: '3.5rem',
    },

    // * enable-disable
    '&.Mui-disabled': {
      backgroundColor: hexToRGBA(
        props?.color === 'secondary'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
        0.6
      ),
      color: hexToRGBA(theme.palette.white, 0.6),
    },
  }));

  return <StyledButton {...props} />;
};

export default Button;
