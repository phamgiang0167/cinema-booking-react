import React, { Component } from 'react';
import './Loader.scss'
export default class Loader extends Component {
  render() {
    return (
      <div className="loader__container" style={{width: "100%", height: "100vh"}}>
        <div className="loader">

        </div>
      </div>
    );
  }
}
