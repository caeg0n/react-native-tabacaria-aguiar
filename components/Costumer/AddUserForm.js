/*
import React, { useEffect } from 'react'
import { Alert, Text, TextInput, View ,
Button} from 'react-native'
import styles from './HomeScreen.js'
import { Icon} from 'native-base';
//import Button from '../Components/Button'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const fieldValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('O email não pode ser vazio')
    .email('Digite um email válido'),
  password: yup
    .string()
    .required('A senha não pode ser vazia')
    .min(6, 'A senha deve conter pelo menos 6 dígitos')
})

const AddUserForm = () => {
  const { register, setValue, handleSubmit, errors } = useForm({ validationSchema: fieldValidationSchema })
	const onSubmit = data => Alert.alert(data.email, data.password)
  
	useEffect(() => {
    register('email')
    register('password')
  }, [register])

  return (
    <View style={styles.mainContainer}>
      <TextField
        label={'Email'}
        error={errors?.email}
        placeholder={'Digite seu email'}
        onChangeText={text => setValue('email', text)}
      />
      <TextField
        secureTextEntry
        label={'Senha'}
        error={errors?.password}
        placeholder={'Digite sua senha'}
        onChangeText={text => setValue('password', text)}
      />
      <Button onPress={handleSubmit(onSubmit)} text={'Continuar'} />

    </View>
  )
}

const TextField = ({ error, label, ...inputProps }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
			style={[styles.input, !!error && styles.borderError]}
			{...inputProps}
		/>
    {!!error && <Text style={styles.errorMessage}>{error.message}</Text>}
  </View>
)

export default AddUserForm
*/

import React, { Component } from 'react';
import { Button, StyleSheet, Text, 
         View,ScrollView,TextInput,
         Keyboard,TouchableOpacity } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Settings</Text>
        </View>

        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Your name"
              maxLength={20}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});