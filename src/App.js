import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import Categories from './components/category'
import {ContextUser} from './context'
import './App.css'
import Form from './components/category-form'
import {FaWindowClose, FaRegTrashAlt, FaPlusCircle, 
FaPlus, FaMinus, FaAngleDown, FaAngleUp} from 'react-icons/fa'

const Container = styled.div` 
background: #eee;
height: auto;
display: block;

.todo-btns{
	display: flex;
	align-items: center;
	justify-content: center
}
.todo-btn{
	background: black;
	border: none;
	padding: 0.5rem;
	margin: 0 0.5rem;
	border-radius: 6px;
	transition: all 0.3s;
	cursor:pointer;
	
}
.todo-btn:hover{
	background: #222
}
` 

function App() {
	const {addNewItemm, displayedForm, closeForm, selectedCategory,
	displayList, closeList, deleteItem, addCategory, setCategory,
	 categories, category, color, addToCategory, setItemName, 
	 itemName, overlay, categoryExists, closeNotice, categoryIsNull,
	createTodo, showOptions, setCreateTodo, showSelectOptions, showCategoryForm,
	 showCategoryFormValue, closeAllDivs, createNote, setCreateNote
	} = ContextUser()

	const [list, setList] = useState([]);
	const [item, setItem] = useState({});

 

  return (
    <Container >
	<div className='headerNav'>Smart's Organizer {(createTodo && '- My Todo List' )|| (createNote && '- My Notes')}</div>
	{overlay && <div className='overlay' onClick={closeAllDivs}></div>}
	{categoryExists && <div className='categoryWarningoverlay'><h2>This category already exists</h2>
	<button className='closeBtn' style={{color: 'white'}} onClick={closeNotice}><FaWindowClose/></button>
	</div>}
	{categoryIsNull &&  <div className='categoryWarningoverlay'><h2>Please enter value for Category</h2>
	<button className='closeBtn' style={{color: 'white'}} onClick={closeNotice}><FaWindowClose/></button>
	</div>}
	{showSelectOptions && <div className='show-options'>
		<button onClick={setCreateTodo}>Todo List</button><br/>
		<button  onClick={setCreateNote}>My Notes</button><br/>
		<button>My Diary</button><br/>
	</div>}
	
	<button className='plusItem' onClick={showOptions}
	><FaPlusCircle className='plusItemIcon'/></button>
	{createTodo && <div className = 'category-maker'>
		Create Category 
		{!showCategoryFormValue && <FaAngleDown className='plusCategoryIcon' onClick={()=>{showCategoryForm(true)}}/>}
		{showCategoryFormValue && <FaAngleUp className='plusCategoryIcon' onClick={()=>{showCategoryForm(false)}}/>}
		{showCategoryFormValue && <Form />}
	</div>}
	{createNote && <div className='create-note'>
		Note
	</div>}
 		<div className='categoryList'>
		 {categories.map((eachCategory, i) =>{
			 return <Categories key ={i}
			 eachCategory ={eachCategory} />
		 })}
	</div>
    </Container>
  );
}

export default App;
