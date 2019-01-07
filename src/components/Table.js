import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import MainRow from './MainRow';
import ModalAddLine from './ModalAddLine';
import ModalAddColumn from './ModalAddColumn';
import ModalChangeOrder from './ModalChangeOrder';

class Table extends React.Component {
  state = {
    data: [
      {
        name: "Bekarys",
        phone: "87089660250",
        email: "bekars97@gmail.com"
      }
    ],
    mainRow: [{
        name: "name",
        order: 1
      },
      {
        name: "phone",
        order: 2
      },
      {
        name: "email",
        order: 3
      }
    ],
    showRowModal: false,
    showColumnModal: false,
    showOrderModal: false,
    order: -1
  }

  addLine = (newLine) =>{
    const {data} = this.state;
    data.push(newLine);
    this.setState(() => ({
      data,
      showRowModal: false
    }));
  }

  addColumn = (newColumn) => {
    const {mainRow} = this.state;
    mainRow.push({
      name: newColumn,
      order: mainRow.length + 1
    })
    this.setState(() => ({
      mainRow,
      showColumnModal: false
    }));
  }

  changeOrder = (data) => {
    if(data.order >= 1 && data.order <= this.state.mainRow.length) {
      let mainRow = [...this.state.mainRow];
      let temp = mainRow[data.prevOrder-1].order;
      mainRow[data.prevOrder-1].order =  mainRow[data.order-1].order;
      mainRow[data.order-1].order = temp;

      mainRow.sort(function(a, b) {
        return a.order- b.order;
      })

      this.setState({
        mainRow,
        showOrderModal: false
      })


    } else {
      alert('Данные заполнены некорректно')
    }

  }

  handleAddRow = () => {
    let bool = false
    if(!this.state.showRowModal) {
      bool = true
    }
    this.setState({
      showRowModal: bool
    })
  }

  handleAddColumn = () => {
    let bool = false
    if(!this.state.showColumnModal) {
      bool = true
    }
    this.setState({
      showColumnModal: bool
    })
  }

  handleChangeOrder = (index) => {
    let bool = false
    if(!this.state.showOrderModal) {
      bool = true
    }
    this.setState({
      showOrderModal: bool,
      order: index+1
    })
  }

  render() {
    const { data, mainRow, showRowModal, showColumnModal, showOrderModal, order } = this.state;
    return(
      <div className='wrapper'>
        <div className='buttons'>
          <button
            type="button"
            className="button button_confirm button_toggle"
            name="button"
            onClick={() => this.handleAddRow()}>
            Добавить запись
          </button>
          <button
            type="button"
            className="button button_confirm button_toggle"
            name="button"
            onClick={() => this.handleAddColumn()}>
            Добавить колонну
          </button>
        </div>
        <div className='table'>
          <MainRow
            items={mainRow}
            toggleChangeOrder={this.handleChangeOrder}
           />
          {data.map((item, index) => (
            <Row
            items={item}
            order={mainRow}
            key={index}/>
          ))}
        </div>
        {
          showRowModal &&
          <ModalAddLine
            title="Добавить запись"
            fields={mainRow}
            onCloseModal={this.handleAddRow}
            confirmAction={this.addLine}
          />
        }
        {
          showColumnModal &&
          <ModalAddColumn
            title="Добавить Колонну"
            onCloseModal={this.handleAddColumn}
            confirmAction={this.addColumn}
          />
        }
        {
          showOrderModal &&
          <ModalChangeOrder
            title="Изменить порядок"
            onCloseModal={this.handleChangeOrder}
            confirmAction={this.changeOrder}
            order={order}
          />
        }
      </div>
    )
  }
}

export default Table;
