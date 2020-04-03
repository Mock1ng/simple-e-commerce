import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/actions/Actions';
import { ItemContext } from '../context/ItemsContext';
import ItemAdmin from './ItemAdmin';


function Admin() {
    const items = useSelector(state => state.items);
    const { nama, harga } = useContext(ItemContext);
    const [inputNama, setInputNama] = nama;
    const [inputHarga, setInputHarga] = harga;

    const dispatch = useDispatch();

    const updateInputBarang = e => {
        setInputNama(e.target.value);
    }

    const updateInputHarga = e => {
        setInputHarga(e.target.value);
    }

    const submit = e => {
        e.preventDefault();
        console.log(items);
        setInputNama('');
        setInputHarga('');
    }


    return (
        <div className='container'>
            <h1>This is Admin page.</h1>
            <form onSubmit={submit}>
                <input autoComplete='off' placeholder='Nama Produk Baru' type="text" name="namabarang" id="namabarang" value={inputNama} onChange={updateInputBarang} />
                <input autoComplete='off' placeholder='Harga Produk Baru' type="number" name="harga" id="harga" value={inputHarga} onChange={updateInputHarga} />
                <button onClick={() => dispatch(addItem(inputNama, parseInt(inputHarga), items.length + 1))}>Tambah</button>
            </form>
            <br />
            <ItemAdmin />
        </div>
    )
}

export default Admin
