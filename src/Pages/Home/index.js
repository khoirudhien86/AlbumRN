import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AlbumList } from '../../Components'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text>Testing</Text>
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
      padding: 10
    },
    textContainer: {  
      alignItems: 'center'
    },
    albumListContainer: {
        marginTop: 15
    }
});

export default Home;
