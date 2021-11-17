import {
  Box,
  chakra,
  Flex,
  Image,
  useColorModeValue,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Button
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

  const[synopsisState, setSynopsisState] = useState('flex');

  useEffect(() => {
    setSynopsisState(synopsisState)
  }, [synopsisState])

  return (
    <Flex
      p={50}
      w="30%"
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
            minHeight='55px'
          >
            {seriesTitle.length > 30 ? seriesTitle.slice(0, 30) + '...' : seriesTitle}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
            minHeight='65px'
            display={synopsisState}
          >
            {synopsis.slice(0, 90) + '...'}
          </chakra.p>
          <Accordion allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      onClick={() => synopsisState == 'flex' ?  setSynopsisState('none') : setSynopsisState('flex')}
                    >
                      <Box flex="1" textAlign="left">
                        See more
                      </Box>
                      {/* {!isExpanded ? () => (setSynopsisState('flex')) : () => (setSynopsisState('none'))} */}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {synopsis}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            </Accordion>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={coverImage}
          alt="cover"
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={6}
          py={4}
          // bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="sm">
            {`updated: ${updated_at.slice(0, 9)}`}
          </chakra.h1>
          <Button
            px={2}
            py={1}
            height='30px'
            bg="red.400"
            fontSize="xx-small"
            color="white"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "red.300",
            }}
            _focus={{
              bg: "red.600",
            }}
          >
            <Link href={`/mangas/${seriesId}`} >
              <a>Details</a>

            </Link>

          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default MangaCard;