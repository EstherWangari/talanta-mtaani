import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './Landing';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/page-two" component={PageTwo} />
            <Route exact path="/page-three" component={PageThree} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
