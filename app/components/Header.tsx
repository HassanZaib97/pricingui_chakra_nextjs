import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react"

export default function Header() {
  return (
    <Box
    textAlign={{base:"left", md: "center", lg: "center" }}
    p="15px"
    bg="#6846C1"
    pt="88.45px"
    pb="198"
    color="white">
        <Heading>Simple pricing for your business</Heading>
        <Text pt="16.08">Plans that are carefully crafted to suit your business</Text>
    </Box>
  )
}
