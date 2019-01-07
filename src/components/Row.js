import React from 'react';
import PropTypes from 'prop-types';

class Row extends React.Component {

  static propTypes = {
    items: PropTypes.object.isRequired,
    order: PropTypes.array.isRequired
  }

  render(){
    const {items, order} = this.props;
    let cells = [];
    let index = 0;
    console.log(order);
    for(let property in items) {
        cells.push(<div className='cell' key={index}>{items[order[index].name]}</div>);
        index++;
    }
    return(
      <div className='row'>
        {cells}
      </div>
    )
  }
}

export default Row;
