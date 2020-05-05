import React from 'react'

import { Button } from './PrimaryButton.styled'

const PrimaryButton = ({ label, handleClick, size = 'medium', ...props }) => (
  <Button onClick={handleClick} size={size} {...props}>
    {label}
  </Button>
)

export default PrimaryButton
