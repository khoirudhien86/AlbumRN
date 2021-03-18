import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import * as firebase from 'firebase';
import Vector from '../../Assets/svg/Vector.svg';

const firebaseConfig = {
    apiKey: "AIzaSyDkA-w5hf8r9UTIKgxXkqwfZjeO6j8fnqc",
    authDomain: "albumreactnative.firebaseapp.com",
    projectId: "albumreactnative",
    storageBucket: "albumreactnative.appspot.com",
    messagingSenderId: "772612251373",
    appId: "1:772612251373:web:24d5e72709144cf842f6e4",
    measurementId: "G-2JJ11LG0VT"
};
//   Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

export class Login extends Component {
    constructor(props){
        super(props);

        this.state = ({
            email:'',
            password:''
        })
    }

    Login = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=> this.props.navigation.navigate('MainApp'))
            // .then(function (user) {
            //     console.log(user);
            // });
        } catch (error) {
            console.log(error.toString())
        }
    }

    render() {
        return (
            <ScrollView style={{paddingHorizontal: 28, paddingTop: 25, backgroundColor: '#E5E3DD'}}>
                <View style={{width: 29, height: 29}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')}>
                        <Vector />
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 36, color: "#7B1FA2", fontWeight: 'bold', textAlign: 'center',marginTop: 60}}>Log In</Text>
                <TextInput 
                    style={{borderWidth: 1, borderColor: 'gray', marginTop: 30, height: 50, backgroundColor: '#F5F4F2', borderRadius: 30, color: 'purple', paddingHorizontal: 20}}
                    onChangeText={(email) => this.setState({email})}
                    placeholder="masukkan email anda"
                    placeholderTextColor="gray"
                />
                <TextInput 
                    style={{borderWidth: 1, borderColor: 'gray', marginTop: 20, height: 50, backgroundColor: '#F5F4F2', borderRadius: 30, color: 'purple', paddingHorizontal: 20}}
                    onChangeText={(password) => this.setState({password})}
                    placeholder="masukkan password anda"
                    placeholderTextColor="gray"
                />
                <View style={{alignItems: 'center', marginTop: 22, height: 55}}>
                    <TouchableOpacity onPress={() => this.Login(this.state.email, this.state.password)} style={{borderColor: 'gray', borderWidth: 1, borderRadius: 40, backgroundColor: '#D0CDC2', width: 150, alignItems: 'center'}}>
                            <Text style={{padding: 10, textAlign: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold', color: 'purple', textTransform: 'uppercase'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default Login
