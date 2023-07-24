import React from 'react';
import './Pricing.css';
import Title from '../../components/Title/Title';
import Price from '../../components/Price/Price';

export default class Pricing extends React.Component {
  render() {
    return (
      <div id="Pricing" className="Pricing">
        <Title className="Pricing__title">Стоймость работ</Title>
        <div className="Pricing__list">
          <div className="Pricing__item"><Price description="Отделка помещения практически не меняя планирования" cost="10 000" title="Косметический" color="orange" /></div>
          <div className="Pricing__item"><Price description="Отделка помещений с элементами перепланирования" cost="18 000" title="Комфортный" color="green" /></div>
          <div className="Pricing__item"><Price description="Полное и частичное видоизменение и усовершенствование помещения" cost="25 000" title="Дизайнерский" color="blue" /></div>
        </div>
      </div>
    );
  }
}
