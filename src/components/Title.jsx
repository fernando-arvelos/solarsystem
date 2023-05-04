import { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headlline } = this.props;
    return (
      <h2>{ headlline }</h2>
    );
  }
}

Title.propTypes = {
  headlline: PropTypes.string.isRequired,
};

export default Title;
