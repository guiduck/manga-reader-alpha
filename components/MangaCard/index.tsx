import { Box, chakra, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

type Manga = {
  coverImage: string,
  genre: string[]
  seriesId: number
  seriesTitle: string
  synopsis: string
  updated_at: string
}

const MangaCard: React.FC<Manga> = ({
  coverImage,
  genre,
  seriesId,
  seriesTitle,
  synopsis,
  updated_at
}) => {

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="33%"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="xs"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="lg"
            textTransform="uppercase"
          >
            {seriesTitle}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {synopsis.slice(0, 150)}
          </chakra.p>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={coverImage}
          alt="NIKE AIR"
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            {updated_at}
          </chakra.h1>
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
          >
            Add to list
          </chakra.button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default MangaCard;