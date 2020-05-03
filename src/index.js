import React from 'react'
import ReactDOM from 'react-dom'

// const App=()=>{
//     // API to get users location
//     //if user allows the persion when popup is displayed....position will be displayed orelse err will be displayed....position object contains lan and longitu
//     //as it is a functional component we need to wait until geolocation is rendered..then immediately App returns jsx and converted to html gets rendered on browser
//     //by the time geolocation finds location...we can App component on screen but with func compo we don't have that feature...so going to class compo

//     window.navigator.geolocation.getCurrentPosition(
//       (position)=>console.log(position),
//       (err)=>console.log(err)
//     );

//    return(

//    <div>Hai</div>

//    )

// }


//browing functionality from component base class
//super need to used... explain similiar to java
//render method should not conatain many things..as it is called often
class App extends React.Component{
  constructor(props){
    super(props);
    //direct assignment can be done only once in constructor
    this.state={lat:null,errorMessage:''};
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        //we did setstate
        this.setState({lat:position.coords.latitude})
        // console log position you will get object postion and u can see how to get latitude from there
        //we did not do like....this.setstate.lat=position.coords.latitude always doo setstate
      },      
      (err)=>{
        this.setState({errorMessage:err.message})
      }
    );
  }
  render(){
    if(!this.state.lat&&this.state.errorMessage){
      return <div>Error:{this.state.errorMessage}</div>
    }else if(!this.state.errorMessage&&this.state.lat){
      return <div>Latitude:{this.state.lat}</div>
    }else{
        return  <div>Loading!!!</div>
    }
   
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
  
);