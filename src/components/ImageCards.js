import React from 'react';
import ImageCard from './ImageCard';


class ImageCards extends React.Component{

  render(){
    console.log(this.props.images)
    const imageUrls = this.props.images.map(image =>
      <div key={image.id} className='card'>
        <ImageCard image={image.urls.thumb} />
      </div>
    )
    return(
      <div>
        { imageUrls }
      </div>

    );
  }
}
export default ImageCards;
