import React,{useState} from 'react';
import '../styles/VehicleTabStyles.css';
import Dacia from '../assets/Dacia/dacia1.jpeg';
import Clio from '../assets/Clio/clio.jpeg';
import Gtd from '../assets/Gtd/golf8.jpeg';
import Cls from '../assets/Cls/mcls.jpeg';
import Bmw from '../assets/Bmw/bmw.avif';
import Cla from '../assets/Cla/Cla.jpeg';
import { useNavigate } from 'react-router-dom';


  const VehicleTab = () => {
    const navigate = useNavigate();

    const [toggleState,setToggleState] = useState(5);
    const toggleTab = (index) => {
      setToggleState(index);
    }



    const  btnRays = [
      {
        id:1,
        ClassName:toggleState === 1? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(1),
        BtnText:'Mercedes CLS AMG',
      },

      {
        id:2,
        ClassName:toggleState === 2? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(2),
        BtnText:'BMW M4',
      },

      {
        id:3,
        ClassName:toggleState === 3? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(3),
        BtnText:'Mercedes-Benz CLA',
      },
      {
        id:4,
        ClassName:toggleState === 4? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(4),
        BtnText:'Golf 8 GTD L3MARA',
      },
      {
        id:5,
        ClassName:toggleState === 5? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(5),
        BtnText:'Clio 5 Alpine',
      },
      {
        id:6,
        ClassName:toggleState === 6? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(6),
        BtnText:'Dacia LOGAN',
      },
    ];

    const VehicleRays = [

      {
        id:1,
        ClassName:toggleState === 1? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:Cls,
        TopPrice:'4000Dh',
        Model:'Mercedes ',
        Mark:'CLS Amg',
        Year:'2019',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Automatique',
        Fuel:'Essence V6',


      },

      {
        id:2,
        ClassName:toggleState === 2? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:Bmw,
        TopPrice:'3500dh',
        Model:'M4  ',
        Mark:'BMW',
        Year:'2022',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Automatique',
        Fuel:'Diesel',


      },


      {
        id:3,
        ClassName:toggleState === 3? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:Cla,
        TopPrice:'2000DH',
        Model:'Benz CLA',
        Mark:'Cla',
        Year:'2024',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Automatique',
        Fuel:'Diesel',


      },

      {
        id:4,
        ClassName:toggleState === 4? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:Gtd,
        TopPrice:'800DH',
        Model:'GTD' ,
        Mark:'VW',
        Year:'2024',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Manual',
        Fuel:'Diesel',


      },


      {
        id:5,
        ClassName:toggleState === 5? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:Clio,
        TopPrice:'300DH',
        Model:' Alpine',
        Mark:'REAUNALT',
        Year:'2024',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Manual',
        Fuel:'Diesel',


      },

      

      {
        id:6,
        ClassName:toggleState === 6? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:Dacia,
        TopPrice:'250DH',
        Model:'LOGAN',
        Mark:'DACIA',
        Year:'2019',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Automatic',
        Fuel:'Diesel',


      },

    ];

    const handleReserveNow = (carId) => {
      navigate(`/reservation/${carId}`);
    };

    return (
     <div className='tab-section max-w-[1920px]'>
        <h4>Vehicle Models</h4>
        <h1>Our rental fleet</h1>
        <p>Choose from a variety of our amazing vehicles
       to rent for your next adventure or business trip.
       </p>

       <div className='tab-flex'>
       <div className='tab-btns'>

        {btnRays.map((btnRay) => 
        

         <button className={btnRay.ClassName} onClick={btnRay.OnClick}>{btnRay.BtnText}</button>


        ) }

</div>
        
        


         <div className='tab-contents'>

          {VehicleRays.map((VehicleRay) =>

            <div className={VehicleRay.ClassName}>

                <div className='tabcontent-flex'>
                  <div className='car-image'>
                    <img src={VehicleRay.TabImage}/>
                    </div>
                       <div className='car-details'>
                         <table>
                          <thead> <td><span className='tabprice'>{VehicleRay.TopPrice}</span> / <span>rent per day</span></td> </thead>
                      
                               <tr> <td><span>Model</span> <span className='slash'>|</span> <span>{VehicleRay.Model}</span></td> </tr>
                               <tr> <td><span>Mark</span> <span className='slash'>|</span> <span>{VehicleRay.Mark}</span></td></tr>
                              <tr> <td><span>Year</span> <span className='slash'>|</span> <span>{VehicleRay.Year}</span></td> </tr>
                              <tr> <td><span>Doors</span> <span className='slash'>|</span> <span>{VehicleRay.Doors}</span></td></tr>
                               <tr> <td><span>AC</span> <span className='slash'>|</span> <span>{VehicleRay.AC}</span></td></tr>
                               <tr> <td><span>Transmission</span> <span className='slash'>|</span> <span>{VehicleRay.Transmission}</span></td> </tr>
                             <tr> <td><span>Fuel</span> <span className='slash'>|</span> <span>{VehicleRay.Fuel}</span></td></tr>

                  </table>

                  <button 
                    className='rn-btn' 
                    onClick={() => handleReserveNow(VehicleRay.id)}
                  >
                    RESERVE NOW
                  </button>
                  </div>

                  </div>

          </div>
          )};

    

            </div>
          </div>


         </div>

        
  )
 }




export default VehicleTab