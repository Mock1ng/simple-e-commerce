import React, { useState } from 'react'

function app() {

    const [newProduct, setProduct] = useState({ name: '', price: 0 })

    return (
        <div>
            <form>
                <input type="text" name="nama" id="nama" value={newProduct.nama} />
            </form>
        </div>
    )
}

export default app
