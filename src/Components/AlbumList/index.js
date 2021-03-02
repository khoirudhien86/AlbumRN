import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

const AlbumList = () => {
    const [user, dataUser] = useState([])
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(result => dataUser(result.data.data))
    }, [])

    const renderItem = ({item}) => {
        return(
            <View>
                <Text>{item.first_name}</Text>
            </View>
        );
    };
    return (
        <View>
            <Text>ini album list</Text>
            <FlatList
            data={user}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id} />
        </View>
    )
}

export default AlbumList
