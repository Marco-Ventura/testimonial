import React from 'react';
import '../stylesheets/testimony.css'

function TestimonyComponent(props){
  return(
    <div className='testimony-container'>
      <img className='testimony-picture' 
      src={require(`../images/testimonio${props.picture}.jpeg`)} alt='Testimonio 1'/>
      <div className='testimony-text'>
       <p className='name'>
        {props.name} FROM {props.city}
       </p>

      <p>
        {props.testimony}
      </p>
      </div>

      
    </div>

  )
}
export default TestimonyComponent;