import { v4 as uuidv1 } from 'uuid';

const reducer = (state, action)=>{
    switch(action.type){
        
        case 'SET_COLOR':
        return {...state, color: action.payload, categoryExists: false}
        break;

        case 'SET_CATEGORIES':
        return {...state, categories: [...state.categories, {id:uuidv1(), name: state.category, categoryColor: action.payload , list: []} ], categoryExists: false }
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
        case 'DELETE_CATEGORY':
        return {...state, categories: action.payload }
        break;
        case 'ITEM_ADDED_TO_CATEGORY':
        return {...state, itemAdded:  action.payload }
        break;

        case 'SET_CATEGORY':
        return {...state, category: action.payload, formWarning: false}
        break;
        case 'DISPLAY_ITEM_FORM':
        return {...state, addNewItemm: action.payload.show, overlay: true, displayedForm: action.payload.itemName, selectedCategory: action.payload.idCategory}
        break;
        case 'CLOSE_FORM':
        return {...state, addNewItemm: action.payload, overlay: false, isEditing: false}
        break;
        case 'SELECTED_CATEGORY':
        return {...state, selectedCategory: action.payload, displayList: true, overlay: true}
        break;
        case 'CLOSE_LIST':
        return {...state, displayList: false, overlay: false}
        break;
        case 'DELETE_ITEM':
        return {...state, categories:  action.payload }
        break;
        case 'SET_EDIT_VALUE':
        return {...state, itemName:  action.payload.itemEdit , addNewItemm: true, isEditing: true, displayList: false, 
        editItemId: action.payload.id, displayedForm: action.payload.cateName}
        break;
        case 'SET_EDITED_ITEM':
        return {...state, categories:  action.payload, isEditing: false}
        break;
        case 'CATEGORY_EXISTS':
        return {...state, categoryExists: true,  overlay: true}
        break;
        case 'CATEGORY_IS_NULL':
        return {...state, categoryIsNull: true,  overlay: true}
        break;
        case 'ITEM_IS_NULL':
        return {...state, itemIsNull: true,  overlay: true, addNewItemm: false}
        break;  
        case 'SET_NOTICE_CLOSE':
        return {...state, categoryExists: false, categoryIsNull: false, itemIsNull:false, overlay: false}
        break;
        // case 'SHOW_OPTIONS':
        // return {...state, showSelectOptions:true, overlay: true}
        // break;  
        // case 'SET_CREATE_TODO':
        // return {...state, createTodo: true, createNote: false, createDiary: false, overlay: false, showSelectOptions: false}
        // break;  
        case 'SHOW_CATEGORY_FORM':
        return {...state, showCategoryFormValue: action.payload}
        break;
        case 'CLOSE_ALL_TOP_DIVS':
        return {...state, displayList : false, showSelectOptions: false, categoryExists: false, categoryIsNull: false, addNewItemm: false, overlay: false}
        break;
        // case 'SET_CREATE_NOTE':
        // return {...state, createTodo: false, createNote: true, createDiary: false, overlay: false, showSelectOptions: false}
        // break;
        case 'SET_COLOR_WARNING':
        return {...state, formWarning: true}
        break;
        case 'UNSET_COLOR_WARNING':
        return {...state, formWarning: false }
        break;

        default:
        return state

    }
}

export default reducer