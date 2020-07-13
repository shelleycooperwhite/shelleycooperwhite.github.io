import { Icon, Link, PseudoBox } from "@chakra-ui/core"
import React from "react"

import MdMail from 'react-ionicons/lib/MdMail'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedIn'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'

type ContactIconLink = React.FC<{
  Icon: MdMail | LogoGithub | LogoLinkedIn | LogoTwitter
  text: string
  URL: string
}>

export const ContactIconLink: ContactIconLink = ({ Icon, text, URL }) => {
  let [isHovering, setIsHovering] = React.useState(false)

  return (
    <PseudoBox>
      <Link
        href={URL}
        target="_blank"
        display="inline-block"
        mr={2}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <Icon fontSize="32px" color={isHovering ? "#ecc94b" : "#1a365d"}/>
      </Link>
    </PseudoBox>
  )
}