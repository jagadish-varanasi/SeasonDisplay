import React from 'react'
import ReactDOM from 'react-dom'

const App=()=>{
    // API to get users location
    //if user allows the persion when popup is displayed....position will be displayed orelse err will be displayed....position object contains lan and longitu
    //as it is a functional component we need to wait until geolocation is rendered..then immediately App returns jsx and converted to html gets rendered on browser
    window.navigator.geolocation.getCurrentPosition(
      (position)=>console.log(position),
      (err)=>console.log(err)
    );

   return(

   <div>Hai</div>

   )

}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
  
);