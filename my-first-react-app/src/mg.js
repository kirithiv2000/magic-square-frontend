import React from 'react';

function Mg(props){
    var list=[]
    // for (var i=0;i )
    return(
    <div className='Hello-div'>
        <table>
            <tbody>
            {
        props.data.map(
          (e,index)=><tr>{e.map(
            (i,ind)=><td >{i}</td>
          )}
        </tr>)
      }</tbody></table>
       </div>
      )
}
export default Mg;