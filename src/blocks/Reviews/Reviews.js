import React from 'react';
import './Reviews.css';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';

export default class Reviews extends React.Component {
  render() {
    return (
      <div id="Reviews" className="Reviews">
        <Title>Отзывы наших клиентов</Title>
        <p className="Reviews__text">
          Хочется написать слова благодарности
          за проделанную работу. Мне нужно было
          сделать косметический ремонт на
          балконе и спрятать коммуникационные
          трубы на кухне гипсокартоном. Во многие
          компании обращалась, но сказали что очень
          маленькая работа, сейчас сезон браться не
          хотят. Позвонила в данную компанию и на следующий
          день приехал сотрудник (Андрей), быстро сделал расчёт
          как по стоимости, так и по материалам и приступили к работе.
          Были моменты когда что-то не хватало или требовалось закупить
          , меня никто не беспокоил и покупали самостоятельно,
          мне предоставляли чеки. Отдельная благодарность Андрей,
          что позволил воспользоваться своей очень хорошей скидкой
          при закупке материалов.
        </p>
        <div className="Reviews__name">
           Светлана, 43 года.
        </div>
        <Form />
      </div>
    );
  }
}
