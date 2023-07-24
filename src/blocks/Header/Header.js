import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  handleScrollToBlock(blockId, event) {
    event.preventDefault();

    window.history.pushState({}, '', blockId);

    const block = document.querySelector(blockId);

    block.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  render() {
    return (
      <header className="Header">
        <ul className="Header__list">
          <li className="Header__item">
            <a className="Header__link" href="#Hero" onClick={this.handleScrollToBlock.bind(this, '#Hero')}>Главная</a>
          </li>
          <li className="Header__item">
            <a className="Header__link" href="#Customer" onClick={this.handleScrollToBlock.bind(this, '#Customer')}>Преимущества</a>
          </li>
          <li className="Header__item">
            <a className="Header__link" href="#Pricing" onClick={this.handleScrollToBlock.bind(this, '#Pricing')}>Услуги и цены</a>
          </li>
          <li className="Header__item">
            <a className="Header__link" href="#Gallery" onClick={this.handleScrollToBlock.bind(this, '#Gallery')}>Наши работы</a>
          </li>
          <li className="Header__item">
            <a className="Header__link" href="#Reviews" onClick={this.handleScrollToBlock.bind(this, '#Reviews')}>Отзывы</a>
          </li>
          <li className="Header__item">
            <a className="Header__link" href="#Maps" onClick={this.handleScrollToBlock.bind(this, '#Maps')}>Контакты</a>
          </li>
        </ul>
      </header>
    );
  }
}
