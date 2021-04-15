import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import Categories from './components/category'
import {ContextUser} from './context'
import Form from './components/category-form'
import {FaWindowClose, FaRegTrashAlt, FaPlusCircle, 
FaPlus, FaMinus, FaAngleDown, FaAngleUp} from 'react-icons/fa'

const Container = styled.div` 
background: #eee;
height: 100vh;
display: block;
${'' /* justify-content: space-between; */}

.headerNav{
	height: 4rem;
	background: #8bd;
	position: relative;
	top: 0;
	text-align: center;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: bold;

}
.plusItem{
	background: transparent;
	color: navy;
	top: 0.5rem;
	left: 0.5rem;
	border: none;
	font-size: 2rem;
	position: absolute;
	z-index: 1000
}
.plusItemIcon:hover{
	transform: scale(1.1);
	transition: all 0.5s;
	cursor: pointer;
	color: #00b;

}
.plusCategoryIcon{
	font-size: 1.5rem;
	float: right;
	margin-top: 0.3rem;
	margin-right: 0.3rem
}
.show-options{
	z-index: 10;
	position: absolute;
	top: 3rem;
	left: 1rem;
	display: block
}
.category-maker{
	margin: 2rem 1rem;
	padding: 1.3rem;
	justify-content: center;
	width: 40%;
	border: 1px solid black
}
.categoryInput{
	max-width: 90% 
}
.addToCategory{
	width: 50%;
	height: 70%;
	${'' /* margin: 15% auto; */}
	position: absolute;
	top: 2rem;
	left: 25%;
	background: #999;
	display: flex;
	justify-content: center;
}
.displayList{
	width: 50%;
	height: 70%;
	${'' /* margin: 15% auto; */}
	position: absolute;
	top: 2rem;
	left: 25%;
	background: #ddd;
	padding: 1rem;
	${'' /* display: flex; */}
	justify-content: center;
}
.colorBox {
	width: 1rem;
	height: 1rem;
	display: inline-block;
	margin: 0 1rem 
}
.categoryList {
	margin: 2rem 10%;
	width: 80%;
	border: 1px solid black
}
.overlay{
	width: 100vw;
	height: 100vh;
	top: 0;
	bottom: 0;
	right: 0;
	left:0;
	position: absolute;
	background: rgba(15,15,15, 0.9)
}
body{
	margin:0;
	padding: 0
}
.categoryWarningoverlay{
	width: 60vw;
	height: 60vh;
	top: 0;
	bottom: 0;
	right: 0;
	left:0;
	color: darkorange;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	background: rgba(15,15,15, 0.9);
	background: #ddd;
	margin: 20vh 20vw;
	padding: 1rem;
	box-sizing: border-box;
	text-align: center;
}
.closeBtn{
	position:absolute;
	right: 1rem;
	top: 1rem;
	background: red;
	font-size:1.3rem;
	padding: 0.3rem;
	display: flex;
	aligh-items: center;
	justify-content: center;
	border-radius: 3px;
	
}
.listContainer {
	padding: 2rem 1rem
}
.listItems{
	margin: 0.8rem;
	list-style-type: none;
	width: 100%
}
.deleteBtn{
	float:right;
	background: red;
	padding: 0.2rem;
	margin: 0 1px
}
.editBtn{
	float: right;
	background: green;
	padding: 0.2rem;
	margin: 0 1px
}
@media screen and (max-width: 800px){
	.category-maker{
		width: 80%;
		margin: 0 auto
	}
}
` 

function App() {
	const {addNewItemm, displayedForm, closeForm, selectedCategory,
	displayList, closeList, deleteItem, addCategory, setCategory,
	 categories, category, color, addToCategory, setItemName, 
	 itemName, overlay, categoryExists, closeNotice, categoryIsNull,
	createTodo, showOptions, setCreateTodo, showSelectOptions, showCategoryForm,
	 showCategoryFormValue, closeAllDivs
	} = ContextUser()

	const [list, setList] = useState([]);
	const [item, setItem] = useState({});

 

  return (
    <Container >
	<div className='headerNav'>Header</div>
	{overlay && <div className='overlay' onClick={closeAllDivs}></div>}
	{categoryExists && <div className='categoryWarningoverlay'><h2>This category already exists</h2>
	<button className='closeBtn' style={{color: 'white'}} onClick={closeNotice}><FaWindowClose/></button>
	</div>}
	{categoryIsNull &&  <div className='categoryWarningoverlay'><h2>Please enter value for Category</h2>
	<button className='closeBtn' style={{color: 'white'}} onClick={closeNotice}><FaWindowClose/></button>
	</div>}
	{showSelectOptions && <div className='show-options'>
		<button onClick={setCreateTodo}>Todo List</button><br/>
		<button>My Notes</button><br/>
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
