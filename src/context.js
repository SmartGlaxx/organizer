import React, {useEffect} from 'react';
import reducer from './reducer';
import { v4 as uuidv1 } from 'uuid';

const AppContext = React.createContext();
const data = window.localStorage.getItem('categories');
const jsonData = JSON.parse(data)

const initialState ={
    addNewItemm: false,
    displayedForm: '',
    selectedCategory: '',
    displayList: false,
    color: '#eee',
    category: '',
    categories: jsonData || [],
    itemName: '',
    isEditing: false,
    overlay: false,
    editItemId: 0,
    categoryExists: false,
    categoryIsNull: false,
    itemIsNull: false,
    showSelectOptions:false,
    createDiary: false,
    showCategoryFormValue: false,
    formWarning: false,
    itemAdded: false
}
const AppProvider = ({children})=>{
    const [state, dispatch] = React.useReducer(reducer, initialState)

    useEffect(() => {
        window.localStorage.setItem('categories', JSON.stringify(state.categories))
    }, [state.itemAdded, state.categories])

    const addCategory = ()=>{
		
		const formValue= document.forms[0]
		for(let i=0; i<formValue.length; i++){
			if(formValue[i].checked){
				// setColor(formValue[i].value)
                dispatch({type: 'SET_COLOR', payload: formValue[i].value})
                dispatch({type: 'SET_CATEGORIES', payload: formValue[i].value})
                //dispatch({type: 'SET_LOCAL_HOST', payload:})
			}
		}
         dispatch({type: 'EMPTY_CATEGORY' })
		
	}

    const setItemName =(name)=>{
       dispatch({type: 'SET_ITEM_NAME', payload: name})
    }

    const addToCategory = (e, listName)=>{
		 e.preventDefault()

         if(state.itemName.length == ''){
           dispatch({type: 'ITEM_IS_NULL'})
        }else{
		if(state.isEditing){
           
            //all categorie
             const newCategories = state.categories
             // category of item to edit
            let newCategory = newCategories.filter(categor => categor.name == listName)
            // other categories in the state.categories array
             let otherCategory = newCategories.filter(categor => categor.name != listName)

            // get that category's other properties
            const newColor = newCategory[0].categoryColor
            const newId = newCategory[0].id
            const newName = newCategory[0].name


            const categName = state.categories.map(categ =>
            { 
                //comfirm name on displayed form
            	if(categ.name == state.displayedForm){                
            		const editedName = state.itemName
                    //get other items in the list
                    const otherItems = categ.list.filter(item => item.id !== state.editItemId)
                    //create new list with remaining items in list not being edited
                    const listWithoutEditItem = {list:otherItems, name: newName , id: newId ,categoryColor: newColor}
                    //create a new list with the other items and the edited item
                    listWithoutEditItem.list = [{id: state.editItemId, name:editedName}, ...listWithoutEditItem.list]
                    
                    const editedList = listWithoutEditItem;
                    //combine new list with other categories
                    const finalCategories = [editedList, ...otherCategory]
                    dispatch({type: 'SET_EDITED_ITEM', payload: finalCategories})
            // 		//const newlist = categ.list.push({id: state.editItemId, name:editedName})
                
			   } 
            })
        }
        else{
            const categName = state.categories.map(categ =>
		{
            
			if(categ.name == state.displayedForm){  
                console.log(state.itemAdded)              
				const catr = state.itemName
				const newlist = categ.list.push({id: uuidv1(), name:catr})
                dispatch({type: 'ITEM_ADDED_TO_CATEGORY', payload: true})
                setTimeout(()=>{
                    dispatch({type: 'ITEM_ADDED_TO_CATEGORY', payload: false})
                }, 5000)
                
			} 
        })
        }
		
		// setItemName('')
         dispatch({type: 'EMPTY_ITEM_NAME'})


    }
		
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
        //get other categories not selected
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

    const editItem = (cateName, itemName, id)=>{
        //console.log(cateName, itemName, id)
        state.categories.map(aCategory => {
            if(aCategory.name == cateName){
               const itemToEdit = aCategory.list.find(item => item.name == itemName)
               const itemEdit = itemToEdit.name
               dispatch({type: 'SET_EDIT_VALUE', payload: {cateName,itemEdit, id}})
            //    dispatch({type: 'SET_IS_EDITING'})
            //    dispatch({type: 'SET_EDIT_ID'})
            }
        })
    }
    const setCategoryExists = ()=>{
        dispatch({type: 'CATEGORY_EXISTS'})
    }

    const closeNotice =()=>{
        dispatch({type: 'SET_NOTICE_CLOSE'})
    }

    const nullCategoryWarning = ()=>{
        dispatch({type: 'CATEGORY_IS_NULL'})
    }
    // const showOptions = ()=>{
    //     dispatch({type: 'SHOW_OPTIONS'})
    // }
    const showCategoryForm =(value)=>{
        dispatch({type: 'SHOW_CATEGORY_FORM', payload: value})
    }
    const closeAllDivs = ()=>{
        dispatch({type: 'CLOSE_ALL_TOP_DIVS'})
    }
    const deleteCategory =(categoryId)=>{
       const categFiltered = state.categories.filter(item => item.id != categoryId)
       dispatch({type: 'DELETE_CATEGORY', payload: categFiltered})
    }
    const checkInput =()=>{
        if(state.category.length > 0){
            dispatch({type: 'UNSET_COLOR_WARNING'})
        }else{
            dispatch({type: 'SET_COLOR_WARNING'})
        }
    }
    
    return <AppContext.Provider value={{
        ...state, setAddNewItem, closeForm, showList, closeList, 
        deleteItem, setCategory, addCategory, addToCategory, setItemName, 
        editItem, setCategoryExists, closeNotice, nullCategoryWarning, 
         showCategoryForm, closeAllDivs, deleteCategory, checkInput
    }}>
        {children}
    </AppContext.Provider>
}

const ContextUser = ()=>{
    return React.useContext(AppContext)
}

export {AppProvider, ContextUser}