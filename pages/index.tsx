import { Flex } from '@chakra-ui/react';

import React from 'react';
import Dashboard from '../components/Dashboard';

const Home: React.FC = () => {
  return (
    <Flex>
      <Dashboard />
    </Flex>
  )
}

export default Home;