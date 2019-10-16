import React, { useState } from 'react';

import DogModal from '../components/DogModal';
import './Dog.css';

const DogCard = (props) => {
    const [show, setShow] = useState(false);

    return (
        <div className="card" onClick={() => setShow(!show)} >
            {show ? <DogModal show={show} onHide={() => setShow(!show)} breed={props.breed} /> : null}
            <img className="card-img-top" src={props.url} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.breed}</h4>
            </div>
        </div>
    );
};

export default DogCard;