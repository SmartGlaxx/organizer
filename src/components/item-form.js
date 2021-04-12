import React from 'react'
import {ContextUser} from '../context'
import {FaWindowClose, FaRegTrashAlt} from 'react-icons/fa'


const ItemForm = ()=>{
    const { addNewItemm, addToCategory, closeForm, displayedForm, 
    itemName, setItemName} = ContextUser();
    return(
    addNewItemm && 
        <div className='addToCategory' style={{display: 'flex',
	justifyContent: 'center'}}>
        <form onSubmit={addToCategory}>
        <button onClick={closeForm}><FaWindowClose /></button>
            <h1>Add item to {displayedForm}</h1>
            <input type = 'text' value={itemName}
            onChange={(e)=>{setItemName(e.target.value)}}
            />
            <button>Add item</button>
        </form>
        </div>
    )
}

export default ItemForm