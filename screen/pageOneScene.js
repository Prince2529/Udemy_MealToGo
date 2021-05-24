import React from 'react'
import { View, Text } from 'react-native'

export default function PageOneScene(props) {
    return (
        <View style={{backgroundColor:"pink",height:1000,justifyContent:"center"}}>
            <Text>Page......{props.number}</Text>
        </View>
    )
}
