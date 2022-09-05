import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import theme from '../../../Global/Styles/theme'

interface propsGoBack{
  nameIcon: string | any
  sizeIcon: number
}

export default function BottonGoBack({nameIcon, sizeIcon}: propsGoBack) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={Styles.button}
    >
      <Ionicons 
        name={nameIcon}
        size={sizeIcon}
        color={theme.colors.White}
      />
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  button:{
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
})