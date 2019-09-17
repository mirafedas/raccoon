import React from 'react';
import './style.css';
import enot1 from '/Users/mvasylykiv/Documents/React/high-five/src/img/images.jpeg';
import enot2 from '/Users/mvasylykiv/Documents/React/high-five/src/img/high.jpg';

class RaccoonImg extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      url: enot1,
    }
  }

  const mapStateToProps = state => {
    return {
      imgURL: this.state.url
    }
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      <img src={this.state.url} className="main-img" alt="Raccoon image 1" />
    )
  }
}

export default RaccoonImg;