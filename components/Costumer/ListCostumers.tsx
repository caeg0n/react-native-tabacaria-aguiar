import { Text,Body, Content, Left, List, ListItem, Right, Thumbnail, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import {Camera} from 'expo-camera'

export default function ListCostumers({costumers}:any) {
  return (
    <Content>
        <List>
          {
            costumers.map((item:any,index:any)=>{
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
  );
}

//function handleHelpPress() {
//  WebBrowser.openBrowserAsync(
//    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
//  );
//}

const styles = StyleSheet.create({
  
    avatar_text:{
      marginLeft:70
    }
   
});







