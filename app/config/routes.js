import React from 'react';
import{
    Image
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';

import Login from '../components/LoginCom/Login';
import Profile from '../components/Profile/Profile';
import Signup from '../components/SignUpCom/Signup';
import Main from '../components/MainPage/Main'
export  const ComStack = StackNavigator({
    Login:{
        screen:Login,

        navigationOptions:{
             headerStyle:{
                backgroundColor:'#34a587',
                elevation:5
            },
            headerTitleStyle:{
                color:'#ffffff'
            }
        }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            title:'Profile',
            headerStyle:{
                backgroundColor:'#34a587',
                elevation:5
            },
            headerTitleStyle:{
                color:'#ffffff'
            },
        }
    },
     Signup:{
        screen:Signup,
        navigationOptions:{
            title:'Signup',
            headerStyle:{
                backgroundColor:'#34a587',
                elevation:5
            },
            headerTitleStyle:{
                color:'#ffffff'
            },
        }
    },
    Main:{
        screen:Main,
        navigationOptions:{
            title:'Main',
            headerStyle:{
                backgroundColor:'#34a587',
                elevation:5
            },
            headerTitleStyle:{
                color:'#ffffff'
            },
        }
    }
});