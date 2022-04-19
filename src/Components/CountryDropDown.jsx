import React, { Component } from "react";

import { CountryDropdown } from "react-country-region-selector";

class CountryDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
    this.props.onChange(val);
  }

  render() {
    const { country } = this.state;
    return (
      <div>
        <CountryDropdown
          value={this.props.value}
          onChange={(val) => this.selectCountry(val)}
          classes="form-control checkout"
          name="country"
        />
      </div>
    );
  }
}

export default CountryDropDown;
