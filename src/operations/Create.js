import React, { useEffect } from 'react'

const Create = () => {
    const toDeletePost=3;
    const newObj={
        userId:1,
        title:'New post Title',
        body:'NEW POST IS CREATING',
    }
    const updatedPost={
        userId: 1,
        id: 2,
        title: "updated",
        body: 'updated successfully'
      }
    const specificUpdate={
        title:'specific feild updated'
    }

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts',{
    //         method:'POST',
    //         headers:{
    //             'content-Type':'application/json',
    //         },
    //         body:JSON.stringify(newObj)
    //     })
    //     .then((response)=>response.json()).then((data)=>console.log(data))
    //     .catch((error)=>console.log(error));
    // },[])
    
    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${toDeletePost}`,{
    //         method:'DELETE',
    //     }).then((response)=>{
    //         if(response.status===200){
    //             console.log('deleted successfully')
    //         }else{
    //             console.log('failed to delete')
    //         }
    //     }).catch((error)=>{
    //         console.log('error',error);
    //     })
    // })

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,{
    //         method:'PUT',
    //         headers:{'content-Type':'application/json',
    //         },
    //         body:JSON.stringify(updatedPost)
    //     }).then((response)=>response.json()).then((data)=>console.log(data))
    //     .catch((error)=>console.log('error occured'))
    // })

    //UPDATE SPECIFIC FEILDS:PATCH METHOD
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${2}`,{
            method:'PATCH',
            headers:{'content-Type':'application/json',},
            body:JSON.stringify(specificUpdate)
        }).then((response)=>response.json()).then((data)=>console.log(data))
        .catch((error)=>console.log(error))
    },[])
      
  return (
    <div>
      
    </div>
  )
}

export default Create
