import React from 'react';

class Drop  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:this.props.props,
        }
    }
    render(){
    return (<div className="top">{this.state.list.map((e)=><div className="card" key={e} > <div
    onClick={e=>this.props.func(e)}
     className="container"><div className={e}>{e}</div></div></div>)}
     </div>)
    }
}

export default Drop;