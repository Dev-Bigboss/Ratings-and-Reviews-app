import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
