import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    FormLabel,
    FormValidationMessage,
    FormInput,
    Button
} from 'react-native-elements';

export  class Signupcom extends React.Component{
    constructor(props){
        super(props);
        this.state={username:''}
        this.state={email:''}
    }
    render(){
        return(
            <View>
                <Text>Register</Text>
                <FormLabel>Username</FormLabel>
                 <FormInput
                 ref='forminput'
                 textInputRef='uname'/>
                 <FormLabel>Email</FormLabel>
                  <FormInput
                    onChangeText={(text) => this.setState({username})}/>
                 <FormLabel>Phno</FormLabel>
                  <FormInput/>
                 <FormLabel>Password</FormLabel>
                  <FormInput/>
                 <Button
                    raised
                    buttonStyle={{backgroundColor: '#34a187', borderRadius: 5 , margin: 5}}
                    icon={{name: 'code'}}
                    title='SignUp' />
            </View> 
        )
    }
}