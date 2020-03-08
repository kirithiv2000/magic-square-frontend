import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Drop from './drop';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:[[0,0,0],[0,0,0],[0,0,0]],
      list:[3,5,7,9]

    }
  }

  componentDidMount(){
    axios.get("http://localhost:8000/7").then(e=>{this.setState({data:e.data})}).catch(err=>alert(err))
  }
render(){ 
  return (
    <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <Drop/>
        </div>
       <div>
        <div className="container">
        {
          this.state.data.map(
            (item)=>
            <div className="row">{
              item.map(
            (i)=>{
                  return <div className="card" >
                    <div className="container">
                      {i}</div></div>;
                }
            )}</div>)
        }
    </div>
    </div>
    </div>
  );
}
}

export default App;
