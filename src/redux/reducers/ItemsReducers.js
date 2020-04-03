let initial = {
    items: [
        {
            id: 1,
            nama: 'Baju Lengan Panjang',
            harga: 99000
        },
        {
            id: 2,
            nama: 'Baju Lengan Pendek',
            harga: 150000
        },
        {
            id: 3,
            nama: 'Celana Panjang',
            harga: 250000
        },
        {
            id: 4,
            nama: 'Rok Panjang',
            harga: 20000
        }
    ],
    cart: []
}

const itemReducers = (state = initial, action) => {
    switch (action.type) {
        case 'TAMBAH':
            return {
                ...state,
                items: state.items.concat(action.newItem)
            }
        case 'ADD_CART':
            return {
                ...state,
                cart: state.cart.concat(action.newCart)
            }
        default: return state;
    }
}

// export const addToCart = (state = initial, action) => {
//     switch (action.type) {
//         case 'ADD_CART':
//             return {
//                 ...state,
//                 cart: state.cart.concat(action.newCart)
//             }
//         default: return state;
//     }
// }

export default itemReducers;