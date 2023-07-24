import React from 'react';
import './Advantage.css';
import Medal from './Medal.png';
import Market from './Market.png';
import Calandar from './Calendar.png';
import Man from './Man.png';

export default class Advantage extends React.Component {
  render() {
    return (
      <div className="Advantage">
        <ul className="Advantage__list">
          <li className="Advantage__item"><img className="Advantage__icon" src={Market} alt="Рынок" />Более 10&nbsp;лет на&nbsp;рынке строительных услуг.</li>
          <li className="Advantage__item"><img className="Advantage__icon" src={Man} alt="Человек" />Высококвали&shy;фицированные работники с&nbsp;большим стажем.</li>
          <li className="Advantage__item"><img className="Advantage__icon" src={Calandar} alt="Календарь" />Строгое соблюдение заявленных сроков.</li>
          <li className="Advantage__item"><img className="Advantage__icon" src={Medal} alt="Медаль" />Гарантия 5&nbsp;лет на&nbsp;все виды работ.</li>
        </ul>
      </div>
    );
  }
}
