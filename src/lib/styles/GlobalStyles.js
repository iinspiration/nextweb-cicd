import React from 'react'
import { css, Global } from '@emotion/core'
import colors from '@features/_ui/config/colors'

import normalize from './normalize'

const baseStyles = css`
  ${normalize}
  html,
  body {
    padding: 3rem 1rem;
    margin: 0;
    min-height: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: ${colors.text.dark};
    line-height: 1.5;
  }
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  a {
    color: ${colors.link};
    font-weight: bold;
  }
  h1,
  h2,
  h3 {
    color: ${colors.link};
  }
  h2 {
    border-bottom: 1px solid ${colors.background.darkGray};
    padding-bottom: 10px;
  }
  h3 {
    font-size: 24px;
    margin: 5px 0;
  }
  a,
  button {
    outline: none;
    cursor: pointer;
  }
`

export default function GlobalStyles() {
  return (
    <React.Fragment>
      <Global styles={baseStyles} />
    </React.Fragment>
  )
}
