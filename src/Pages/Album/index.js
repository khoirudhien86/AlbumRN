import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AlbumList } from '../../Components'

const Album = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFA000'}}>Albums</Text>
            </View>
            <View style={styles.albumListContainer}>
                <AlbumList />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      padding: 10,
      paddingBottom: 76
    },
    textContainer: {  
      alignItems: 'center'
    },
    albumListContainer: {
        marginTop: 15,
        paddingBottom: 20
    }
});

export default Album;