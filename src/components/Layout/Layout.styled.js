import styled from 'styled-components'

import { Wallpaper, WallpaperMobile } from 'assets/images'
import { responsive } from 'utils'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  &::before {
    content: ' ';
    position: fixed;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background: url(${WallpaperMobile}) no-repeat center center;
    background-size: cover;
    will-change: transform;
    z-index: -1;
  }

  @media ${responsive.md} {
    &::before {
      background: url(${Wallpaper}) no-repeat center center;
      background-size: cover;
    }
  }
`
