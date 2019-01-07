import React from 'react';
import PropTypes from 'prop-types';

class MainRow extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    toggleChangeOrder: PropTypes.func.isRequired
  }

  render(){
    const { items, toggleChangeOrder } = this.props;
    return(
      <div className="row row_main">
        {items.map((item, index) => (
          <div
            className="cell cell_main"
            key={index}>
            {item.name}
            <button
              className="button button_change"
              onClick={() => toggleChangeOrder(index)}>
              Изменить порядок
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default MainRow;
