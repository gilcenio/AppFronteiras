import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, Text, StyleSheet, View, Image, Modal, Alert, TouchableOpacity } from 'react-native'
import { ordination } from '../../Functions/InformationCountries'
import { Avatar, ButtonIcon, CardCountry, CardInformation, Container, ContainerAvatar, ContainerSelect, CountryInfo, ImputSelect, ListCountry, TextBordersCountry, TextCountryInfo } from './style'
import {Ionicons} from '@expo/vector-icons'
import theme from '../../Global/Styles/theme'
import { useControllerApp } from '../../Hooks/ControllerApp'
import ModalImage from '../ModalImage'



export default function Useres() {
  const [ordinationList, setOrdinationList] = useState(false)
  const [first, setfirst] = useState(ordination(ordinationList))
  const [search, setSearch] = useState('')
  const {setGetImage, setModalVisible} = useControllerApp()

  function searchNameCountries(){
    if(search === '' || search === undefined){
      setfirst(ordination(ordinationList))
    } else {
      setfirst(
        first.filter((item: any) => {
          if(item.Name_Country.toLowerCase().indexOf(search.toLowerCase()) > -1){
            return true  
          } else {
            return false
          }
        })
      )
    }
  }

  return (
    <>
      <ModalImage/>
      <Container>
        <ContainerSelect>
          <ImputSelect
            placeholder={'Pesquisar Pais'}
            onChangeText={setSearch}
            value={search}
          />
          <ButtonIcon onPress={() => searchNameCountries()}>
            <Ionicons
              name={'search'}
              size={30}
            />
          </ButtonIcon>
          <ButtonIcon onPress={() => setOrdinationList(false)}>
            <Ionicons
              name={'arrow-up'}
              size={30}
            />
          </ButtonIcon>
          <ButtonIcon onPress={() => setOrdinationList(true)}>
            <Ionicons
              name={'arrow-down'}
              size={30}
            />
          </ButtonIcon>
        </ContainerSelect>
        <ListCountry
          data={first}
          renderItem={(item: any) => {
            const {Cod_Country, Name_Country, Borders_Country, image} = item.item

            return(
              <CardCountry>
                <CardInformation>
                  <ContainerAvatar onPress={() => {setModalVisible(true), setGetImage(image)}}>
                    <Avatar source={{uri: image}}/>
                  </ContainerAvatar>
                  <CountryInfo>
                    <TextCountryInfo>Código do País: {Cod_Country}</TextCountryInfo>
                    <TextCountryInfo>Nome do País: {Name_Country}</TextCountryInfo>
                    <TextCountryInfo>Fronteiras com Países:</TextCountryInfo>
                    <FlatList
                      data={Borders_Country}
                      renderItem={(item) => {
                        return (
                          <TextBordersCountry>{`${item.item}\n`}</TextBordersCountry>
                        )
                      }}
                      horizontal={true}
                      keyExtractor={(item: any) => item.Quantity_Borders_Country}
                    />
                  </CountryInfo>
                </CardInformation>
              </CardCountry>
            )
          }}
          keyExtractor={(item: any) => item.index+Math.random().toString()}
        />
      </Container>
    </>
  )
}
