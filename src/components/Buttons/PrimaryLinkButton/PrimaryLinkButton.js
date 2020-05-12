import React from 'react'

import { Button } from './PrimaryLinkButton.styled'

const PrimaryLinkButton = ({ label, size = 'medium', ...props }) => (
  <Button size={size} {...props}>
    {label}
  </Button>
)

export default PrimaryLinkButton
