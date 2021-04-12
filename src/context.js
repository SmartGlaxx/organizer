import React from 'react';
import reducer from './reducer';
import { v4 as uuidv1 } from 'uuid';

const AppContext = React.createContext();

const initialState ={
    addNewItemm: false,
    displayedForm: '',
    selectedCategory: '',
    displayList: false,
    color: '#eee',
    category: '',
    categories: [],
    itemName: ''

}
const AppProvider = ({children})=>{
    const [state, dispatch] = React.useReducer(reducer, initialState)


    const addCategory = (e)=>{
		e.preventDefault()
		const formValue= document.forms[0]
		for(let i=0; i<formValue.length; i++){
			if(formValue[i].checked){
				// setColor(formValue[i].value)
                dispatch({type: 'SET_COLOR', payload: formValue[i].value})
                dispatch({type: 'SET_CATEGORIES', payload: formValue[i].value})
			}
		}
		
		// setCategories(prev =>{
		// 	return [...prev,  {name: category, list: []}]
		// })
        
        //  dispatch({type: 'SET_CATEGORIES'})
         dispatch({type: 'EMPTY_CATEGORY', })
		// setCategory('')
	}

    const setItemName =(name)=>{
       dispatch({type: 'SET_ITEM_NAME', payload: name})
    }

    const addToCategory = (e)=>{
		e.preventDefault()
		const categName = state.categories.map(categ =>
		{
			if(categ.name == state.displayedForm){                
				const catr = state.itemName
				const newlist = categ.list.push({id: uuidv1(), name:catr})
			
			} })
		
		// setItemName('')
         dispatch({type: 'EMPTY_ITEM_NAME'})
		
	}


    const setAddNewItem =({show, itemName})=>{
      dispatch({type: 'DISPLAY_ITEM_FORM', payload: {show,itemName}})
   
    }
    const closeForm = ()=>{
        dispatch({type: 'CLOSE_FORM', payload: false})
    }

    const showList = (categoryID)=>{
        dispatch({type: 'SELECTED_CATEGORY', payload: categoryID})
    }

    const closeList = ()=>{
        dispatch({type: 'CLOSE_LIST'})
    }
    const deleteItem =(category, itemID)=>{
        dispatch({type: 'DELETE_ITEM', payload: {category, itemID}})
    }
    const setCategory =(categoryName)=>{
        dispatch({type: 'SET_CATEGORY', payload: categoryName})
    }

   console.log(uuidv1())

    return <AppContext.Provider value={{
        ...state, setAddNewItem, closeForm, showList, closeList,
        deleteItem, setCategory, addCategory, addToCategory, setItemName, 
    }}>
        {children}
    </AppContext.Provider>
}

const ContextUser = ()=>{
    return React.useContext(AppContext)
}

export {AppProvider, ContextUser}