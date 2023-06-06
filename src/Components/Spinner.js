import React from 'react'
import loading from './PVtR.gif'

const Spinner = () =>{
    return (
      <div className='text-center'>
        <img className='my3' style={{width:'100px' ,height:"100px"}} src={loading} alt="Loading"/>
      </div>
    )
}
export default Spinner