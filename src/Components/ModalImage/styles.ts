import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`
export const ContainerCenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Opacity = styled.View`
  width: 100%; 
  height: 100%; 
  position: absolute; 
  opacity: 0.5; 
  background-color: ${({theme}) => theme.colors.Black};
`
export const ModalView = styled.View`
  margin: 10px;
  background-color: ${({theme}) => theme.colors.White};
  border-radius: 20px;
  height: 60%;
  width: 90%;
  align-items: center;
  elevation: 5;
`
export const ImageModal= styled.Image`
  border-radius: 20px;
  width: 100%; 
  height: 100%;
`
export const Burtton = styled.TouchableOpacity`
  width: 50px; 
  height: 50px; 
  background-color: ${({theme}) => theme.colors.White}; 
  border-radius: 100px; 
  justify-content: center; 
  align-items: center;
`