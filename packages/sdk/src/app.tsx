import React from 'react'
import styled from 'styled-components'

import { GlobalStyles } from './styles/GlobalStyles'

const Main = styled.div`
  width: 100vw;
  height: 100vh;
`

const Text = styled.div`
  width: 200px;
  height: 100px;
  border: solid red 1px;
`

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Text>Hello World</Text>
      </Main>
    </>
  )
}

export default App
