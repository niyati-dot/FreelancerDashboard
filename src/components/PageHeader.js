import React from 'react';

const PageHeader =(props) =>{
    return(
        <>
            <h2>{props.title}</h2>
            <strong>{props.subtitle}</strong>
            <hr/>
        </>
    )
}

export default PageHeader;