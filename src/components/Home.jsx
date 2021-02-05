import React, { useState } from 'react'
import BuyForm from './BuyForm';

import CryptoTile from './CryptoTile'

function Home() {
    const coins = [
        {
            id: 0,
            icon: 'fab fa-bitcoin',
            name: 'BTC',
            rate: '1',
            color: 'yellow',
        },
        {
            id: 1,
            icon: 'fab fa-ethereum',
            name: 'ETH',
            rate: '2',
            color: 'blue',
        },
        {
            id: 2,
            icon: 'fab fa-gg',
            name: 'XRP',
            rate: '3',
            color: '',
        },
    ]

    const [selectedTile, setSelectedTile] = useState(coins[0]);

    const clickTile = (id) => {
        setSelectedTile(coins[id])
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                        {coins.map((coin) => {
                            return (
                                <CryptoTile id={coin.id} icon={coin.icon} name={coin.name} rate={coin.rate} colorIcon={coin.color} selected={coin.id == selectedTile.id} tileClicked={clickTile} />
                            )
                        })}
                    </div>
                    <BuyForm data={selectedTile} />
                </div>
            </div>
        </div>
    )
}

export default Home
