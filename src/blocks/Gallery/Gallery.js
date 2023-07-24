import React from 'react';
import './Gallery.css';
import Box from './5.jpg';
import One from './1.jpg';
import Two from './2.jpg';
import Title from '../../components/Title/Title';

export default class Gallery extends React.Component {
  render() {
    return (
      <div id="Gallery" className="Gallery">
        <Title color="black" className="Gallery__title">Наши работы</Title>
        <div>
          <ul className="Gallery__list">
            <li className="Gallery__item">
              <a href={One}><span className="Gallery__desc">Ремонт однокомнатной квартиры<br /> г.Воронеж<br />11.12.2018</span><img className="Gallery__image" src={One} alt="1" /></a>
            </li>
            <li className="Gallery__item">
              <a href={Two}><span className="Gallery__desc">Описание</span><img className="Gallery__image" src={Two} alt="1" /></a>
            </li>
            <li className="Gallery__item">
              <a href={Box}><span className="Gallery__desc">Описание проекта</span><img className="Gallery__image" src={Box} alt="1" /></a>
            </li>
            <li className="Gallery__item">
              <a href={Box}><span className="Gallery__desc">Описание проекта</span><img className="Gallery__image" src={Box} alt="1" /></a>
            </li>
            <li className="Gallery__item">
              <a href={Box}><span className="Gallery__desc">Описание проекта</span><img className="Gallery__image" src={Box} alt="1" /></a>
            </li>
            <li className="Gallery__item">
              <a href={Box}><span className="Gallery__desc">Описание проекта</span><img className="Gallery__image" src={Box} alt="1" /></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
