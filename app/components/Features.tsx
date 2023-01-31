import React from 'react'
import { Box, HStack, Icon, Text, Flex} from "@chakra-ui/react"
import shieldStarIcon from '../icons/shieldStarIcon'
import keyChainStarIcon from '../icons/keyChainStarIcon'
import recycleIcon from '../icons/recycleIcon'

export default function Features() {
    return (
        <Box maxW={"800px"} m="auto" mt={"20px"} px="30px">
            <Flex direction={{base: "column", md: "row", lg: "row"}}>
                <HStack mb="20px">
                    <Icon as={shieldStarIcon} />
                    <Text>30 days money back Guarantee</Text>
                </HStack>

                <HStack mb="20px">
                    <Icon as={keyChainStarIcon} />
                    <Text>No setup fees 100% hassle-free</Text>
                </HStack>

                <HStack mb="20px">
                    <Icon as={recycleIcon} />
                    <Text>No monthly subscription Pay once and for all</Text>
                </HStack>
            </Flex>
        </Box>
    )
}
