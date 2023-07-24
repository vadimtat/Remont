import React from 'react';
import './Customer.css';

export default class Customer extends React.Component {
  render() {
    return (
      <div id="Customer" className="Customer">
        <span className="Customer__line1">Почему уже</span>
        <span className="Customer__line2">Более 1000 клиентов</span>
        <span className="Customer__line3">Выбрали нас</span>
      </div>
    );
  }
}
