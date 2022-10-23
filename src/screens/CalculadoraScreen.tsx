import React from 'react';
import {Text, View} from 'react-native';
import CalcBtn from '../components/CalcBtn';
import useCalculator from '../hooks/useCalculator';
import {styles} from '../theme/AppTheme';

const CalculadoraScreen = () => {
    const {
        number,
        prevNumber,
        cleanState,
        buildNumber,
        negativeNumber,
        btnDelete,
        btnDivision,
        btnMultiply,
        btnSubtract,
        btnAdd,
        calculate,
    } = useCalculator();

    return (
        <View>
            {prevNumber !== '0' && <Text style={styles.smResult}>{prevNumber}</Text>}
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
                {number}
            </Text>

            <View style={styles.row}>
                <CalcBtn text="C" color="#9B9B9B" action={cleanState} />
                <CalcBtn text="+/-" color="#9B9B9B" action={negativeNumber} />
                <CalcBtn text="del" color="#9B9B9B" action={btnDelete} />
                <CalcBtn text="/" color="#FF9427" action={btnDivision} />
            </View>

            <View style={styles.row}>
                <CalcBtn text="7" action={buildNumber} />
                <CalcBtn text="8" action={buildNumber} />
                <CalcBtn text="9" action={buildNumber} />
                <CalcBtn text="X" color="#FF9427" action={btnMultiply} />
            </View>

            <View style={styles.row}>
                <CalcBtn text="4" action={buildNumber} />
                <CalcBtn text="5" action={buildNumber} />
                <CalcBtn text="6" action={buildNumber} />
                <CalcBtn text="-" color="#FF9427" action={btnSubtract} />
            </View>

            <View style={styles.row}>
                <CalcBtn text="1" action={buildNumber} />
                <CalcBtn text="2" action={buildNumber} />
                <CalcBtn text="3" action={buildNumber} />
                <CalcBtn text="+" color="#FF9427" action={btnAdd} />
            </View>

            <View style={styles.row}>
                <CalcBtn text="0" xtraWith action={buildNumber} />
                <CalcBtn text="." action={buildNumber} />
                <CalcBtn text="=" color="#FF9427" action={calculate} />
            </View>
        </View>
    );
};

export default CalculadoraScreen;
