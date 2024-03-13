import React from 'react'
import '../styles/List.scss'
import { CiCircleCheck } from "react-icons/ci";


function List({li1, li2, li3, li4, li5, li6, li7, li8, li9, li10,title}) {
    return (
        <>
            <div className="lists">
                <div className="list-container cont">
                            <ul>
                                {title && <h2>{title}</h2>}
                                {li1 && <li><span className="icon"><CiCircleCheck /></span>{li1}</li>}
                                {li2 && <li><span className="icon"><CiCircleCheck /></span>{li2}</li>}
                                {li3 && <li><span className="icon"><CiCircleCheck /></span>{li3}</li>}
                                {li4 && <li><span className="icon"><CiCircleCheck /></span>{li4}</li>}
                                {li5 && <li><span className="icon"><CiCircleCheck /></span>{li5}</li>}
                                {li6 && <li><span className="icon"><CiCircleCheck /></span>{li6}</li>}
                                {li7 && <li><span className="icon"><CiCircleCheck /></span>{li7}</li>}
                                {li8 && <li><span className="icon"><CiCircleCheck /></span>{li8}</li>}
                                {li9 && <li><span className="icon"><CiCircleCheck /></span>{li9}</li>}
                                {li10 && <li><span className="icon"><CiCircleCheck /></span>{li10}</li>}
                                

                            </ul>

                        </div>
                  

                </div>
            





        </>
    )
}

export default List