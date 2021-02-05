import React, { useState } from 'react'
import InputBase from './InputBase'

function BuyForm({ data }) {

    const { title, rate } = data

    const INIT = { amount: 0, converted: 0 };
    const [exchange, setExchange] = useState(INIT);

    const handleChange = ({ target: { value } }) => {
        const val = Number(value.trim());
        const converted = val / rate;

        setExchange({
            converted: converted
        })

        console.log(converted);
    }

    return (
        <form action="" className="form">
            <div className="input-group mb-3">
                <InputBase onChange={handleChange} label='USD' />

                <i className="fas fa-exchange-alt"></i>

                <InputBase label={title} value={rate} />
            </div>
            <input type="submit" className="btn btn-primary" value="Buy" />
        </form>
    )
}

export default BuyForm
