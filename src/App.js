import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import Categories from './components/category'
import {ContextUser} from './context'
import './App.css'
import Form from './components/category-form'
import Footer from './components/footer'
import Header from './components/header'
import {FaWindowClose, FaRegTrashAlt, FaPlusCircle, 
FaPlus, FaMinus, FaAngleDown, FaAngleUp} from 'react-icons/fa'

const Container = styled.div` 
background: #eee;
min-height: 100vh;
height: auto;
display: block;
padding: 0;
box-sizing:border-box;

.todo-btns{
	display: flex;
	align-items: center;
	justify-content: center;
	
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
.warning{
	border: 2px solid red
}
h3{
	margin: 0.1rem 0 1rem
}

` 

function App() {
	const {addNewItemm, displayedForm, closeForm, selectedCategory,
	displayList, closeList, deleteItem, addCategory, setCategory,
	 categories, category, color, addToCategory, setItemName, 
	 itemName, overlay, categoryExists, closeNotice, categoryIsNull,
	  showCategoryForm, showCategoryFormValue, closeAllDivs, itemIsNull
	} = ContextUser()

	const [list, setList] = useState([]);
	const [item, setItem] = useState({});

 

  return (
    <Container >
	<Header />
	{overlay && <div className='overlay' onClick={closeAllDivs}></div>}
	{categoryExists && <div className='categoryWarningoverlay'><h3>This category already exists</h3>
	<button className='closeBtn' style={{color: 'white'}} onClick={closeNotice}><FaWindowClose/></button>
	</div>}
	{categoryIsNull &&  <div className='categoryWarningoverlay'><h3>Please enter the name of your category</h3>
	<button className='closeBtn' style={{color: 'white'}} onClick={closeNotice}><FaWindowClose/></button>
	</div>}
	{itemIsNull &&  <div className='categoryWarningoverlay'><h3>Please enter the name of your to-do item</h3>
	<button className='closeBtn' style={{color: 'white'}} onClick={closeNotice}><FaWindowClose/></button>
	</div>}
	
	{/* {showSelectOptions && <div className='show-options'>
		<button onClick={setCreateTodo}>Todo List</button><br/>
		<button  onClick={setCreateNote}>My Notes</button><br/>
		<button>My Diary</button><br/>
	</div>} */}
	
	{/* <button className='plusItem'  ><FaPlusCircle className='plusItemIcon'/></button> */}
	 <><div className = 'category-maker'>
		<div className='category-maker-top'>
		<h3>Create Category </h3>
		<div>
		{!showCategoryFormValue && <FaAngleDown className='plusCategoryIcon' onClick={()=>{showCategoryForm(true)}}/>}
		{showCategoryFormValue && <FaAngleUp className='plusCategoryIcon' onClick={()=>{showCategoryForm(false)}}/>}
		</div>
		</div>
		{showCategoryFormValue && <Form />}
	</div>
	<div className='categoryList'>
		 {categories.map((eachCategory, i) =>{
			 return <Categories key ={i}
			 eachCategory ={eachCategory} />
		 })}
	</div></>
 	<Footer />
    </Container>
  );
}

export default App;
