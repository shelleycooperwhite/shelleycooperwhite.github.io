import React from "react"
import { Heading, Stack, Text } from "@chakra-ui/core"
import { Page } from "../components/Page"
import { ContactIconLink } from "../components/ContactIconLink"

import MdMail from 'react-ionicons/lib/MdMail'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedIn'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'

export default function Home() {
  return (
    <Page>
      <Stack spacing={10}>
      <Heading as="h1" size="xl" color="blue.900" py={2} fontFamily="karma">
        Hey, I'm Shelley. 👋
      </Heading>
      <Stack>
        <Text>
          // todo: website
        </Text>
      </Stack>
      <Stack color="blue.900" isInline={true}>
        <ContactIconLink Icon={MdMail} text="hello@shelley.io" URL="mailto:hello@shelley.io"/>
        <ContactIconLink Icon={LogoTwitter} text="@_shellco" URL="https://twitter.com/_shellco"/>
        <ContactIconLink Icon={LogoGithub} text="@shelleycooperwhite" URL="https://github.com/shelleycooperwhite/"/>
        <ContactIconLink Icon={LogoLinkedIn} text="Shelley Cooper-White" URL="https://www.linkedin.com/in/shelley-c/"/>
      </Stack>
      </Stack>
    </Page>
  )
}
