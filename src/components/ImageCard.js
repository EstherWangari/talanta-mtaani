import React from "react";

class ImageCard extends React.Component {

  render(){
    return(
     <div>
      <img src={this.props.image} alt="unsplash image" />
     </div>
    );
  }

}
export default ImageCard;
