import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ButtonAuth from '../../Components/ButtonAuth'
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
    const navigation = useNavigation();
    const Goto = (coba) => {
        navigation.navigate(coba);
    }
    return (
        <View style={{backgroundColor: '#9E9E9E', flex: 1}}>
            <Text style={{fontSize: 40, color: "#7B1FA2", fontWeight: 'bold', textAlign: 'center',marginTop: 20}}>MYAPP</Text>
            <ButtonAuth teks="jika belum mendaftar silahkan mendaftar" button="DAFTAR" onPress={()=> Goto('Daftar')}/>
            <ButtonAuth teks="jika sudah mendaftar silahkan login" button="LOGIN" onPress={()=> Goto('Login')}/>
        </View>
    )
}

export default Auth
