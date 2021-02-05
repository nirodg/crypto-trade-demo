import React from 'react'

function CryptoTile({selected, tileClicked, id, icon, name, rate, colorIcon}) {

    const handleClick = () => tileClicked(id);

    const styleIcon={
        color: {colorIcon}
    }

    return (
        <div onClick={handleClick} className={`card ${selected && 'selected'}`}>
            <div className="card-body">
                <div className={`coin-icon mb-3`} style={styleIcon}><i className={icon}></i> </div>
                <div className="coin-name">{name}</div>
                <div>@ {rate}</div>
            </div>
        </div>
    )
}

export default CryptoTile
