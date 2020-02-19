
import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalHungry.scss';


// import Counter from './Counter';

class ModalHungry extends Component {

  state = {
    modalState: false
  }

  toggleModal(){
    this.setState({
      modalState: !this.state.modalState
    })
  }

  render(){
    return (
      <div>
        <div className="container-modal">
          <Button id="modal-button" onClick={this.toggleModal.bind(this)}>Hungry?</Button>
        </div>
        <Modal isOpen={this.state.modalState} toggle={this.toggleModal.bind(this)}>
      
          <ModalHeader id="modal-header">
           <p>Get Started!</p>
          </ModalHeader>
          <ModalBody>
          <div className="list">
            <ol>
              <li>Select ingredients</li>
              <li>Choose a country</li>
              <li>No time? Pick a recipe of the day!</li>
            </ol>
            </div>
          </ModalBody>
          <ModalFooter id="modal-footer" >
            <Button id="close-button"  onClick={this.toggleModal.bind(this)}>X</Button>
          </ModalFooter>
        </Modal>
        
      </div>
    );    
  }

}

export default ModalHungry; 