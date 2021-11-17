import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import MangaList from '../../components/MangaList';

const Mangas: React.FC = () => {
  return (
    <Box width='100%' rounded='lg'>
      <Flex width='100vw' direction='column' justifyContent='center' alignItems='center'>
        <Heading m={10} textAlign='center'>
          Mangas
        </Heading>
        <Flex width='100%' >
          <MangaList />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Mangas;