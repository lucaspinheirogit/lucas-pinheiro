import styled from 'styled-components'

import { responsive } from 'utils'

export const Container = styled.div`
  height: 40vh;
  backdrop-filter: blur(5px);

  @media ${responsive.md} {
    height: 50vh;
  }
`
