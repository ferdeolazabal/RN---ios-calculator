import {useRef, useState} from 'react';

enum Operators {
    add,
    subtract,
    multiply,
    divide,
}

const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const cleanState = () => {
        setNumber('0');
        setPrevNumber('0');
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

    const btnDelete = () => {
        let negative = '';
        let tempNumber = number;

        if (number.includes('-')) {
            negative = '-';
            tempNumber = number.substr(1);
        }

        if (tempNumber.length > 1) {
            setNumber(negative + tempNumber.slice(0, -1));
        } else {
            setNumber('0');
        }
    };

    const changeNumberToPrev = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }
        setNumber('0');
    };

    const btnDivision = () => {
        changeNumberToPrev();
        lastOperation.current = Operators.divide;
    };

    const btnMultiply = () => {
        changeNumberToPrev();
        lastOperation.current = Operators.multiply;
    };

    const btnSubtract = () => {
        changeNumberToPrev();
        lastOperation.current = Operators.subtract;
    };

    const btnAdd = () => {
        changeNumberToPrev();
        lastOperation.current = Operators.add;
    };

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(prevNumber);

        switch (lastOperation.current) {
            case Operators.add:
                setNumber(`${num1 + num2}`);
                break;
            case Operators.subtract:
                setNumber(`${num2 - num1}`);
                break;
            case Operators.multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operators.divide:
                if (num1 === 0) {
                    setNumber('0');
                }
                if (num1 && !num2) {
                    return setNumber(`${num1}`);
                }
                setNumber(`${num2 / num1}`);
                break;
        }
        setPrevNumber('0');
    };

    return {
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
    };
};

export default useCalculator;
