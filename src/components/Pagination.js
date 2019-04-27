import React from 'react';
import { Link } from 'react-router-dom';

class Pagination extends React.Component{
  render(){
    return(
      <div class="pad">
      <div className="container pad mg">
        <center className='pagination'>
        <p>{this.state.loading}</p>
        if(true){
        <a onClick={this.loadNextPage} className="button">Next</a> 
        }
        <a onClick={this.loadNextPage} className="button">Next</a> 
        </center>
      </div>
    </div>
    );
  }
}
export default Pagination;
