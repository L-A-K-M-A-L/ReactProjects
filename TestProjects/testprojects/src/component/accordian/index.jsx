import { useState } from 'react';
import './style.css';
import data from './data';
// Single selection accordian
//Multiple selection accordian

export default function According() {
    const [selected, setSelected] = useState(null);
    const [enableMultiselecton, setEnableMultiselecton] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSlection(getcurrentId) {
        setSelected(getcurrentId === selected ? null : getcurrentId);
    }

    function handleMultiSelection(getcurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getcurrentId);

        if (findIndexOfCurrentId === -1)
            copyMultiple.push(getcurrentId);
        else
            copyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(copyMultiple);
        console.log(copyMultiple);
    }

    return (
        <>
            <div className='wrapper'>
                <button onClick={
                    () => setEnableMultiselecton(!enableMultiselecton)}>
                    Enable Multi selection</button>
                <div className='accordian'>
                    {
                        data && data.length > 0 ?
                            data.map(dataItem =>
                                <div className='item'>
                                    <div onClick={enableMultiselecton ?
                                        () => handleMultiSelection(dataItem.id) :
                                        () => handleSingleSlection(dataItem.id)}
                                        className='title'>
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        selected === dataItem.id || 
                                        multiple.indexOf(dataItem.id) !== -1 ?
                                            <div className='content'>
                                                {dataItem.answer}
                                            </div>
                                            : null
                                    }
                                </div>
                            ) :
                            <div>No data found</div>
                    }
                </div>
            </div>
        </>
    );
}