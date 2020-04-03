import React from 'react'

function CartCard({ nama, harga }) {
    return (
        <div>
            <h3>{nama}</h3>
            <h5>{harga}</h5>
        </div>
    )
}

export default CartCard
