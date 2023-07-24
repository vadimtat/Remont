import React from 'react';
import './Form.css';
import Button from '../Button/Button';

export default class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <h2>Остались вопросы ?</h2>
        <p>Оставьте вопрос здесь, и наш оператор свяжется с Вами.</p>
        <form className="Form__form" action="#" name="newform" method="post">
          <input className="Form__input" name="name" type="text" placeholder="Имя" />
          <input className="Form__input" name="number" type="tel" placeholder="Телефон" />
          <textarea className="Form__textarea" name="Text" placeholder="Вопрос" />
          <Button
            size="big"
            width="full"
            className="Form__button"
          >
              Получить ответ
          </Button>
        </form>
      </div>
    );
  }
}
