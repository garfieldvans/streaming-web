import {
  Box,
  Image,
  Text,
  Wrap,
  WrapItem,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@chakra-ui/react";
import { fetchAnimeData } from "../components/API/apitest";
import { useEffect, useState } from "react";

const ZoomableCard = motion(Card);

const HomeSection = () => {
  const pxValue = useBreakpointValue({ base: "4", md: "135" });
  const cardHeight = useBreakpointValue({ base: "160", md: "270" });

  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await fetchAnimeData();
        setAnimeData(datas.data);
        // console.log(datas.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box bgColor="black" color="white" px={pxValue} pt='30px'>
      <Wrap spacing="0" justify="center">
        {animeData.map((item) => (
          <WrapItem key={item.mal_id}>
            <ZoomableCard
              width="200px"
              bgColor="black"
              height="270px"
              color="white"
              _hover={{ cursor: "pointer", scale: 1.1 }}
              style={{
                marginRight: 10,
                marginBottom: 50,
                padding: 0,
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              as='a'
              href='/Detail'
            >
              <Image
                src={item.images.jpg.image_url}
                alt={item.title}
                borderRadius="sm"
                height={cardHeight}
                objectFit="cover"
              />
              <Box
                bgGradient={`linear(to-b, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.9) 100%)`}
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity={0}
                transition="opacity 0.2s"
                _hover={{ opacity: 40 }}
              >
              <Text
                    fontSize="14px"
                    fontWeight="bold"
                    color="white.400"
                    opacity={100}
                    position="absolute"
                    top="10px"
                    left="50%"
                    transform="translateX(-50%)"
                    // _hover={{ opacity: 1 }}
                  >
                    Score: {item.score}
                  </Text>
              
                <Flex
                  direction="column"
                  justify="flex-end"
                  align="center"
                  height="100%"
                >
                  <Text
                    fontSize="10pt"
                    textAlign="center"
                    fontWeight="700"
                    p="1"
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    color="white"
                  >
                    <Flex
                      display="flex"
                      flexDirection="column"
                      height="80px"
                    >
                      <Box height="30px" />
                      <Box>{item.title}</Box>
                      <Box>{item.year}</Box>
                    </Flex>
                  </Text>
                </Flex>
            
              </Box>
            </ZoomableCard>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default HomeSection;
