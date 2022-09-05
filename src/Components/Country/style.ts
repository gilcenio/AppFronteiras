import styled from "styled-components/native";
import { WindowWidth } from "../../Functions/WindowWidth";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.White};
`
export const ListCountry = styled.FlatList`
  
`
export const CardCountry = styled.View`
  width: 100%;
  margin: 10px 0;
  padding: 0 5px;
`
export const CardInformation = styled.View`
  width: 100%;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.Blue_01};
`
export const ContainerAvatar = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
`
export const Avatar = styled.Image`
  width: 100%;
  height: 100px;
`
export const CountryInfo = styled.View`
  width: 100%;
`
export const TextCountryInfo = styled.Text`
  font-size: ${WindowWidth(0.05)};
  font-family: ${({theme}) => theme.fonts.Roboto_500Medium};
  color: ${({theme}) => theme.colors.Black};  
`
export const TextBordersCountry = styled.Text`
  font-size: ${WindowWidth(0.05)};
  font-family: ${({theme}) => theme.fonts.Roboto_400Regular};
  color: ${({theme}) => theme.colors.Black};  
  margin-right: 5px;
`
export const ContainerSelect = styled.View`
  width: 100%;
  margin: 5px 0;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 10px;
`
export const ImputSelect = styled.TextInput`
  width: 60%;
  height: 40px;
  border-width: 2px;
  border-radius: 10px;
  padding-left: 10px;
  border-color: ${({theme}) => theme.colors.Grey};
`
export const ButtonIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.Grey};
  border-radius: 10px;
  padding: 5px;
`