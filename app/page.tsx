"use client"

import { Text } from "@chakra-ui/layout"
import { ChakraProvider, Heading } from "@chakra-ui/react"
import Features from "./components/Features"
import Header from "./components/Header"
import Practice from "./components/practice"
import Pricing from "./components/Pricing"

export default function Home() {
  return (
    <ChakraProvider>
      {/* <Practice/> */}
      <Header/>
      <Pricing/>
      <Features/>
    </ChakraProvider>
  )
}