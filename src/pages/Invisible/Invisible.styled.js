import styled from 'styled-components'

import { responsive } from 'utils'

export const Container = styled.div`
  height: 40vh;
  backdrop-filter: ${({ filter }) => filter};

  @media ${responsive.md} {
    height: 50vh;
  }
`
