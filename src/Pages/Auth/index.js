import React from 'react'
import { View, Text } from 'react-native'
import ButtonAuth from '../../Components/ButtonAuth'

const Auth = () => {
    return (
        <View style={{backgroundColor: '#D32F2F', flex: 1}}>
            <Text style={{fontSize: 40, color: "#7B1FA2", fontWeight: 'bold', textAlign: 'center',marginTop: 20}}>MYAPP</Text>
            <ButtonAuth teks="jika belum mendaftar silahkan mendaftar" button="DAFTAR" />
            <ButtonAuth teks="jika sudah mendaftar silahkan login" button="LOGIN" />
        </View>
    )
}

export default Auth
