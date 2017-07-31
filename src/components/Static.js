import React from 'react';

export default class Static extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staticContent: ''
    };
  }

  contentFilePath () {
    var path = this.props.pathname;
    var basename = path.slice(1, path.length) || 'index';
    return `/gatsby/public/${basename}.html`;
  }

  componentWillRecieveProps() {
    const staticContent = require(`${this.contentFilePath()}`);
    this.setState({
      staticContent
    });
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.staticContent}} />
    );
  }
}
