import React from "react"

import { Box, CSSReset } from "@chakra-ui/core"

type Page = React.FC

export const Page: Page = ({ children }) => {
  return (
    <>
      <CSSReset/>
      <Box width={["100%", "75%", "50%"]} m={["50px auto"]} px={["20px", 0]}>
        {children}
      </Box>
    </>
  )
}
