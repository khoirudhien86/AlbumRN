import React, {useEffect} from 'react'
import { Text, ImageBackground, Image } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { Spiner } from '../../Components'

const Splash = ({navigation}) => {
    useEffect(()=> {
        setTimeout(()=> {
            navigation.dispatch(StackActions.replace('Auth'))
        }, 2000)
    }, [navigation])
    return (
        <ImageBackground source={require('../../Assets/images/backgroundSplash.jpg')} style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../Assets/images/dictionary.png')} style={{width: 100, height: 100}}/>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 10, color: 'orange', opacity: 1}}>KAMUS HEWAN</Text>
            <Spiner />
        </ImageBackground>
    )
}

export default Splash
