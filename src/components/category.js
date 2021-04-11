import React, {useState} from 'react'
import {ContextUser} from '../context'
import styled from 'styled-components'

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
const {setAddNewItem, setModalOpen, showList} = ContextUser();


	

	const addItem = (categoryName)=>{
		setAddNewItem({show: true, itemName: categoryName})
		
	}

	return <Container >
		<div >
		<h2>{eachCategory.name}</h2>
		<button onClick={()=>{showList(eachCategory.name)}}>View items on list</button><br/>
		<button onClick={()=>{addItem(eachCategory.name)} }
		>Add Item</button>
		</div>
		</Container>
}

export default Category