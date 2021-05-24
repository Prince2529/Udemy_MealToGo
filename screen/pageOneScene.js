import React from 'react'
import { View, Text } from 'react-native'

export default function pageOneScene(props) {
    return (
        <View style={{backgroundColor:"pink",flex:1}}>
            <Text>Page......{props.number}</Text>
        </View>
    )
}
