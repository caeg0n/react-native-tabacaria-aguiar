import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Thumbnail } from 'native-base';

export default function ProductScreen({ navigation }: RootStackScreenProps<'Product'>) {
  return (
    <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.replace('Root')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>PRODUTOS</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
  
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://m.media-amazon.com/images/I/41ItM1+gZ-L._AC_.jpg' }} />
              </Left>
              
              <Body style={styles.avatar_text}>
                <Text>Kumar Pratik</Text>
                <Text>Doing what you like will always keep you happy . .</Text>
              </Body>
              
              <Right>
                <Text>3:43 pm</Text>
              </Right>
            </ListItem>
          
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
