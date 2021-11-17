import { Flex, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MangaCard from '../MangaCard';
import axios from 'axios';

type Options = {
  method: string,
  url: string,
  headers: object
}

type Manga = {
  chaptersUrl: string,
  coverImage: string,
  created_at: string,
  genre: string[],
  selfUrl: string,
  seriesId: number,
  seriesSlug: string,
  seriesTitle: string,
  sourceUrl: string,
  synopsis: string,
  updated_at: string,
}

const MangaList: React.FC = () => {
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      url: 'https://manga-scrapper-for-asura-scans-website.p.rapidapi.com/series',
      headers: {
        'x-rapidapi-host': 'manga-scrapper-for-asura-scans-website.p.rapidapi.com',
        'x-rapidapi-key': '0b8b88299dmsh633d177b4830bb2p1f4e62jsn9a410c7e91fc'
      }
    };

    const loadData = async () => {
      try {
        const response = await axios.get(options.url, options);
        return response.data;
      } catch(error) {
        setError(error)
        console.error(error);
      }
    }

    (async()=> {
      const data: Manga[] = await loadData();
      if (data) {
        setMangas(data);
      }
      console.log(mangas)
    })()
  }, [])

  return (

    <Flex wrap='wrap' justifyContent='center' alignItems='center' bg={useColorModeValue("#F9FAFB", "gray.600")}>
      {mangas ? mangas.map((manga) => {
        return (
          <MangaCard
            coverImage = {manga.coverImage}
            genre = {manga.genre}
            seriesId = {manga.seriesId}
            seriesTitle = {manga.seriesTitle}
            synopsis = {manga.synopsis}
            updated_at = {manga.updated_at}
          />
        )
      }) : <div>Loading...</div>}
    </Flex>
  );
}

export default MangaList;