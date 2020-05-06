import styled from 'styled-components'

import { responsive } from 'utils'

export const Container = styled.div`
  height: 60vh;
  background-image: ${({ imgsrc }) => `url(${imgsrc})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;

  @media ${responsive.md} {
    height: 75vh;
  }
`
