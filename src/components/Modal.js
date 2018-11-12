import React from 'react';

class Modal extends React.Component {

    showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
  
    render() {
        if(!this.props.show) {
            return null;
          }
        return (
            <div className={this.showHideClassname}>
              <section className="modal-main">
                {this.props.children}
                <button className="cancelbtn" onClick={this.props.handleClose}>close</button>
              </section>
            </div>
          );
    }
    
  };

  export default Modal;