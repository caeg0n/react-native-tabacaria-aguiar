import * as React from 'react';
import { useState,useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Thumbnail } from 'native-base';
import Firebase from '../src/Config'

export default function CostumerScreen({ navigation }: RootStackScreenProps<'Costumer'>) {

  const [dados,setDados] = useState([]) 

  useEffect(()=>{
    var list:any = [];
    Firebase.firestore().collection("costumers").get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        const { nome } = doc.data();
        list.push({
          nome: nome
        });
      });
      setDados(list)
    });
  },[])

  return (
  
    <Container style={styles.container}>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.replace('Root')}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>CLIENTES</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
  
      <Content>
        <List>
          {
            dados.map((item:any,index)=>{
              return(
              <ListItem avatar key={index}>
                <Left>
                  <Thumbnail source={{ uri: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png' }} />
                </Left>        
                <Body style={styles.avatar_text}>
                  <Text>{item.nome}</Text>
                  <Text>decricao</Text>
                </Body>
                <Right>
                  <Text>3:43 pm</Text>
                </Right>
              </ListItem>
              )
            })
          }
        </List>
      </Content>

      </Container>
      
  )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     //alignItems: 'center',
     //justifyContent: 'center',
     //padding: 20,
},

  avatar_text:{
    marginLeft:70
  }
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   link: {
//     marginTop: 15,
//     paddingVertical: 15,
//   },
//   linkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
});
function props(props: any) {
  throw new Error('Function not implemented.');
}

