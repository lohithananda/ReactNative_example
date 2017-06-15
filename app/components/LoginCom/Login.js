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

const Realm = require('realm');


export default class Login extends React.Component{
    static navigationOptions = {
        title:'lohith',
    }
    render(){
         let realm = new Realm({
             schema: [{name: 'Dog', properties: {name: 'string'}}]
            });
            realm.write(() => {
                realm.create('Dog', {name: 'Rex'});
            });
        const { navigate } = this.props.navigation;
        return(
            
            <View>
                <Text>
                     Count of Dogs in Realm: {realm.objects('Dog').length}
                </Text>
               {/*<LoginCon {...this.props.navigation}/>*/}
            </View>
        )
    }
}