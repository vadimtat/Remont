import './Title.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const colorClass = `Title_color_${this.props.color}`;
    const className = `Title ${colorClass} ${this.props.className}`;

    return (
      <h2 className={className}>{this.props.children}</h2>
    );
  }
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['white', 'black']),
};

Title.defaultProps = {
  color: 'white',
};
