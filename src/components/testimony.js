import React from 'react';
import '../stylesheets/testimony.css'

function TestimonyComponent(){
  return(
    <div className='testimony-container'>
      <img className='testimony-picture'    src={require(`../images/testimonio1.jpg`)} alt='Testimonio 1'/>
      <div className='testimony-text'>
       <p className='name'>
        JOSHUA FROM INDIANA
        </p>

      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      </p>
      </div>

      
    </div>

  )
}
export default TestimonyComponent;