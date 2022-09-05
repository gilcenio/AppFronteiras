import styled from "styled-components/native";
import { WindowWidth } from "../../Functions/WindowWidth";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.White};
`
export const ListUser = styled.FlatList`
`
export const CardUser = styled.View`
  width: 100%;
  margin: 10px 0;
  padding: 0 5px;
`
export const CardInformation = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.ButtonColor};
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
`
export const ContainerAvatar = styled.View`
  width: 30%;
  align-items: center;
`
export const AvatarBorder = styled.View`
  padding: 3px;
  background-color: black;
  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.White};
`
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`
export const UserInfo = styled.View`
  width: 70%;
  height: 80px;
`
export const TextUserInfo = styled.Text`
  font-size: ${WindowWidth(0.05)};
  font-family: ${({theme}) => theme.fonts.Roboto_400Regular};
  color: ${({theme}) => theme.colors.White};  
`