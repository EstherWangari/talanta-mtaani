import React from 'react';
import { Link } from 'react-router-dom';

class Pagination extends React.Component{
  render(){
    return(
      <center className='pagination'>
        <Link to='/'>1</Link>
        <Link to='/page-two'>2</Link>
        <Link to='/page-three'>3</Link>
        <Link><i class="fas fa-arrow-right"></i></Link>
      </center>
    );
  }
}
export default Pagination;
