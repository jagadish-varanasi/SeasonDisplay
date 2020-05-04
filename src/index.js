import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './spinner'
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
  // constructor(props){
  //   super(props);
  //   //direct assignment can be done only once in constructor
  //   this.state={lat:null,errorMessage:''};
    
  // }
  //Need not to have a constructor function the same work can be done with a line of code shown bellow
  //no nned to use this keyword this time....
  //this code is no actucally used by browser..the babel converts this js to some form of js that is understood by all popular browsers
  // u can test this going to babel.io try it out enable stage1,2,3 eeact and paste this two forms of code..u'll get same thing in babel section...
  state={lat:null,errorMessage:''};
  componentDidMount(){
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
  //studied under component life cycle methods
  //componentDid mount can be used for loading something...like data loading...we can use constructor or componentDidMount
  //many people say instead of constructor use componentDidMount...for data loading...so will use it here to get geolocation
  //componentDidUpdate gets called when component gets updated for any reason or state changes..or gets new props from parent
  //good place for data loading that need to be done every single time the component gets updated..use for mutiple data loading request
  //componentwillunmount....used for clean up just before component is taken off
  //there are other three methods like shouldComponentUpdate,getDerivedStateFromProps,getSnapshotBeforeUdate methods in component lifecycle will are very infrequently used..ignore these as of now

  // componentDidMount(){
  //   console.log('My component was renderes on screen');
  // }
  // //right before componentDidupdate render() will be called once again
  // componentDidUpdate(){ 
  //   console.log('My component was updated-it rerendered');
  // }
  render(){
    if(!this.state.lat&&this.state.errorMessage){
      return <div className="border red"><div>Error:{this.state.errorMessage}</div></div>
    }else if(!this.state.errorMessage&&this.state.lat){
      return <div className="border red"><SeasonDisplay lat={this.state.lat}/></div>
      // Here are we taking state and sending it as prop for season display..from now whenever update takes place on state variable seasonDisplay will also be rendered
      //component gets re-rendered when ever setstate takes place
    }else{
      // instead of place spinner Headers...better make it as a separate component that help to reude when ever required
        return  <div className="border red"><Spinner message="Please accept location request"/></div>;
    }
   
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
  
);