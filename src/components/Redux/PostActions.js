import { GETALL, SINGLEPOST } from "./PostActionTypes"

const URL='https://jsonplaceholder.typicode.com/posts'

export const getAll=()=>{
    return(dispatch)=>{
        try{
        fetch(URL).then((res)=>res.json()).then((data)=>dispatch(
        {
            type:GETALL,
            payload:data,
        }
       ))
    }
    catch(error){
        console.log('ERROR');
    }
    }
}
export const single=(id)=>{
    return(dispatch)=>{
        try{
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>response.json())
            .then((singleLine)=>dispatch({
                type:SINGLEPOST,
                payload:singleLine,
            }))
        }
        catch(error){
            console.log('ERROR IN SINGLE POST')
        }
    }
    }