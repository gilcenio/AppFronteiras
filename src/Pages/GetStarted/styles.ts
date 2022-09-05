import styled from "styled-components/native";
import { WindowHeight } from "../../Functions/WindowHeight";
import { WindowWidth } from "../../Functions/WindowWidth";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.Blue};
`
export const ContainerAnimations = styled.View`
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.Blue};
  padding-top: 50px;
`
export const ContainerButton = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.Blue_01};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`
export const Button = styled.TouchableOpacity`
  height: ${WindowHeight(0.06)};
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.Blue};
  border-radius: 10px;
  flex-direction: row;
  padding: 0 10px;
`
export const ButtonText = styled.Text`
  font-size: ${WindowWidth(0.08)};
  font-family: ${({theme}) => theme.fonts.Roboto_700Bold};
  color: ${({theme}) => theme.colors.Blue_01};
  margin-right: ${WindowWidth(0.09)};
`
