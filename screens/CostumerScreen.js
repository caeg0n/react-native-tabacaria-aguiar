import * as React from 'react';
import { useState,useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
//import { RootStackScreenProps } from '../types';
import { Fab, Container, Header, Left, Body, Right, Button, Icon, 
         Title } from 'native-base';
import AddUserForm from '../components/Costumer/AddUserForm.js'
import ListCostumers from '../components/Costumer/ListCostumers'
import Firebase from '../src/Config'


export default class CostumerScreen extends React.Component {
//export default function CostumerScreen({ navigation }: RootStackScreenProps<'Costumer'>) {

  constructor(props){
    super(props)
    this.state = {
      dados:[],
      fabState:false
    }
  }

  componentDidMount(){
    var list = [];
    Firebase.firestore().collection("costumers").get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        const { nome } = doc.data();
        list.push({
          nome:nome
        })
      })
      this.setState({
        dados:list
      })
    })
  }

  renderCostumers() {
    if ( this.state.fabState == false ){
      return <ListCostumers costumers={this.state.dados}/>
    }    
  }

  renderAddUserForm(){
    if ( this.state.fabState == true ){
      return <AddUserForm/>
    }
  }

  /*useEffect(()=>{
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
  },[]);
  */

  /*
  function newCostumer(){

  }

  function renderCostumers() {
    if ( fabState == false ){
      return <ListCostumers costumers={dados}/>
    }    
  }

  function renderAddUserForm(): React.ReactNode {
    if ( fabState == true ){
      return <AddUserForm/>
    }
  }
  */

  render(){
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.replace('Root')}>
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
    
        {this.renderAddUserForm()}
        {this.renderCostumers()}
  
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.fabState}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => { this.setState({fabState:true})}}>
            <Icon name="add" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      
      </Container>    
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  
});

