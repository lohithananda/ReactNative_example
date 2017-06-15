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
import {
    Signupcom
} from './Signupcontainer';
export default class Signup extends React.Component{

    render(){
        return(
            <View>
               <Signupcom/>
            </View> 
        )
    }
}