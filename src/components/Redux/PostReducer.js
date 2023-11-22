import { GETALL, SINGLEPOST } from "./PostActionTypes"

const intialState={
    allPosts:[],
    onePost:[]
}
export const postsReducer=(state=intialState,action)=>{
    switch(action.type){
        case GETALL:
            return {...state,allPosts:action.payload}
        case SINGLEPOST:
            return{...state,onePost:action.payload} 
        default:
            return state;
    }

} 