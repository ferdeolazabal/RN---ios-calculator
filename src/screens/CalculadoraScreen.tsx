import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CalcBtn from '../components/CalcBtn';
import {styles} from '../theme/AppTheme';

const CalculadoraScreen = () => {
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const cleanState = () => {
        setNumber('0');
    };

    const buildNumber = (textNumber: string) => {
        // Do not accept double dots
        if (number.includes('.') && textNumber === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            // Decimal point
            if (textNumber === '.') {
                setNumber(number + textNumber);

                // Evaluate if it is another zero and there is a point
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);

                // Evaluate if it is different from zero and there is no point
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);

                // Avoid 000.0
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + textNumber);
            }
        } else {
            setNumber(number + textNumber);
        }
    };

    const negativeNumber = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };

    return (
        <View>
            <Text style={styles.smResult}>{prevNumber}</Text>
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
                {number}
            </Text>

            <View style={styles.row}>
                <CalcBtn text="C" color="#9B9B9B" action={cleanState} />
                <CalcBtn text="+/-" color="#9B9B9B" action={negativeNumber} />
                <CalcBtn text="del" color="#9B9B9B" action={cleanState} />
                <CalcBtn text="/" color="#FF9427" action={cleanState} />
            </View>

            <View style={styles.row}>
                <CalcBtn text="7" action={buildNumber} />
                <CalcBtn text="8" action={buildNumber} />
                <CalcBtn text="9" action={buildNumber} />
                <CalcBtn text="X" color="#FF9427" action={cleanState} />
            </View>

            <View style={styles.row}>
                <CalcBtn text="4" action={buildNumber} />
                <CalcBtn text="5" action={buildNumber} />
                <CalcBtn text="6" action={buildNumber} />
                <CalcBtn text="-" color="#FF9427" action={cleanState} />
            </View>

            <View style={styles.row}>
                <CalcBtn text="1" action={buildNumber} />
                <CalcBtn text="2" action={buildNumber} />
                <CalcBtn text="3" action={buildNumber} />
                <CalcBtn text="+" color="#FF9427" action={cleanState} />
            </View>

            <View style={styles.row}>
                <CalcBtn text="0" xtraWith action={buildNumber} />
                <CalcBtn text="." action={buildNumber} />
                <CalcBtn text="=" color="#FF9427" action={cleanState} />
            </View>
        </View>
    );
};

export default CalculadoraScreen;
