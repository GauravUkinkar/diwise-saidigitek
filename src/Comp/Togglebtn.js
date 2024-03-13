import React from 'react'
import "../styles/togglebtn.scss"

const Togglebtn = (props) => {
    return (
        <div className='toolbox-wrapper'>
            <button onClick={props.toggle}>
                <div className='img bg-img-contain' > </div>
            </button>
        </div>
    )
}

export default Togglebtn