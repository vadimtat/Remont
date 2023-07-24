import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './Price.css';

export default class Price extends React.Component {
  render() {
    const colorClass = `Price_color_${this.props.color}`;
    const className = `Price ${colorClass}`;
    return (
      <div className={className}>
        <p className="Price__title">{this.props.title}</p>
        <p className="Price__cost">От <span className="Price__number">{this.props.cost}</span> руб/м2</p>
        <p className="Price__description">{this.props.description}</p>
        <Button
          view="ghost"
          width="full"
          textTransform="uppercase"
          color={this.props.color}
          className="Price__button"
        >
          Подробнее
        </Button>
        <Button
          width="full"
          textTransform="uppercase"
          color={this.props.color}
          className="Price__button"
        >
          Оставить заявку
        </Button>
      </div>
    );
  }
}

Price.propTypes = {
  /**
   * Цвет блока
   */
  color: PropTypes.oneOf(['green', 'orange', 'blue']).isRequired,
  title: PropTypes.node.isRequired,
  cost: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};
