import React, { Component } from 'react';
import loading from './loading.gif';

class Galleryitem extends Component {

  constructor(props) {
    super(props);

    this.imageItems = [];

    [this.props.data][0].map((image) => {
      return (
        this.imageItems.push(
          {
            id: image.id,
            src: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`, 
            farm: image.farm
          }
        )
      )
    });

    this.state = {
      images: this.imageItems.map(image => ({
        ...image,
        src: loading
      }))
    }
  }

  componentDidMount() {
    this.state.images.forEach((image, index) => {
      const {src} = this.imageItems[index] // get image primary src
      const primaryImage = new Image() // create an image object programmatically
      primaryImage.onload = () => { // use arrow function here
        console.log(`image #${index + 1} is loaded!`)
        const images = [...this.state.images] // copy images array from state
        images[index].src = src // adjust loaded image src
        this.setState({
          images
        })
      }
      primaryImage.src = src // do it after you set onload handler
    })
  }

  render(){

    const listPhotos = this.state.images.map(image => (
      image.farm !== 0 ? (
        <li key={image.id}>
          <img src={image.src} alt={this.props.subject} />
        </li>
        ) : '' 
    ));

    if(this.props.total === 0 && this.props.subject !== "cat" && this.props.subject !== "dog" && this.props.subject !== "laptop"){
      this.imageItems.push(
        // Not Found
        <li key="Not Found" className="not-found">
          <h3>No Results Found</h3>
          <p>Your search did not return any results. Please try again.</p>
        </li>
      )
      const listPhotos = this.imageItems;
      return listPhotos;
    };
  
    return listPhotos;
  }
}

export default Galleryitem;