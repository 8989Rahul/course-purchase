
import './App.css';

import React, { Component } from 'react'
import CourseSales from './components/CourseSales';

 class App extends Component {
   state={
     courses:[
       {name:'php developer', price : 299},
       {name:'java developer', price : 399},
       {name:'react developer', price : 499},
       {name:'angular developer', price : 599}
     ]
   }
  render() {
    return (
      <div className="App">
        <CourseSales items={this.state.courses}/>
      </div>
    )
  }
}


export default App;
