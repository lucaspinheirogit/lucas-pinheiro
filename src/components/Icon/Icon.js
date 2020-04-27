import React from 'react'

import { Item, Icon, Text } from './Icon.styled'

export default ({ url, src, text, ...props }) => (
  <Item href={url} target="_blank" {...props}>
    <Icon src={src} />
    <Text>{text}</Text>
  </Item>
)
