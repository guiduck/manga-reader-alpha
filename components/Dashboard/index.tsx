import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import MangaList from '../MangaList';

const Dashboard: React.FC = () => {

  return (
    <>
      <Head>
        <title>Dashboard | Home</title>
        <meta name='keywords' content='' />
      </Head>
      <Box width='100%' rounded='lg'>
        <Flex direction='column' justifyContent='center' alignItems='center'>
          <Heading m={10} textAlign='center'>
            Dashboard
          </Heading>
          <Flex width='80%' >
            <MangaList />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Dashboard;