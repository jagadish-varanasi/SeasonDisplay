import React from 'react'

const sesonConfig={
    summer:{
        text:'Lets hit the beach!',
        iconName:'sun'
    },
    winter:{
        text:'Burr it is cold!',
        iconName:'snowflak'
    }
}

const getSeason=(lat,month)=>{
    if(month>2&&month<9){
        return lat>0?'summer':'winter';
    }else{
        return lat>0?'winter':'summer';
    }
}

const SeasonDisplay=(props)=>{
    //console.log(props.lat);
    

    const season=getSeason(props.lat,new Date().getMonth())
    // const text=season==='winter'?'Burr,it is chilly!':'Lets hit the beach';
    // //console.log(season);
    // // go to semantic ui--->icons-->ctrl+f search for snowflak and sun..see the source code and implement it
    // const icon=season==='winter'?'snowflak':'sun';
    const {text,iconName}=sesonConfig[season]//retuns an object {text,iconName}
return(
    <div>
        <i className={`${iconName} icon`}/>
         <h1>{text}</h1>
        <i className={`${iconName} icon`}/>
    </div>
)
}


export default SeasonDisplay;