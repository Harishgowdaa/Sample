import React, { Component } from 'react'

export default class App2 extends Component {
  render() {
    return (
      <h1>{this.props.data} {this.props.name}</h1>
    )
  }
}
