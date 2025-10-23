import React from 'react'

const App = () => {
   const relatives = ["Rohan", "Priya", "Amit", "Neha"];
  return (
    <div id="main">
               {/* Do not remove the main div */}
    {
            relatives.map((item,index)=>{
              return (
                <>
                <li keyq={`relativeListItem ${index+1}`}>{item}</li>
                </>
              )
            })
          }
    </div>
  )
}

export default App
