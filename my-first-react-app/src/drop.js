import React from 'react';

class Drop  extends React.Component{
    render(){
        return(<div>
            Magic Square of 3x3
            <div className="navbar">
               
                <div className="dropdown">
                    <button className="dropbtn">Menu
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </div> 
                </div>
                </div>
        )
    }
}

export default Drop;