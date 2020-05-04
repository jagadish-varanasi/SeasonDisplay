import React from 'react'
//u ncan give default property aswell that is by {props.message||'Loading!!'} or u can create separate method
const spinner=(props)=>{
 return(
        <div className='ui active dimmer'>
            <div className='ui big text loader'>{props.message}</div>
        </div>
 )
}

spinner.defaultProps={
    message:'Loading....'
};

export default spinner;