import React from 'react';
import { DogService } from "../../services/dogs";

interface State {
  dogImageUrl: string; 
}
  
export class DogPicture extends React.PureComponent<{}, State> {
  componentDidMount() {
    const dogService = new DogService();
    dogService.getRandomImageUrl()
      .then(dogImageUrl => this.setState({ dogImageUrl }))
  }

  render() {
    if (!this.state?.dogImageUrl) {
      return null;
    }

    return (
      <img src={this.state.dogImageUrl} alt='Dog' data-testid="dog-image" />
    )
  }
}