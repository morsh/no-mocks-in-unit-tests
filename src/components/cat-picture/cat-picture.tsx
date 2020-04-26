import React from 'react';
import { CatService } from "../../services/cats";

interface State {
  catImageUrl: string; 
}
  
export class CatPicture extends React.PureComponent<{}, State> {
  componentDidMount() {
    const catService = new CatService();
    catService.getRandomImageUrl()
      .then(catImageUrl => this.setState({ catImageUrl }))
  }

  render() {
    if (!this.state?.catImageUrl) {
        return null;
      }
  
    return (
      <img  src={this.state.catImageUrl} alt='Cat' />
    )
  }
}