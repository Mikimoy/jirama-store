import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Popup.css';

const Popup = (props) => {
  return (props.trigger) ? (
    <>
        <div className="popup">
            <Container>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </Container>
        </div>
    </>
  ) : "";
}

export default Popup