import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import {LoginCon} from './LoginContainer';

export default class Login extends React.Component{
    static navigationOptions = {
        title:'lohith',
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
               <LoginCon {...this.props.navigation}/>
            </View>
        )
    }
}