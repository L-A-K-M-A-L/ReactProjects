// relaunched of accordian by myself
import { useState } from "react"
import data from "./data"

export default function TestAccordian() {
    const [selectedId, setSelcetedId] = useState();
    const [enableMultiselecton, setEnableMultiselecton] = useState(false);
    const [multipleId, setMultipleId] = useState([]);

    function handleSingleAccordian(getCurrentId) {
        setSelcetedId(getCurrentId === selectedId ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let copyId = [...multipleId];
        const findIndexOfCurrentId = copyId.indexOf(getCurrentId);

        if(findIndexOfCurrentId === -1){
            copyId.push(getCurrentId)
        }else{
            copyId.splice(findIndexOfCurrentId, 1)
        }

        setMultipleId(copyId);
    }


    return (
        <>
            <div className="wrapper">
                <button onClick={() => setEnableMultiselecton(!enableMultiselecton)}>Enable Multiple Selection</button>
                <div className="accordian">
                    {
                        data && data.length > 0 ?
                        data.map(dataItem =>
                            <div className="item">
                                <div onClick={ enableMultiselecton ? 
                                    () => handleMultiSelection(dataItem.id)   :
                                    () => handleSingleAccordian(dataItem.id) } className="title">
                                    <div>{dataItem.question}</div>
                                    <span>+</span>
                                </div>
                                {
                                     selectedId === dataItem.id || multipleId.indexOf(dataItem.id) !== -1? 
                                     <div className="content">{dataItem.answer}</div> 
                                     : null
                                }
                            </div>
                        ) :
                        <div>No data found</div> 
                    }
                </div>
                
            </div>
        </>
    )
}