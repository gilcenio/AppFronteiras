import { Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../../Service/api';
import { Avatar, AvatarBorder, CardInformation, CardUser, Container, ContainerAvatar, ListUser, TextUserInfo, UserInfo } from './styles';

interface porpsGetInformationUser{
  avatar: string,
  email: string,
  first_name: string,
  id: number,
  last_name: string,
}

export default function Country() {
  const [getInformationUser, setGetInformationUser] = useState<porpsGetInformationUser>()

  function getUserInformations(){
    api.get('users?per_page=13&page=1')
    .then(res => {
      setGetInformationUser(res.data.data);
    })
    .catch(err => {
      Alert.alert('Ops!', 'Sua pesquisa retornou um erro!')
    });
  }

  useEffect(() => {
    getUserInformations()
  }, [])

  return (
    <Container>
      <ListUser
        data={getInformationUser}
        renderItem={(item: any) => {
          const {avatar, email, first_name} = item.item

          return(
            <CardUser>
              <CardInformation>
                <ContainerAvatar>
                  <AvatarBorder>
                    <Avatar source={{uri: avatar}}/>
                  </AvatarBorder>
                </ContainerAvatar>
                <UserInfo>
                  <TextUserInfo>Nome: {first_name}</TextUserInfo>
                  <TextUserInfo>E-mail: {email}</TextUserInfo>
                </UserInfo>
              </CardInformation>
            </CardUser>
          )
        }}
        keyExtractor={(item: any) => item.index+Math.random().toString()}
      />
    </Container>
  )
}