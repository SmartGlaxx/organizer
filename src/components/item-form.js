import React from 'react'
import {ContextUser} from '../context'
import {FaWindowClose, FaRegTrashAlt} from 'react-icons/fa'


const ItemForm = ()=>{
 const { addNewItemm, addToCategory, closeForm, displayedForm, itemName, setItemName, categories, selectedCategory} = ContextUser();

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
        <div className='addToCategory' style={{display: 'flex',
	justifyContent: 'center', background: eachColor2}}>
        <form onSubmit={addToCategory}>
        <h3>{listName}</h3>
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