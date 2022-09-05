import React, { useState } from 'react'
import Country from '../../Components/Country'
import Useres from '../../Components/Useres'
import theme from '../../Global/Styles/theme'
import { ButtonSelect, ButtonText, Container, Selects } from './styles'

export default function Home() {
  const [OnSelect, setOnSelect] = useState(true)

  return (
    <Container>
      <Selects>

        <ButtonSelect 
          selected={OnSelect ? theme.colors.Blue_01 : theme.colors.Grey}
          onPress={() => setOnSelect(true)}
        >
          <ButtonText 
            selected={OnSelect ? theme.colors.Blue_01 : theme.colors.Grey}
          >
            Paises
          </ButtonText>
        </ButtonSelect>
        
        <ButtonSelect 
          selected={!OnSelect ? theme.colors.Blue_01 : theme.colors.Grey}
          onPress={() => setOnSelect(false)}
        >
          <ButtonText
            selected={!OnSelect ? theme.colors.Blue_01 : theme.colors.Grey}
          >
            Usuarios
          </ButtonText>
        </ButtonSelect>

      </Selects>

      {!OnSelect ? <Useres/> : <Country/>}
    </Container>
  )
}
