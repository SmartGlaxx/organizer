import React, {useState} from 'react'
import {ContextUser} from '../context'
import styled from 'styled-components'
import {FaWindowClose, FaRegTrashAlt} from 'react-icons/fa'
import DisplayList from './display-list'
import ItemForm from './item-form'

const Container = styled.div`
	${'' /* width: 4rem;
	height: 4rem; */}
	box-shadow: 2px 3px 1px gray;
	border: 1px solid gray;
	display: flex;
	padding: 10px;
	align-items: center;
	justify-content: center;
	
	button{
		text-transform: uppercase;
		background: #777;
		color: #eee
	}
	h3{
		margin: 0;
		
	}
` 

	const Category = ({eachCategory})=>{
	const [name, setName] = useState('')
	// const [addNewItem, setAddNewItem] = useState(false);
	const {categories, selectedCategory, deleteItem, setAddNewItem, setModalOpen, showList, displayList, closeList} = ContextUser();

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

	return <Container style={{background: eachCategory.categoryColor}}>
		<div >
		<h2>{eachCategory.name}</h2>
		<button onClick={()=>{showList(eachCategory.id)}}>View items on list</button><br/>
		<button onClick={()=>{addItem(eachCategory.name, eachCategory.id)} }
		>Add Item</button>
		</div>

		<ItemForm />
		<DisplayList eachCategory ={eachCategory}/>
		

		</Container>
}

export default Category