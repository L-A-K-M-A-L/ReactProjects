import { useState } from "react";

export default function ColorGenerator() {
    const [color, setColor] = useState('#ffffff');
    const [colorType, setColorType] = useState('');


    function numberGenerator(len) {
        return Math.floor(Math.random() * len);
    }

    function handleColorChange(type) {
        if (type === 'hex') {
            const hexCodeContainer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
            let hexCode = '#';

            for (let i = 0; i < 6; i++) {
                hexCode += hexCodeContainer[numberGenerator(hexCodeContainer.length)]
            }
            setColor(hexCode);
            setColorType('Hex Color');

        } else {

            let r = numberGenerator(256);
            let g = numberGenerator(256);
            let b = numberGenerator(256);
            let rgbColor = `rgb(${r},${g},${b})`;

            console.log(rgbColor);
            setColor(rgbColor);
            setColorType('RGB');
        }

    }

    return (
        <>
            <div style={{
                width: "100wh",
                height: '100vh',
                background: color
            }}>
                <button onClick={() => handleColorChange('hex')}>Generate Hex color</button>
                <button onClick={() => handleColorChange('rgb')}>Generate RGB color</button>


                <div
                    style={{
                        marginTop: '50px',
                        fontSize: '2rem',
                    }}> <p>Color type : {colorType}</p>
                        <p>Color Code : {color}</p>

                </div>
            </div>
        </>
    )


}