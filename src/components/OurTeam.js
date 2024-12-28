import React from 'react';
import '../styles/OurTeamStyles.css';
import {team1} from '../assets/index'

const OurTeam = () => {

    const teamwrks = [
        {
            "id":1,
            'teamImg':team1,
            'teamName':'Amine abbaoui Maroune Ziani',
            'teamRole':'Business Owner',

        },
    ];

  return (
    <div className='team-section'>
        <div className='team-con'>

            {teamwrks.map((teamwrk)=>

              <div className='team-box drop-shadow-xl'>
                <div className='team-img'>
                    <img src={teamwrk.teamImg}/>
                </div>

                <h3>{teamwrk.teamName}</h3>
                <p>{teamwrk.teamRole}</p>

            </div>


            )}

          

        </div>
    </div>
  )
}

export default OurTeam