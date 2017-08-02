import React from 'react';
import $ from 'jquery';

class Static extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      staticContent: ''
    };

    this.setLinkWatchers = this.setLinkWatchers.bind(this);
    this.contentFilePath = this.contentFilePath.bind(this);
  }

  componentWillMount() {
    const basename = this.contentFilePath(this.props.history.location.pathname);
    const staticContent = require(`../gatsby/public/${basename}.html`);
    this.setState({
      staticContent
    });
  }

  componentDidMount () {
    this.setLinkWatchers();
  }

  componentWillReceiveProps (newProps) {
    const basename = this.contentFilePath(newProps.history.location.pathname);
    const staticContent = require(`../gatsby/public/${basename}.html`);
    this.setState({
      staticContent
    });
  }

  componentDidUpdate () {
    this.setLinkWatchers()
  }

  setLinkWatchers () {
    $('a').click((e) => {
      e.preventDefault();

      const elem = $(e.currentTarget);
      const fullLinkAddress = $(e.currentTarget).attr('href');

      if (elem.hasClass('react-link')) {
        this.props.history.push(`${fullLinkAddress}`);
      } else if (fullLinkAddress.startsWith('#')) {
        this.props.history.push({
          hash: fullLinkAddress
        });
      } else if (fullLinkAddress.indexOf('http') > -1) {
        window.location.assign(fullLinkAddress);
      } else {
        this.props.history.push(`/help${fullLinkAddress}`);
      }
    });
  }

  contentFilePath (pathname) {
    let basename = 'index';
    const pathnameEnd = pathname.indexOf('#') || pathname.length - 1;
    if (pathname.slice(6, pathnameEnd)) {
      basename = `${pathname.slice(6, pathname.length)}/index`;
    }
    return basename;
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: this.state.staticContent}} />
      </div>
    );
  }
}

export default Static;
