import React, { Component } from 'react';
import Information from '../components/Information/information';


class InformationFormContainer extends Component {
  state = {
    country: '',
    region: ''
  }

  selectCountry = (val) => {
    this.setState({ country: val });
  }

  selectRegion = (val) => {
    this.setState({ region: val });
  }

  render() {
    return (
      <Information 
      countryValue={this.state.country} 
      regionValue={this.state.region} 
      country={this.selectCountry} 
      region={this.selectRegion}/>
    );
  }
}

export default InformationFormContainer;