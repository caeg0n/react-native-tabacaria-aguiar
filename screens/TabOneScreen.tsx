import * as React from 'react';
import { Component } from 'react';
import { Container, Header,Body, Content, Card, CardItem, Icon, Right } from 'native-base';
import { StyleSheet } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PRINCIPAL</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <Content>
          <Card>
            <CardItem header button onPress={() => navigation.replace('Costumer')}>
            <Icon type="AntDesign" active name="addusergroup" />
              <Text>CLIENTES</Text>
            </CardItem>
            <CardItem button onPress={() => navigation.replace('Product')}>
              <Icon type="AntDesign" active name="addusergroup" />
                <Text>
                  PRODUTOS
                </Text>
            </CardItem>
            <CardItem button onPress={() => navigation.replace('Sale')}>
              <Icon type="AntDesign" active name="addusergroup" />
                <Text>
                  VENDAS
                </Text>
            </CardItem>
            <CardItem button onPress={() => navigation.replace('Report')}>
              <Icon type="AntDesign" active name="addusergroup" />
                <Text>
                  RELATORIOS
                </Text>
            </CardItem>
          </Card>
        </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
