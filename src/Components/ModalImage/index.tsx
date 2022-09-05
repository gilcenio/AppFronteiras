import { Text, Modal, Alert } from 'react-native'
import React from 'react'
import { useControllerApp } from '../../Hooks/ControllerApp';
import { Burtton, Container, ContainerCenteredView, ImageModal, ModalView, Opacity } from './styles';
import theme from '../../Global/Styles/theme';

export default function ModalImage() {
  const {modalVisible, setModalVisible, getImage} = useControllerApp()

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ContainerCenteredView>
          <Opacity />
          <ModalView>
            <ImageModal source={{uri: getImage}}/>
          </ModalView>
          <Burtton onPress={() => setModalVisible(!modalVisible)}>
            <Text style={{fontSize: 18, fontFamily: theme.fonts.Roboto_500Medium}}>X</Text>
          </Burtton>
        </ContainerCenteredView>
      </Modal>
    </Container>
  )
}
