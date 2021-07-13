import React from 'react';

const Toggle = ({children}) =>{
    return(
       <Row>
           <i class="fas fa-chevron-circle-right"></i>
           <i class="fas fa-chevron-circle-down"></i>
           {children}
       </Row>
    )
}

export default Toggle;