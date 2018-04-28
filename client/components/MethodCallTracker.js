import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MethodCallTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayValue(value) {
    return JSON.stringify(value);
  }

  translateType(type) {
    switch(true) {
      case /^uint/.test(type):
        return 'number';
        break;
      case /^string/.test(type) || /^bytes/.test(type):
        return 'text';
        break;
      case /^bool/.test(type):
        return 'checkbox';
        break;
      default:
        return 'text';
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = _ => {
    if(this.props.constant) {
      this.props.method.cacheCall(...Object.values(this.state));
    }
    else {
      this.props.method.cacheSend(...Object.values(this.state));
    }
  }

  render() {
    const ABIMethod = this.props.ABIMethod;
    const contract = this.props.contract;
    const methodName = ABIMethod.name;
    const method = contract[methodName];

    return <div key={methodName}>
      <span>{methodName}: </span>
      {this.props.constant && <span>{Object.keys(method).map(key => {
        const inputs = Array.prototype.slice.call(method[key].args);
        return <span key={key}>{inputs.join(', ')}: {this.displayValue(method[key].value)}</span>
      })}</span>}
      <span>{ABIMethod.inputs.map((input, index) => {
        const inputType = this.translateType(input.type);
        const inputLabel = input.name;
        //TODO: check if input type is struct and if so loop out struct fields as well
        return <input key={input.name} type={inputType}
          onChange={this.handleInputChange}
          name={input.name}
          placeholder={inputLabel} />;
      })}</span>
      <button onClick={this.handleSubmit}>{this.props.constant? 'Lookup' : 'Submit'}</button>
    </div>;
  }

}

export default MethodCallTracker;
