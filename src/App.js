import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import './App.css';
import Categories from './components/category'
import {ContextUser} from './context'
import {FaWindowClose, FaRegTrashAlt} from 'react-icons/fa'

const Container = styled.div` 
background: #eee;
height: 100vh;
display: flex;
justify-content: space-between;

.category-maker{
	display: inline-block;
	margin: 2rem 1rem;
	justify-content: center;
	width: 40%;
	border: 1px solid black
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
	margin: 2rem 1rem;
	width: 40%;
	border: 1px solid black
}
.overlay{
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	right: 0;
	left:0;
	position: absolute;
	background: rgba(15,15,15, 0.9)
}
.closeBtn{
	position:absolute;
	right: 1rem;
	top: 1rem
	
}
.listContainer {
	padding: 2rem 1rem
}
.listItems{
	margin: 0.5rem;
	list-style-type: none
}
.deleteBtn{
	float:right
}
` 

function App() {
	const {addNewItemm, displayedForm, closeForm, selectedCategory,
	displayList, closeList, deleteItem, addCategory, setCategory,
	 categories, category, color, addToCategory, setItemName, 
	 itemName,
	} = ContextUser()
	// const [itemName, setItemName] = useState('')
	// const [color, setColor] = useState('#eee')
	const [list, setList] = useState([]);
	const [item, setItem] = useState({});
	// const [category, setCategory] = useState('')
	// const [categories, setCategories] = useState([])
	

	const colorRef = useRef()

	// const addCategory = (e)=>{
	// 	e.preventDefault()
	// 	const formValue= document.forms[0]
	// 	for(let i=0; i<formValue.length; i++){
	// 		if(formValue[i].checked){
	// 			setColor(formValue[i].value)
	// 		}
	// 	}
		
	// 	setCategories(prev =>{
	// 		return [...prev,  {name: category, list: []}]
	// 	})
	// 	setCategory('')
	// }
	
	// const addToCategory = (e)=>{
	// 	e.preventDefault()
	// 	const categName = categories.map(categ =>
	// 	{
	// 		if(categ.name == displayedForm){
	// 			const catr = itemName
	// 			const newlist = categ.list.push(catr)
			
	// 		} })
		
	// 	setItemName('')
		
	// }
	let namer = [];
		displayList && <div>
		{categories.filter(item =>{
			if(item.name === selectedCategory){
				 namer.push(...item.list)
			}
		})}</div>
// console.log(color)	
 console.log(displayList)
 

  return (
    <Container style={{background: color}}>
	{addNewItemm && <div className='overlay'><h1>OVEWRLAY</h1></div>}
	<div className = 'category-maker'>
	Create Category
 		<form onSubmit={addCategory}>
		 <label htmlFor='category'>Title</label>
 			<input type='text' value={category} name='category'
 		onChange = {(e)=>{setCategory(e.target.value)}}
 			 /><br/>
			  <h4>Select Note Color</h4>
			<div style={{background: '#fc5c65'}} className='colorBox'></div><label htmlFor='#fc5c65'>Fusion Red</label>
			<input type='radio' name='color' value='#fc5c65' className='color' ref={colorRef}/><br/>
			<div style={{background: '#45aaf2'}} className='colorBox'></div><label htmlFor='#45aaf2'>High Blue</label>
			<input type='radio' name='color' value='#45aaf2' className='color' ref={colorRef}/><br/>
			<div style={{background: '#ff4757'}} className='colorBox'></div><label htmlFor='#ff4757'>Android Green</label>
			<input type='radio' name='color' value='#ff4757' className='color' /><br/>
			<div style={{background: '#D980FA'}} className='colorBox'></div><label htmlFor='#D980FA'>Lavender Tea</label>
			<input type='radio' name='color' value='#D980FA' className='color' /><br/>
			<div style={{background: '#dfe4ea'}} className='colorBox'></div><label htmlFor='#dfe4ea'>City Lights</label>
			<input type='radio' name='color' value='#dfe4ea' className='color' /><br/>

			<div style={{background: '#eccc68'}} className='colorBox'></div><label htmlFor='#eccc68'>Golden Sand</label>
			<input type='radio' name='color' value='#eccc68' className='color' /><br/>
			<div style={{background: '#a4b0be'}} className='colorBox'></div><label htmlFor='#a4b0be'>Peace</label>
			<input type='radio' name='color' value='#a4b0be' className='color' /><br/>
			<div style={{background: '#FFC312'}} className='colorBox'></div><label htmlFor='#FFC312'>Sunflower</label>
			<input type='radio' name='color' value='#FFC312' className='color' /><br/>
			<div style={{background: '#FDA7DF'}} className='colorBox'></div><label htmlFor='#FDA7DF'>Lavender Rose</label>
			<input type='radio' name='color' value='#FDA7DF' className='color' /><br/>
			<div style={{background: '#ffa502'}} className='colorBox'></div><label htmlFor='#ffa502'>Orange</label>
			<input type='radio' name='color' value='#ffa502' className='color' /><br/>
			<div style={{background: '#4a69bd'}} className='colorBox'></div><label htmlFor='#4a69bd'>Azraq Blue</label>
			<input type='radio' name='color' value='#4a69bd' className='color' /><br/>
 			 <button type='submit'>Add</button>
 		</form>
		</div>
 		<div className='categoryList'>
		 {categories.map((eachCategory, i) =>{
			 return <Categories key ={i}
			 eachCategory ={eachCategory} />
		 })}
	</div>

	{addNewItemm && 
	<div className='addToCategory'>
	<form onSubmit={addToCategory}>
	<button onClick={closeForm}><FaWindowClose /></button>
		<h1>Add item to {displayedForm}</h1>
		<input type = 'text' value={itemName}
		 onChange={(e)=>{setItemName(e.target.value)}}
		/>
		<button>Add item</button>
	</form>
	</div>
	}

	{displayList && <div className='displayList'>
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
	</div>}
    </Container>
  );
}

export default App;
