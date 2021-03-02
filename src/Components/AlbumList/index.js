import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'

const AlbumList = () => {
    const [user, dataUser] = useState([])
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(result => dataUser(result.data.data))
    }, [])

    const renderItem = ({item}) => {
        return(
            <View style={styles.Card}>
                <View style={styles.CardSection}>
                    <View style={{marginRight: 10}}>
                        <Image style={{height:60, width: 60}} source={{uri: item.avatar }} />
                    </View>
                    <View>
                        <Text>{item.first_name} {item.last_name}</Text>
                        <Text>{item.email}</Text>
                    </View>
                </View>
                <View style={styles.CardSection}>
                    <View>
                        <Image style={{height: 300,width: 285}} source={{uri: item.avatar}} />
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View>
            <Text>ini album list :</Text>
            <FlatList
            data={user}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id} />
        </View>
    )
}
const styles = StyleSheet.create({
    Card: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: '#7B1FA2',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        marginTop: 15
    },
    CardSection: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFC107',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'red',
        position: 'relative'
    }
})

export default AlbumList
