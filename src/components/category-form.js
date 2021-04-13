import React, {useRef} from 'react';
import {ContextUser} from '../context'

const Form = ()=>{
    const colorRef = useRef()
    const {addCategory, category, setCategory, } = ContextUser();
    return (
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
{/* 
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
			<input type='radio' name='color' value='#4a69bd' className='color' /><br/> */}
 			 <button type='submit'>Add</button>
 		</form>
    )
}

export default Form