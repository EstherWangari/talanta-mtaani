import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import ImageCards from './ImageCards';
import Pagination from './Pagination';
import './App.css'

const clientId = 'a2356c85ce9291dd44b732ab883c4b18b36537923e6587a95a8e73bb7c9b1c46';

class Landing extends React.Component {
  state = {
    images: [],
    currentPage: 1,
    loading:''
  }

  constructor(props) {
    super(props);
    this.loadNextPage = this.loadNextPage.bind(this);
  }


  componentDidMount() {
    this.loadImages();
    // console.log(response.data.results);
  }

  async loadImages(){
    await axios.get('https://api.unsplash.com/photos?page='+this.state.currentPage, {
      headers: {
        Authorization: `Client-ID ${clientId}`
      },
    }).then(res => {
      //console.log(res.data)
      this.setState({ images: res.data, loading:'' })
    }).catch(err => console.log(err.response));
  }

  loadNextPage(){
    this.setState({ 
      currentPage: this.state.currentPage+1,
      loading: 'Loading Page '+ (this.state.currentPage+1)+' ... '
    });
    this.loadImages();
  }


  render() {
    this.thumbnails = this.state.images.map((item, key) =>
      <div className="img" key={item.id}>
        <a href={item.links.download} target="_blank">
          <img key={item.id} src={item.urls.thumb} />
        </a>
      </div>
    );


    return (
      <div>
        <div className="wrap">
          <div className='nav'>
            <div className="container">
              <img src={require("../img/logo.png")} />
            </div>
          </div>
          <div className='background'>
            <div className="container">
              <div><img src={require("../img/fm.jpg")} /></div>
              <div className="center-cont"><h2>TALANTA MTAANI</h2></div>
            </div>
          </div>
          <div class="pad">
            <div className="container"><h2>Page: {this.state.currentPage}</h2></div>
            <div className="container gallery">{this.thumbnails}</div>
          </div>
          <div class="pad">
            <div className="container pad mg">
              <center className='pagination'>
              <p>{this.state.loading}</p>
              <a onClick={this.loadNextPage} className="button">Next</a> 
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;

