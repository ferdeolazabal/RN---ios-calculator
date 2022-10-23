import React from 'react';
import {Text, View} from 'react-native';
import CalcBtn from '../components/CalcBtn';
import {styles} from '../theme/AppTheme';

const CalculadoraScreen = () => {
    return (
        <View>
            <Text style={styles.smResult}>1,500.00</Text>
            <Text style={styles.result}>1,500.00</Text>

            <View style={styles.row}>
                <CalcBtn text="C" color="#9B9B9B" />
                <CalcBtn text="+/-" color="#9B9B9B" />
                <CalcBtn text="del" color="#9B9B9B" />
                <CalcBtn text="/" color="#FF9427" />
            </View>

            <View style={styles.row}>
                <CalcBtn text="7" />
                <CalcBtn text="8" />
                <CalcBtn text="9" />
                <CalcBtn text="X" color="#FF9427" />
            </View>

            <View style={styles.row}>
                <CalcBtn text="4" />
                <CalcBtn text="5" />
                <CalcBtn text="6" />
                <CalcBtn text="-" color="#FF9427" />
            </View>

            <View style={styles.row}>
                <CalcBtn text="1" />
                <CalcBtn text="2" />
                <CalcBtn text="3" />
                <CalcBtn text="+" color="#FF9427" />
            </View>

            <View style={styles.row}>
                <CalcBtn text="0" xtraWith />
                <CalcBtn text="." />
                <CalcBtn text="=" color="#FF9427" />
            </View>
        </View>
    );
};

export default CalculadoraScreen;
