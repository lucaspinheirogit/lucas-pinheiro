import React from 'react'

import { Item, Icon, Text } from './Icon.styled'

export default ({ url, src, alt, text, ...props }) => (
  <Item href={url} target="_blank" rel="noopener noreferrer" {...props}>
    <Icon alt={alt || text} src={src} />
    <Text>{text}</Text>
  </Item>
)
