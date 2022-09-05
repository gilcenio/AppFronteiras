import React from 'react'
import { Button, ButtonText, Container, ContainerAnimations, ContainerButton } from './styles'
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import theme from '../../Global/Styles/theme';
import { WindowWidth } from '../../Functions/WindowWidth';

export default function GetStarted() {
  const navigation = useNavigation<any>()
  const windowWidth = Dimensions.get('window').width;

  return (
    <Container>
      <ContainerAnimations>
        <LottieView
          source={require('../../Animations/44281-global-business.json')}
          autoPlay
          loop
          style={{width: windowWidth-50}}
        />
      </ContainerAnimations>
      <ContainerButton>
        <Button activeOpacity={0.6} onPress={() => navigation.navigate('Home')}> 
          <ButtonText>Iniciar</ButtonText>
          <Ionicons 
            name={'arrow-forward'}
            size={parseInt(WindowWidth(0.11))}
            color={theme.colors.Blue_01}
          />
        </Button>
      </ContainerButton>
    </Container>
  )
}