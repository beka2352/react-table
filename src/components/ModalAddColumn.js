import React from 'react';
import PropTypes from 'prop-types'
;import TextField from './TextField';

class ModalAddColumn extends React.Component {
  state = {
    title: ''
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired
  }

 onChange = (e) => {
   const {name, value} = e.target
   this.setState({
     [name]: value
   })
 }

 render() {

   const { title } = this.state;

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
             <TextField
                placeholder="Название..."
                name="title"
                value={title}
                onChange={this.onChange}
                label="Название"
              />
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
             onClick={() => this.props.confirmAction(title)}>
             Добавить Колонну
           </button>
         </div>
       </div>
     </div>
   )
 }
}

export default ModalAddColumn;
