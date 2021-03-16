import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
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
            password:'',
        })
    }

    Daftar = (email,password) => {
        try {
            if(this.state.password.length<6){
                Alert.alert("masukkan password minimal 6 karakter!");
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password);
            Alert.alert(
                "Pendaftaran Berhasil",
                "Silahkan Login!",
                [
                    { text: "OK", onPress: () => this.props.navigation.navigate('Login') }
                ]
            );
        }
        catch (error) {
            console.log(error.toString())
        }
    }

    render() {
        return (
            <ScrollView style={{paddingHorizontal: 28, paddingTop: 25, backgroundColor: '#C4C4C4'}}>
                <View style={{width: 29, height: 29, backgroundColor: 'pink'}}>
                </View>
                <Text style={{fontSize: 36, color: "#7B1FA2", fontWeight: 'bold', textAlign: 'center',marginTop: 60}}>Sign Up</Text>
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
                <View style={{alignItems: 'center', marginTop: 22}}>
                    <TouchableOpacity onPress={() => this.Daftar(this.state.email, this.state.password)} style={{borderColor: '#241C1C', borderWidth: 1, borderRadius: 40, backgroundColor: '#241C1C', width: 150, alignItems: 'center'}}>
                            <Text style={{padding: 10, textAlign: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold', color: '#F5F4F2', textTransform: 'uppercase'}}>DAFTAR</Text>
                    </TouchableOpacity>
                </View>


                    {/* <Modal isVisible={this.state.isModalVisible} style={{alignItems: 'center'}}>
                    <View style={{ width: 250, height: 200, backgroundColor: 'white',justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, borderRadius: 20 }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pendaftaran Berhasil, Silahkan Login!</Text>
                    <TouchableOpacity style={{marginTop: 60}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, backgroundColor: 'purple', padding: 9, borderRadius: 20}}>Login!</Text>
                    </TouchableOpacity>
                    </View>
                </Modal> */}
            </ScrollView>
        )
    }
}

export default Daftar