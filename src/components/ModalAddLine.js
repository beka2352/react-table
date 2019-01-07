import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';

class ModalAddLine extends React.Component {

   state = {}

   static propTypes = {
     title: PropTypes.string.isRequired,
     fields: PropTypes.array.isRequired,
     onCloseModal: PropTypes.func.isRequired,
     confirmAction: PropTypes.func.isRequired
   }

   componentDidMount() {
     for(let field of this.props.fields) {
       this.state[field.name] = ''
     }
   }

  onChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {

    const { fields } = this.props
    return (
      <div className="modal">
        <div className="modal__backdrop" onClick={() => this.props.onCloseModal()}></div>
        <div className="modal__window">
          <div className="modal__top">
            <div className="modal__title">
              { this.props.title }
            </div>
            <img src="/img/close.svg" className="modal__close" onClick={() => this.props.onCloseModal()} />
          </div>
          <div className="modal__middle">
            <div className="form form_modal">
              { fields.map((field, index) => (
                  <TextField
                    placeholder={field.name}
                    name={field.name}
                    defaultValue=""
                    onChange={this.onChange}
                    label={field.name}
                    key={index}
                  />
                ))
              }
            </div>
          </div>
          <div className="modal__bottom">
            <button
                type="button"
                className="button button_cancel"
                name="button"
                onClick={() => this.props.onCloseModal()}>
              Отменить
            </button>
            <button
              type="button"
              className="button button_confirm button_modal"
              name="button"
              onClick={() => this.props.confirmAction(this.state)}>
              Добавить Запись
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalAddLine
