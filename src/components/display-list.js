import React from 'react'
import {ContextUser} from '../context'
import {FaWindowClose, FaRegTrashAlt} from 'react-icons/fa'

const DisplayList =({eachCategory})=>{
	const { displayList, deleteItem, closeList, categories, selectedCategory} = ContextUser();
	let namer = [];
	displayList && <div>
	{categories.filter(item =>{
		if(item.id === selectedCategory){
				namer.push(...item.list)
		}
	})}</div>

	let eachColor = ''
	categories.map(item => {
		if(item.id == selectedCategory){
			//  eachColor = item.color
			return	eachColor = (item.categoryColor)	
		}
		return	eachColor 
	})
	    
	let listName= '';
	categories.map(item => {
		if(item.id == selectedCategory){
			return listName = item.name
		}
		return listName
	})
		return (
        displayList && <div className='displayList' style={{background: eachColor}}>
		<h3>{listName}</h3>
		<button onClick={closeList} className='closeBtn'><FaWindowClose /></button>
		<ul className='listContainer'>
		{namer.map(item =>{
			return <>
			<li className='listItems'>
			{item}
			<button onClick={()=>{deleteItem(selectedCategory, item)}} className='deleteBtn'><FaRegTrashAlt /></button>
			</li>
			</>
			})}
			</ul>
		</div>
		)
}

export default DisplayList;