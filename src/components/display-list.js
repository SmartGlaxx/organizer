import React from 'react'
import {ContextUser} from '../context'
import {FaWindowClose, FaRegTrashAlt, FaEdit} from 'react-icons/fa'

const DisplayList =({eachCategory})=>{
	const { displayList, deleteItem, editItem, closeList, categories, selectedCategory} = ContextUser();
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
		<h3 className='listname'>{listName}</h3>
		<button onClick={closeList} className='closeBtn'><FaWindowClose /></button>
		<ul className='listContainer'>
		{namer.map((item , index)=>{
			return <>
			<li className='listItems'>
			<div>
			{item.name}
			</div>
			<span >
			<button onClick={()=>{deleteItem(listName, item.id)}} className='deleteBtn'><FaRegTrashAlt /></button>
			<button onClick={()=>{editItem(listName, item.name, item.id)}} className='editBtn'><FaEdit/></button>
			</span>
			</li>
			</>
			})}
			</ul>
		</div>
		)
}

export default DisplayList;