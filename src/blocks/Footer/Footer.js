import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__copyright">
          <div className="Footer__name">Tatarintcev &copy; 2019</div>
          <div className="Footer__addres">Адрес: Бульвар победы 22, Воронеж, Россия.<br /> Телефон:89009994433</div>
        </div>
      </div>
    );
  }
}
