import React from 'react';
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from '@chakra-ui/react'

const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] =  useMediaQuery('(min-width: 600px)')
    
    return (
        <Stack>
            {isNotSmallerScreen && (
                <Circle
                    position="absolute"
                    bg="blue.100"
                    opacity="0.1"
                    w="200px"
                    h="200px"
                    alignSelf="flex-end"
                />
            )}

            <Flex direction={isNotSmallerScreen ? 'row' : 'column'} 
            spacing="200px"
            p={isNotSmallerScreen?"28":0}
            alignSelf="flex-start"
            >
                <Box mt={isNotSmallerScreen?0:16} alignSelf="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                    bgClip="text">Yathuraj</Text>
                    <Text color={isDark?"gray.200":"gray.500"}>Undergraduate at Sabaragamuwa University</Text>
                    <Button mt="8" colorScheme='blue'>Hire Me</Button>
                </Box>
                <Image
                mt={isNotSmallerScreen?"0":"12"}
                mb={isNotSmallerScreen?"0":"12"}
                    alignSelf="center"
                    borderRadius="full"
                    backgroundColor="transparent"
                    boxShadow="lg"
                    boxSize="200px"
                    zIndex={1}
                    src='https://pbs.twimg.com/profile_images/1645426127601799168/E5gf-y0v_400x400.jpg'
                />
            </Flex>
        </Stack>
    );
}

export default Header;
