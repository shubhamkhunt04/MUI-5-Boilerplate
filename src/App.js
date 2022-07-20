// * React Imports
import React from 'react';

// * Mui Imports
import { Box } from '@mui/material';

// * Components Imports
import Button from './Components/Button';

const App = () => {
  return (
    <Box bgcolor='#140838' height='100vh' p={10}>
      {/* Large Buttons */}
      <Box
        display='flex'
        justifyContent='center'
        gap={2}
        m={10}
        alignItems='center'
      >
        <Button variant='contained' size='large'>
          Next Step
        </Button>
        <Button variant='contained' color='secondary' size='large'>
          Next Step
        </Button>
        <Button variant='outlined' size='large'>
          Leave
        </Button>
        <Button variant='outlined' color='secondary' size='large'>
          Leave
        </Button>
        <Button variant='contained' size='large' disabled>
          Next Step
        </Button>
        <Button variant='contained' color='secondary' size='large' disabled>
          Next Step
        </Button>
      </Box>

      {/* Medium Buttons */}
      <Box
        display='flex'
        justifyContent='center'
        gap={2}
        m={10}
        alignItems='center'
      >
        <Button variant='contained'>Next Step</Button>
        <Button variant='contained' color='secondary'>
          Next Step
        </Button>
        <Button variant='outlined'>Leave</Button>
        <Button variant='outlined' color='secondary'>
          Leave
        </Button>
        <Button variant='contained' disabled>
          Next Step
        </Button>
        <Button variant='contained' color='secondary' disabled>
          Next Step
        </Button>
      </Box>

      {/* Small Buttons */}
      <Box
        display='flex'
        justifyContent='center'
        gap={2}
        m={10}
        alignItems='center'
      >
        <Button variant='contained' size='small'>
          Next Step
        </Button>
        <Button variant='contained' color='secondary' size='small'>
          Next Step
        </Button>
        <Button variant='outlined' size='small'>
          Leave
        </Button>
        <Button variant='outlined' color='secondary' size='small'>
          Leave
        </Button>
        <Button variant='contained' size='small' disabled>
          Next Step
        </Button>
        <Button variant='contained' color='secondary' size='small' disabled>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default App;
