import React from 'react';

export default class Test extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }
}
