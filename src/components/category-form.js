import React, {useState,useRef} from 'react';
import {ContextUser} from '../context'

const Form = ()=>{
    const colorRef = useRef()
    const {addCategory, category, setCategory, categories, setCategoryExists, nullCategoryWarning,  
	 checkInput, formWarning} = ContextUser();

	const checkAddCategory = (e)=>{
		e.preventDefault()

		if(category.length > 0){
		if(categories.length == 0){
			addCategory()
		}else{
			const nameFind = categories.find(categoryItem => categoryItem.name.toLowerCase() == category.toLowerCase())
			if(nameFind){
				setCategoryExists()
			}else{
				addCategory()
			}			
		}

		}else{
			nullCategoryWarning()
		}

	}
	
    return (
	<form onSubmit={checkAddCategory}>
		 <label htmlFor='category'>Title: </label>
 			<input type='text' value={category} name='category' 
 		onChange = {(e)=>{setCategory(e.target.value)}} className={`${formWarning ? 'categoryInput warning' : 'categoryInput'}`}
 			 /><br/>
			<h4>Select Category Color</h4>
			<div style={{background: '#fc5c65'}} className='colorBox'></div><label htmlFor='#fc5c65'>Fusion Red</label>
			<input type='radio' name='color' value='#fc5c65' className='color' ref={colorRef} checked onChange={checkInput}/><br/>
			<div style={{background: '#12CBC4'}} className='colorBox'></div><label htmlFor='#12CBC4'>Blue Martina</label>
			<input type='radio' name='color' value='#12CBC4' className='color' ref={colorRef} onChange={checkInput}/><br/>
			<div style={{background: '#A3CB38'}} className='colorBox'></div><label htmlFor='#A3CB38'>Android Green</label>
			<input type='radio' name='color' value='#A3CB38' className='color' onChange={checkInput}/><br/>
			<div style={{background: '#D980FA'}} className='colorBox'></div><label htmlFor='#D980FA'>Lavender Tea</label>
			<input type='radio' name='color' value='#D980FA' className='color' onChange={checkInput}/><br/>
			<div style={{background: '#dfe4ea'}} className='colorBox'></div><label htmlFor='#dfe4ea'>City Lights</label>
			<input type='radio' name='color' value='#dfe4ea' className='color' onChange={checkInput}/><br/>

			<div style={{background: '#eccc68'}} className='colorBox'></div><label htmlFor='#eccc68'>Golden Sand</label>
			<input type='radio' name='color' value='#eccc68' className='color' /><br/>
			<div style={{background: '#a4b0be'}} className='colorBox'></div><label htmlFor='#a4b0be'>Peace</label>
			<input type='radio' name='color' value='#a4b0be' className='color' /><br/>
			<div style={{background: '#FFC312'}} className='colorBox'></div><label htmlFor='#FFC312'>Sunflower</label>
			<input type='radio' name='color' value='#FFC312' className='color' /><br/>
			{/* <div style={{background: '#FDA7DF'}} className='colorBox'></div><label htmlFor='#FDA7DF'>Lavender Rose</label>
			<input type='radio' name='color' value='#FDA7DF' className='color' /><br/> */}
			{/* <div style={{background: '#ffa502'}} className='colorBox'></div><label htmlFor='#ffa502'>Orange</label>
			<input type='radio' name='color' value='#ffa502' className='color' /><br/> */}
			{/* <div style={{background: '#4a69bd'}} className='colorBox'></div><label htmlFor='#4a69bd'>Azraq Blue</label>
			<input type='radio' name='color' value='#4a69bd' className='color' /><br/> */}
 			 <button type='submit' className='addBtn'>CREATE CATEGORY</button>
 		</form>
    )
}

export default Form