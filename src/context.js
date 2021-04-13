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


    const setAddNewItem =({show, itemName, idCategory})=>{
      dispatch({type: 'DISPLAY_ITEM_FORM', payload: {show,itemName,idCategory}})
   
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
         // get all categories in state
         const newCategories = state.categories
         // get the exact category selected
         let newCategory = newCategories.filter(categor => categor.name == category)
         // get that category's other properties
         const newColor = newCategory[0].categoryColor
         const newId = newCategory[0].id
         const newName = newCategory[0].name
        //get aother categories not selected
         let otherCategory = newCategories.filter(categor => categor.name != category)
        // get the selected category's list items and remove clicked item
        let remainingItem = newCategory[0].list.filter(item => {
            return item.id !== itemID
        })
        // create a new category using the items not deleted inside the category
        const wrdCateg = {list:remainingItem, name: newName , id: newId ,categoryColor: newColor}
        // pass back this new ocategory as the new category into the categories array
        const fCategories = [wrdCateg, ...otherCategory]

        dispatch({type: 'DELETE_ITEM', payload: fCategories})
    }
    const setCategory =(categoryName)=>{
        dispatch({type: 'SET_CATEGORY', payload: categoryName})
    }


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