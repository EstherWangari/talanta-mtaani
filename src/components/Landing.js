import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import ImageCards from './ImageCards';
import Pagination from './Pagination';
import './App.css'

const clientId = 'a2356c85ce9291dd44b732ab883c4b18b36537923e6587a95a8e73bb7c9b1c46';

class Landing extends React.Component {
  state = {
    images: []
  }

  async componentDidMount() {
    console.log('did ount');
    await axios.get('https://api.unsplash.com/photos', {
      headers: {
        Authorization: `Client-ID ${clientId}`
      },
    }).then(res => {
      console.log(res.data)
      this.setState({ images: res.data })
    }).catch(err => console.log(err.response));
    // console.log(response.data.results);
  }

  render() {
    this.thumbnails = this.state.images.map((item, key) =>
      <div className="img">
        <a href={item.links.download} target="_blank">
          <img key={item.id} src={item.urls.thumb} />
        </a>
      </div>
    );

    return (
      <div>
        <div class="wrap">
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
            <div className="container gallery">{this.thumbnails}</div>
          </div>
          <div class="pad">
            <div className="container">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    );
    return "nay"
  }
}
export default Landing;
