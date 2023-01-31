import React from 'react'
import { Box, Flex, Text, Heading, Button, HStack, Icon } from "@chakra-ui/react"
import checkMarkicon from '../icons/checkMarkIcon'

export default function Pricing() {
    return (
        /* Box Container */
        <Box 
        maxW={"850px"}
        mx={{base: "20px", md: "20px", lg: "auto"}}
        mt="-170px"
        bg="white"
        shadow={'2xl'}
        borderRadius="2xl"
        overflow={"hidden"}
        
        >
            <Flex direction={{base: "column", md: "row", lg: "row"}}>
                {/* left Box */}
                <Box bg={"#cbb8ee"} p="60px" textAlign={"center"}>
                    <Text fontWeight={"bold"} fontSize="24px">Premium Pro</Text>
                    <Heading fontSize={"60px"}>$329</Heading>
                    <Text>builled just once</Text>
                    <Button bg="#6846C1" color="white" w="282px" mt="24px">Get Started</Button>
                </Box>

                {/* right Box */}
                <Box mt="48px" mr='48px' ml="48px">
                    <Text mb="24px">Access these features when you get this pricing package for your business</Text>
                    <HStack mb="16px">
                        <Icon as={checkMarkicon}/>
                        <Text>International calling and messaging API</Text>
                       </HStack>

                       <HStack mb="16px">
                        <Icon as={checkMarkicon}/>
                        <Text>Additional phone numbers</Text>
                        </HStack>

                        <HStack mb="16px">
                            <Icon as={checkMarkicon} />
                            <Text>Automated messages via Zapier</Text>
                        </HStack>

                        <HStack mb="16px">
                            <Icon as={checkMarkicon} />
                            <Text>24/7 support and consulting</Text>
                        </HStack>
                </Box>
            </Flex>
            {/* Box container end */}
        </Box>
    )
}
