import styled from "styled-components/native";
import { WindowWidth } from "../../Functions/WindowWidth";

interface propsColorSelected{
  selected: string
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.White};
`
export const Selects = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const ButtonSelect = styled.TouchableOpacity<propsColorSelected>`
  width: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-bottom-width: 2px;
  border-color: ${({selected}) => selected};
`
export const ButtonText = styled.Text<propsColorSelected>`
  font-size: ${WindowWidth(0.07)};
  font-family: ${({theme}) => theme.fonts.Roboto_400Regular};
  color: ${({selected}) => selected};
`