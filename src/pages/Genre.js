import {
  Box,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Card } from "@chakra-ui/react";
import { fetchAnimeGenres } from "../components/API/apitest";
import { useEffect, useState } from "react";

const ZoomableCard = motion(Card);

const GenreSection = () => {
  const pxValue = useBreakpointValue({ base: "4", md: "135" });

  const [animeGenres, setAnimeGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genresData = await fetchAnimeGenres();
        setAnimeGenres(genresData.data);
        console.log(genresData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box bgColor="black" color="white" px={pxValue} pt="30px">
      <Flex flexDirection="column">
        {animeGenres.map((item) => (
          <Flex key={item.mal_id} flexDirection="column">
            <Text>{item.name}</Text>
            <Box as="a" href={item.url} height='30' width='70' bgColor='tomato'>
            <Text>Get Data</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default GenreSection;
