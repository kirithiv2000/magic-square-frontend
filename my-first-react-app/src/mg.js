import React from 'react';

function Mg(props){
    return(
    <div className='Hello-div' style={{"padding": 20}}>
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