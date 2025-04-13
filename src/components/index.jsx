//single selected
//multi selected
import { useState } from "react";






export default function Accordian(){
    const [selected,setselected]=useState(Null);

    function handleSingleClick(getCurrentId){
        setselected(getCurrentId==selected?null:getCurrentId);

    }

    return <div className="wrapper">
                <div className="Accordian">
                    {
                         data && data.length>0 ?
                         data.map(dataItem=><div className="item">
                            <div className="title" onClick={()=>handleSingleClick(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected===dataItem.id?(
                                    <div className="content">{dataItem.answer}</div>
                                ):null
                            }
                         </div>)
                         :<div>No data Found</div>
                    }
                 </div>
        </div>
}