// import React from 'react'

// export default function Grid () {
  
//   return (

//     <div className="container">
//       <div className="item">1</div>
//       <div className="item">2</div>
//       <div className="item">3</div>
//       <div className="item">4</div>
//       <div className="item">5</div>
//       <div className="item">6</div>
//     </div>
//   )
// }

import React from 'react'

export default function Grid (props) {
  
  const cells = props.arrOfObj.map(obj => 
    <div style={{ backgroundColor: `${'#'+Math.random().toString(16).substr(-6)}`}} 
    className="item">{obj}</div>)

  return (

    <div className="container">
      {cells}
    </div>
  )
}