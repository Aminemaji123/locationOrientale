import React, { useState, useEffect } from 'react';
import '../styles/ModelsCompStyles.css';
import {FaStar,FaCarSide} from 'react-icons/fa'

const ModelsComp = () => {
  const [carModels, setCarModels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then(res => res.json())
      .then(data => setCarModels(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='models-sec'>
        <div className='models-con'>

            {carModels.map((carModel) => 

<div className='model-box'>
<img src={carModel.modelImg}/>
<div className='model-btm'>
    <div className='mdl-left'>
        <h3>{carModel.modelName}</h3>
        <span className='stars'>
            <FaStar style={{color:"red"}}/>
            <FaStar style={{color:"orange"}}/>
            <FaStar style={{color:"orange"}}/>
            <FaStar style={{color:"orange"}}/>
            <FaStar style={{color:"orange"}}/>

        </span>

        <span className='type'>
            <FaCarSide size={23}/>
            <p>{carModel.modelComp}</p>

        </span>

        <span className='transM'>
            <FaCarSide size={23}/>
            <p>{carModel.modelTrans}</p>

        </span>

    </div>

    <div className='mdl-right'>

    <h3>{carModel.modelP}</h3>
        <p className='perDay'>{carModel.modelD}</p>
        <span className='type'>
           
            <p>{carModel.modelDoor}</p>
            <FaCarSide size={23}/>

        </span>

        <span className='transM'>
           
            <p>{carModel.modelFuel}</p>
            <FaCarSide size={23}/>

        </span>

    </div>

</div>


<button className='mbr-btn'>Book Ride</button>

</div>
            
            )};

           


        </div>

    </div>
  )
}

export default ModelsComp