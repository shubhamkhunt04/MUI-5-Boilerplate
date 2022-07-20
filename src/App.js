import React from 'react';
import { Box } from '@mui/material';
import Button from './Components/Button';

const App = () => {
  return (
    <Box bgcolor='#140838' height='100vh' p={10}>
      <Box display='flex' justifyContent='center' gap={2} m={10}>
        <Button variant='contained' size='large'>
          Next Step
        </Button>
        <Button variant='contained' size='medium'>
          Next Step
        </Button>
        <Button variant='contained' size='small'>
          Next Step
        </Button>
      </Box>

      <Box display='flex' justifyContent='center' gap={2} m={10}>
        <Button variant='outlined' size='large'>
          Next Step
        </Button>
        <Button variant='outlined' size='medium'>
          Next Step
        </Button>
        <Button variant='outlined' size='small'>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default App;
