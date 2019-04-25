import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import ImageCards from './ImageCards';
import './App.css'

const clientId = 'a2356c85ce9291dd44b732ab883c4b18b36537923e6587a95a8e73bb7c9b1c46';

class Landing extends React.Component{
  state = {
    images: []
  }

  async componentDidMount() {
    console.log('did ount');
    await axios.get('https://api.unsplash.com/photos',{
      headers:{
        Authorization : `Client-ID ${clientId}`
      },
    }).then(res => {
      console.log(res.data)
      this.setState({ images: res.data })
    }).catch(err => console.log(err.response));
    // console.log(response.data.results);
  }

  render(){
    this.thumbnails = this.state.images.map((item, key) =>
      <div className="img">
        <img key={item.id} src={item.urls.thumb} />
      </div>
    );
    // const imageUrls = this.state.images.map(image =>
    //   <div key={image.id}>
    //       <img src={image.urls.small} />
    //       <p className="legend">talanta mtaani</p>
    //   </div>
    // )
    return(
      <div class="wrap">
         <div className='nav'>
             <div className="container">
                <img src={require("../img/logo.png")}/>
             </div>
       </div>
      <div class="redish pad">
        <div className="blueish container gallery">{this.thumbnails}</div>
      </div>
      <div class="redish pad">
        <div className="blueish container">pagination</div>
      </div>
      </div>
      // <div>
      //   <div className='slider'>
      //     <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
      //       {imageUrls}
      //      </Carousel>
      //   </div>
      //   <div>
      //     <ImageCards images={this.state.images} />
      //   </div>
      // </div>
    );
    return "nay"
  }
}
export default Landing;
