import React from 'react'
import {ContextUser} from '../context'
import {FaWindowClose, FaRegTrashAlt} from 'react-icons/fa'


const ItemForm = ()=>{
 const { addNewItemm, addToCategory, closeForm, displayedForm, itemName, setItemName, categories, 
 selectedCategory, isEditing} = ContextUser();

    	let eachColor2 = ''
	categories.map(item => {
		if(item.id == selectedCategory){
			return	eachColor2 = (item.categoryColor)	
           
		}
		return	eachColor2 
	})
    //  console.log(eachColor2)
	    
	let listName= '';
	categories.map(item => {
		if(item.id == selectedCategory){
			 return listName = item.name
            
		}
		return listName
	})
    //console.log(item.name)
   
    return(
    addNewItemm && 
        <div className='addToCategory' style={{ background: eachColor2}}>
        <form onSubmit={(e)=>addToCategory(e, listName)}>
        <div>Add item to</div>
        <h3>{listName}</h3>
        <button onClick={closeForm} className='closeBtn'><FaWindowClose /></button>
            {/* <h3>Add item to {displayedForm}</h3> */}
            <input type = 'text' value={itemName}
            onChange={(e)=>{setItemName(e.target.value)}}
            />
            <button style={{background: `${isEditing ? 'orange' : 'green' }`, 
            color: `${isEditing ? 'black' : 'white' }`, fontWeight: 'bold'}}>{`${ isEditing ? "Update Item" : 'Add Item'}`}</button>
        </form>
        </div>
    )
}

export default ItemForm