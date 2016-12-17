import React, { Component } from 'react';
export default class Screen extends Component {
  render() {
  	return (
      <div className="screen">
        <div className="bottom">
        	{this.props.value}
        </div>
  	  </div>);
  }
}