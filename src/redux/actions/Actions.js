export const addItem = (nama, harga, id) => {
    return {
        type: 'TAMBAH',
        newItem: {
            id: id,
            nama: nama,
            harga: harga
        }
    }
}

export const addCart = (nama, harga, id) => {
    return {
        type: 'ADD_CART',
        newCart: {
            id: id,
            nama: nama,
            harga: harga
        }
    }
}