import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { HomeIcon, HomeAktifIcon, AlbumIcon, AlbumAktifIcon, InfoIcon, InfoAktifIcon } from '../../Assets'

const TabItem = ({ onPress, onLongPress, isFocused, label }) => {
    const Icon = () => {
        if(label === 'Home') return isFocused ? <HomeAktifIcon /> : <HomeIcon />
        if(label === 'Album') return isFocused ? <AlbumAktifIcon /> : <AlbumIcon />
        if(label === 'Info') return isFocused ? <InfoAktifIcon /> : <InfoIcon />
        return <HomeIcon />
    } 
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tombol}
          >
            <Icon />
            <Text style={{ color: isFocused ? '#31980D' : '#222', marginTop: 3, fontWeight: 'bold' }}>
              {label}
            </Text>
          </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    tombol: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
