import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Drop from './drop';
import Mg from "./mg";
import Sum from "./sum";
class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:[[0,0,0],[0,0,0],[0,0,0]],
      list:[3,5,7,9,11,21,101 ],
      listsum:[3,6,9,12,15],
      present:3,
      sum:15
    }
  }
  myaxiosfuncSum=e=>{
    this.setState({
      sum:e.target.className
    })
    axios.get("https://backendapi-mgsquare-kirithiv.glitch.me/"+this.state.present+"/"+e.target.className).then(e=>{this.setState({data:e.data})}).catch(err=>alert(err))
  }
  myaxiosfunc=e=>{
    var l=[]
    for (var y=1;y<=6;y++){
      l.push(e.target.className*y)
    }


    this.setState({present:e.target.className})
    axios.get("https://backendapi-mgsquare-kirithiv.glitch.me/"+e.target.className).then(e=>{this.setState({data:e.data});
    this.setState({sum:e.data[Math.floor(e.data.length/2)][Math.floor(e.data.length/2)]*e.data.length})
  
  }).catch(err=>alert(err))

    this.setState({
      listsum:l
    })
    
  }
  componentDidMount(){
    axios.get("https://backendapi-mgsquare-kirithiv.glitch.me/3").then(e=>{this.setState({data:e.data})}).catch(err=>alert(err))
  }

render(){ 
  let nm;let n=this.state.present;
  nm=<Mg data={this.state.data}/>
  return (
    <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
  <h2>Welcome to Magic Square {n}X{n} of Sum {this.state.sum}</h2>
        </div>

        <div className="both">
        <Drop props={this.state.list} func={(e)=>this.myaxiosfunc(e)}/>
        <div className="only-nm">
        {nm}

        </div>
        <Sum props={this.state.listsum} func={(e)=>this.myaxiosfuncSum(e)}/>

        </div>
    </div>
  );
}
}


export default App;
