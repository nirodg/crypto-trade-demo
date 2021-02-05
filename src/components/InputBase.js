import React from 'react'

function InputBase({label, value}) {
    return (
        <div>
            <input type="number" className="form-control" value={value}/>
            <span className="input-group-text">{label}</span>
        </div>
    )
}

export default InputBase
