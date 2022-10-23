import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
    text: string;
    color?: string;
    xtraWith?: boolean;
    action: (textNumber: string) => void;
};

const CalcBtn = ({text, color = '#2D2D2D', xtraWith = false, action}: Props) => {
    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View
                style={{
                    ...styles.btn,
                    backgroundColor: color,
                    width: xtraWith ? 160 : 70,
                }}>
                <Text
                    style={{
                        ...styles.btnText,
                        color: color === '#9B9B9B' ? 'black' : 'white',
                    }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        height: 70,
        width: 70,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '400',
    },
});

export default CalcBtn;
