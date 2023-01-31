import React from 'react'
import { ChakraProvider, Heading, Text } from "@chakra-ui/react"

export default function practice() {
  return (
    <>
      <h1 style={{ color: "blue", fontSize: "20px" }}>Hello Heading by h1</h1>
      <h2>World heading by h2</h2>
      <p>This is a paragraph</p>
      <Heading>
        This is default heading by chakra
      </Heading>
      <Heading as="h1" color="red" fontSize="48px">
        this is h1 heading by chakra
      </Heading>
      <Heading as="h3" color={"blue"}>
        this is h3 heading by chakra
      </Heading>
      <Text fontWeight="bold"> This is para by chakra</Text>
      <Heading>Flex Box in HTML/CSS</Heading>
      <div style={{
        color: "white", display: "flex", justifyContent: "center", backgroundColor: "green",
        height: "500px", alignItems: "center"
      }}>
        <div style={{ backgroundColor: "red", padding: "50px", height:"100px"}}>div1</div>
        <div style={{ backgroundColor: "blue", padding: "50px", height:"100px" }}>div2</div>
        <div style={{ backgroundColor: "orange", padding: "50px" , height:"100px"}}>div3</div>
      </div>
    </>
  )
}
