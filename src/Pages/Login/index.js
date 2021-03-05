import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const Login = () => {
    const [value, onChangeText] = useState();
    return (
        <View>
            <Text style={{fontSize: 40, color: "#7B1FA2", fontWeight: 'bold', textAlign: 'center',marginTop: 20}}>MYAPP</Text>
            <TextInput 
                style={{borderWidth: 1, borderColor: 'gray', margin: 20, height: 50, backgroundColor: 'gray', borderRadius: 20, color: 'white', paddingHorizontal: 20}}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="masukkan email anda"
                placeholderTextColor="red"
            />
            <TextInput 
                style={{borderWidth: 1, borderColor: 'gray', margin: 20, height: 50, backgroundColor: 'gray', borderRadius: 20, color: 'white', paddingHorizontal: 20}}
                placeholder="masukkan password anda"
                placeholderTextColor="red"
            />
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={{borderColor: 'red', borderWidth: 1, marginTop: 10, borderRadius: 15, backgroundColor: 'yellow', width: 150}}>
                        <Text style={{padding: 10, textAlign: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold', color: 'purple', textTransform: 'uppercase'}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
