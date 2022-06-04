import React from 'react'
import Chai from './Chai'
import Chaiii from './Chaiii'

import Chaii from './Chaii'
import styledComponents from 'styled-components'

function Home() {
  return (
      <HiIamContainer>
      
       
        <Chaii
        title="model X"
        description="test"
        backgroundImg="model-x.jpg"
        
       />
       <Chaiii
        title="model Y"
        description="test"
        backgroundImg="model-y.jpg"
        
        />
        
         <Chai
        
        title="model 3"
        description="test"
        backgroundImg="model-3.jpg"
        
        />
      </HiIamContainer>

   
  )
}
export default Home
const HiIamContainer=styledComponents.div`` 