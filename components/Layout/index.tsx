import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <Flex alignItems='center' direction='column' w='full'>
      <NavBar />
        {children}
      <Footer />
    </Flex>
  );
}

export default Layout;