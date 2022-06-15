import React from 'react'
import './Table.css'
function Table() {
  return (
    <div>
      <div className='title'>
        <p style={{marginLeft:"20px", marginTop:"10px"}}>Name</p>
        <p style={{marginLeft:"70px", marginTop:"10px"}}>Price</p>
        <p style={{marginLeft:"80px", marginTop:"10px"}}>Drop</p>
        <p style={{marginLeft:"80px", marginTop:"10px"}}>Gain</p>
   
        <p style={{marginLeft:"120px", marginTop:"10px"}}>Market cap</p>
    
      </div>
    </div>
  )
}

export default Table
