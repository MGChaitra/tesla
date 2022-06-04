import React from 'react'
import styledComponents from 'styled-components'


 function Chaii({backgroundImg,title,description}) {
  return (
    

    <Wrap bgImage={backgroundImg}>
        <TeslaTitle>
            <h1>
                {title}
            </h1>
            <p>
                {description}
            </p>
        </TeslaTitle>
    </Wrap>

  )
}

export default Chaii
const Wrap=styledComponents.div`
width:49.4%;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
float:left;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:

${props => `url("/images/${props.bgImage}")`}};
`
const TeslaTitle=styledComponents.div`
padding-top:15vh;
text-allign:center;
`
