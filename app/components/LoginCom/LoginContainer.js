import React from 'react';
import {
    View,
    Text,
    Alert,
    ToastAndroid,
    TextInput,
    StatusBar
} from 'react-native';
import {
    FormLabel,
    FormValidationMessage,
    FormInput,
    Button
} from 'react-native-elements';

import Loginstyles from './LoginStyles.js';
var uname='lohith';
var upass='abc';
export  class LoginCon extends React.Component{ 
   constructor(){
  super()
  this.state={
    username:'',
    password:''
  }
}
onButtonPress()
{
    
    var name=this.state.username;
    var pass=this.state.password;
        if(name.length==0){

      ToastAndroid.show("Enter username"+pass,ToastAndroid.SHORT);
   
    }else if(pass.length==0){

      ToastAndroid.show("Enter password"+pass,ToastAndroid.SHORT);

    }else{

      if(uname.toUpperCase()!=name.toUpperCase()){
          ToastAndroid.show("username is incorrect",ToastAndroid.SHORT);
      }else if(upass.toUpperCase()!=pass.toUpperCase()){
          ToastAndroid.show("password is incorrect",ToastAndroid.SHORT);
      }else{
         ToastAndroid.show("Login Success"+pass,ToastAndroid.SHORT);
        this.props.navigate('Main')
      }
    }
}
    render(){
        return(
            <View>
                <StatusBar
                    backgroundColor = "#257a64"
                    barStyle = "light-content"
                    hidden = {false}/>
                <Text>Login</Text>
                <FormLabel>Username</FormLabel>
                <FormInput
                          placeholder='Please enter Username'
                          returnKeyLabel = {"next"}
                          onChangeText={(text)=>this.setState({username:text})}
                          value=    {this.state.username}
                      />
                <FormLabel>Password</FormLabel>
                <FormInput
                      placeholder='Please enter Password'
                      secureTextEntry={true}
                      onChangeText={(text)=>this.setState({password:text})}
                      value={this.state.password}/>
                <Button
                    raised
                    icon={{name: 'lock-open'}}
                    title='Login'
                    buttonStyle={Loginstyles.buttonstyle}
                    onPress={()=>this.onButtonPress()} />
                <Button
                    raised
                    buttonStyle={Loginstyles.buttonstyle}
                    icon={{name: 'add-circle'}}
                    title='SignUp' 
                    onPress={()=>this.props.navigate('Signup')}
                   />
            </View>
        )
    }
}