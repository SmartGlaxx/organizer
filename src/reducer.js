import { v4 as uuidv1 } from 'uuid';

const reducer = (state, action)=>{
    switch(action.type){
        
        case 'SET_COLOR':
        return {...state, color: action.payload}
        break;

        case 'SET_CATEGORIES':
        return {...state, categories: [...state.categories, {id:uuidv1(), name: state.category, categoryColor: action.payload, list: []} ] }
        break;
        case 'EMPTY_CATEGORY':
        return {...state, category: '' }
        break;
        case 'SET_ITEM_NAME':
        return {...state, itemName: action.payload }
        break;
        case 'EMPTY_ITEM_NAME':
        return {...state, itemName: '' }
        break;


        case 'SET_CATEGORY':
        return {...state, category: action.payload}
        break;
        case 'DISPLAY_ITEM_FORM':
        return {...state, addNewItemm: action.payload.show, displayedForm: action.payload.itemName}
        break;
        case 'CLOSE_FORM':
        return {...state, addNewItemm: action.payload}
        break;
        case 'SELECTED_CATEGORY':
        return {...state, selectedCategory: action.payload, displayList: true}
        break;
        case 'CLOSE_LIST':
        return {...state, displayList: false}
        break;
        case 'DELETE_ITEM':
        const category = action.payload.category;
        const itemID = action.payload.itemID
        
        const newList = state.categories.filter(item => item.id !== itemID)
       // console.log(newList)
        const newCategories = state.categories
         //let newCategory = {}
         let newCategory = newCategories.filter(categor => categor.name == category)
         const newColor = newCategory[0].categoryColor
         const newId = newCategory[0].id
         const newName = newCategory[0].name

         let otherCategory = newCategories.filter(categor => categor.name != category)
        //const rt = newCategory.list.filter(item => item.id == itemID)      
        let remainingItem = newCategory[0].list.filter(item => {
            return item.id !== itemID
        })
        console.log(remainingItem)
        const wrdCateg = {list:remainingItem, name: newName , id: newId ,categoryColor: newColor}
        const fCategories = [...otherCategory, wrdCateg]
       
        //const filtered = newCategory.list.filter(item => item.id !== itemID)

         return {...state, categories:  fCategories }
        break;

        default:
        return state

    }
}

export default reducer