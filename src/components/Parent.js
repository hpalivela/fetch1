import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [childData,setChildData] = useState("")
  return (
    <div>
        {childData}
      {/* <Child setChildData={setChildData} childData={childData}/> */}
      <Child setChildData={setChildData}/>

    </div>
  )
}

export default Parent
