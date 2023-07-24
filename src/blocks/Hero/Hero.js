import React from 'react';
import './Hero.css';
import Button from '../../components/Button/Button';

export default class Hero extends React.Component {
  render() {
    return (
      <div id="Hero" className="Hero">
        <h1 className="Hero__title">
          Качественный ремонт
          <br />
          квартир и офисов
        </h1>
        <p className="Hero__description">в Воронеже и Воронежской области</p>
        <Button
          size="big"
          className="Hero__button"
        >
          Подробнее
        </Button>
      </div>
    );
  }
}
