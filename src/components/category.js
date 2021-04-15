import React, {useState} from 'react'
import {ContextUser} from '../context'
import styled from 'styled-components'
import {FaWindowClose, FaRegTrashAlt, FaPlus, FaMinus, FaTimes} from 'react-icons/fa'
import DisplayList from './display-list'
import ItemForm from './item-form'

const Container = styled.div`
	width: 20rem;
	min-width: 8rem;
	${'' /* height: 4rem; */}
	box-shadow: 2px 3px 1px gray;
	border: 1px solid gray;
	display: flex;
	margin: 5px;
	padding: 10px;
	align-items: center;
	justify-content: center;
	box-shadow: 5px 10px 10px gray;
	position: relative;
	.close-category{
		background: black;
		font-size: 1.3rem;
		position: absolute;
		right: 0.3rem;
		top: 0.3rem;
		display: flex;
		float:right;
		align-items: center;
		justify-content: center;
		padding: 0.15rem;
		border-radius: 5px
	}
	.listname{
		text-align: center
	}
	button{
		text-transform: uppercase;
	}
	h3{
		margin: 0;
	}
` 

	const Category = ({eachCategory})=>{
	const [name, setName] = useState('')
	// const [addNewItem, setAddNewItem] = useState(false);
	const {categories, selectedCategory, deleteItem, setAddNewItem, setModalOpen,
	 showList, displayList, closeList, deleteCategory} = ContextUser();

	// let namer = [];
	// 	displayList && <div>
	// 	{categories.filter(item =>{
	// 		if(item.name === selectedCategory){
	// 				namer.push(...item.list)
	// 		}
	// 	})}</div>

	

	const addItem = (categoryName, categoryId)=>{
		//console.log(categoryId)
		setAddNewItem({show: true, itemName: categoryName, idCategory: categoryId })
		
	}

	return <><Container style={{background: eachCategory.categoryColor}}>
		<div >
	
		<div className='close-category' style={{color: eachCategory.categoryColor}} 
		onClick={()=>{deleteCategory(eachCategory.id)}}><FaTimes /></div>
		
		<h2 className='listname'>{eachCategory.name.length > 20 ? eachCategory.name.slice(0,20)+'...' : eachCategory.name}</h2>
		<div className='todo-btns'>
	
		</div>
		<div style={{display: 'flex'}}>
		<button className='todo-btn' onClick={()=>{showList(eachCategory.id)}} style={{color: eachCategory.categoryColor}}>VIEW LIST</button><br/>
		<button className='todo-btn' onClick={()=>{addItem(eachCategory.name, eachCategory.id)} } style={{color: eachCategory.categoryColor}}
		>ADD ITEM</button>
		</div>
		</div>

		</Container>
		<ItemForm />
		<DisplayList eachCategory ={eachCategory}/>
		</>
}

export default Category