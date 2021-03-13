import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, alert } from 'react-native'
import * as firebase from 'firebase';


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

export class Daftar extends Component {
    constructor(props){
        super(props);

        this.state = ({
            email:'',
            password:''
        })
    }

    Daftar = (email,password) => {
        try {
            if(this.state.password.length<6){
                alert("masukkan minimal 6 karakter");
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password);
        }
        catch (error) {
            console.log(error.toString())
        }
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40, color: "#7B1FA2", fontWeight: 'bold', textAlign: 'center',marginTop: 20}}>MYAPP</Text>
                <TextInput 
                    style={{borderWidth: 1, borderColor: 'gray', margin: 20, height: 50, backgroundColor: 'gray', borderRadius: 20, color: 'white', paddingHorizontal: 20}}
                    onChangeText={(email) => this.setState({email})}
                    // value={value}
                    placeholder="masukkan email anda"
                    placeholderTextColor="red"
                />
                {/* <Text>{value}</Text> */}
                <TextInput 
                    style={{borderWidth: 1, borderColor: 'gray', margin: 20, height: 50, backgroundColor: 'gray', borderRadius: 20, color: 'white', paddingHorizontal: 20}}
                    onChangeText={(password) => this.setState({password})}
                    // value={pasword}
                    placeholder="masukkan password anda"
                    placeholderTextColor="red"
                />
                {/* <Text>{pasword}</Text> */}
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.Daftar(this.state.email, this.state.password)} style={{borderColor: 'red', borderWidth: 1, marginTop: 10, borderRadius: 15, backgroundColor: '#E64A19', width: 150}}>
                            <Text style={{padding: 10, textAlign: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold', color: 'purple', textTransform: 'uppercase'}}>DAFTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Daftar