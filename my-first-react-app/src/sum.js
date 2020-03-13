import React from 'react';

const Sum=(props)=>{
    
    return (<div className="top-o">
        {props.props.map((e)=>
        <div className="card" key={e} > 
        <div className="container"><div 
        onClick={
            (e)=>props.func(e
                )}
       className={e}>{e}</div></div>
     </div>)}
     </div>)
    }


export default Sum;