import CalcButton from "./CalcButton";
import './style/style.css'
import { useReducer, useState } from "react";

function Calculator() {
    const [calc, setCalc] = useState({
        current: "0",
        total: "0",
        isInitial: true,
        preOp: ''
    });
    const [] = useState('');


    function handleNumber(value) {
        let newValue = value;

        if (!calc.isInitial) {
            newValue = calc.current + value;
        }

        setCalc({ current: newValue, total: calc.total, isInitial: false , preOp: calc.preOp});
    }

    function handleOperator(value) {
        const total = doCalculation();
        setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: value });
    }

    function doCalculation(value) {
        let total = parseInt(calc.total);

        switch (calc.preOp) {
            case '+':
                total += parseInt(calc.current);
                break;
            case '-':
                total -= parseInt(calc.current);
                break;
            case '/':
                total /= parseInt(calc.current);
                break;
            case '*':
                total *= parseInt(calc.current);
                break;
            default:
                total = parseInt(calc.current);
        }

        return total;
    }


    function handleClear() {
        setCalc(
            {
                current: "0",
                total: "0",
                isInitial: true,
                preOp: ''
            }
        );
    }

    function renderDisplay() {
        return calc.current;
    }

    function handleEquals(){
       let total = doCalculation();
       setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: "=" });
    }

    return (
        <>
            <div className="main-container">
                <div className="display-container">{renderDisplay()}</div>
                <div className="button-container">
                    <CalcButton value='7' className='number-container' onClick={handleNumber} />
                    <CalcButton value='8' className='number-container' onClick={handleNumber} />
                    <CalcButton value='9' className='number-container' onClick={handleNumber} />
                    <CalcButton value='/' className='operator-container' onClick={handleOperator} />

                    <CalcButton value='6' className='number-container' onClick={handleNumber} />
                    <CalcButton value='5' className='number-container' onClick={handleNumber} />
                    <CalcButton value='4' className='number-container' onClick={handleNumber} />
                    <CalcButton value='*' className='operator-container' onClick={handleOperator} />

                    <CalcButton value='3' className='number-container' onClick={handleNumber} />
                    <CalcButton value='2' className='number-container' onClick={handleNumber} />
                    <CalcButton value='1' className='number-container' onClick={handleNumber} />
                    <CalcButton value='-' className='operator-container' onClick={handleOperator} />

                    <CalcButton value='C' className='operator-container' onClick={handleClear} />
                    <CalcButton value='0' className='number-container' onClick={handleNumber} />
                    <CalcButton value='=' className='operator-container' onClick={handleOperator} />
                    <CalcButton value='+' className='operator-container' onClick={handleOperator} />
                </div>
            </div>
        </>
    )
}

export default Calculator;