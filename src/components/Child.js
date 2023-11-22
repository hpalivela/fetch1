import React from 'react'

const Child = ({setChildData}) => {
  return (
    <div>
      <input type="text" onChange={(e)=>setChildData(e.target.value)}/>
    </div>
  )
}

export default Child

// import React from 'react'

// const Child = ({setChildData,childData}) => {
//   return (
//     <div>
//       <input type="text" onChange={(e)=>setChildData(e.target.value)}/>
//     </div>
//   )
// }

// export default Child

// import React from 'react'

// const Child = (props) => {
//   return (
//     <div>
//       <input type="text" onChange={(e)=>props.setChildData(e.target.value)}/>
//     </div>
//   )
// }

// export default Child
