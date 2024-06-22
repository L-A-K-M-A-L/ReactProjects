import CalcButton from "./CalcButton";
import './style/style.css'

function Calculator() {
    return (
        <>
            <div className="main-container">
                <div className="display-container">0</div>
                <div className="button-container">
                    <CalcButton value='7' className='number-container' />
                    <CalcButton value='8' className='number-container' />
                    <CalcButton value='9' className='number-container' />
                    <CalcButton value='/' className='operator-container' />

                    <CalcButton value='6' className='number-container' />
                    <CalcButton value='5' className='number-container' />
                    <CalcButton value='4' className='number-container' />
                    <CalcButton value='*' className='operator-container' />

                    <CalcButton value='3' className='number-container' />
                    <CalcButton value='2' className='number-container' />
                    <CalcButton value='1' className='number-container' />
                    <CalcButton value='-' className='operator-container' />

                    <CalcButton value='C' className='operator-container' />
                    <CalcButton value='0' className='number-container' />
                    <CalcButton value='=' className='operator-container' />
                    <CalcButton value='+' className='operator-container' />
                </div>
            </div>
        </>
    )
}

export default Calculator;