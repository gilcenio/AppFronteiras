import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const ImageContainer = styled.Image`
  flex: 1;
  height: undefined;
  width: undefined;
`
export const TitleApp = styled.Text`
  font-family: ${({theme}) => theme.fonts.Roboto_700Bold};
  font-size: 30px;
  color: ${({theme}) => theme.colors.White};
`
export const ContainerTitle = styled.View`
  justify-content: center;
  align-items: center;
`
