import React from 'react';
import { useSelector } from 'react-redux';

function ItemAdmin() {
    const items = useSelector(state => state.items);
    return (
        <div>
            <table>
                <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Harga</th>
                </tr>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nama}</td>
                        <td>{item.harga}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default ItemAdmin
