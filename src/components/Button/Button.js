import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';

import './Button.css';

const cn = block('Button');

export default class Button extends React.Component {
  render() {
    const {
      view,
      color,
      size,
      textTransform,
      width,
      children,
      ...props
    } = this.props;

    const className = cn({
      view,
      color,
      size,
      width,
      'text-transform': textTransform,
    }, this.props.className);

    const Type = this.href ? 'a' : 'button';

    return (
      <Type
        {...props}
        className={className}
      >
        {children}
      </Type>
    );
  }
}

Button.propTypes = {
  /**
   * Вид кнопки
   */
  view: PropTypes.oneOf(['default', 'ghost']),

  /**
   * Цвет кнопки
   */
  color: PropTypes.oneOf(['red', 'green', 'orange', 'blue']),

  /**
   * Размер кнопки
   */
  size: PropTypes.oneOf(['small', 'medium', 'big']),

  /**
   * Ширина кнопки
   */
  width: PropTypes.oneOf(['full', '']),

  /**
   * Вид текста
   */
  textTransform: PropTypes.oneOf(['uppercase', '']),

  /**
   * Ссылка
   */
  href: PropTypes.string,

  /**
   * Текст кнопки
   */
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  view: 'default',
  color: 'red',
  size: 'medium',
  width: '',
  textTransform: '',
  href: '',
};
