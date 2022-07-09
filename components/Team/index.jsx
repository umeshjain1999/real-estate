import React from 'react'
import Image from 'next/image';
function Team() {
  return (
    <div className='team'>
      <div className="container">
        <div className="team__wrapper">
          <div className="team__wrapper__title divider-lg">Our Team</div>
          <div className="team__wrapper__inner__wrap">
            <div className="team__left">
              <div className="team__member">
                <Image
                  src={teamInfo.member_1.imagePath}
                  alt="Team member"
                  width={250}
                  height={310}
                />
                <div className="team__info">
                  <div className="team__info__name">{teamInfo.member_1.name}</div>
                  <div className="team__info__position">{teamInfo.member_1.position}</div>
                </div>
              </div>
              <div className="team__member">
                <Image
                  src={teamInfo.member_1.imagePath}
                  alt="Team member"
                  width={250}
                  height={310}
                />
                <div className="team__info">
                  <div className="team__info__name">{teamInfo.member_2.name}</div>
                  <div className="team__info__position">{teamInfo.member_2.position}</div>
                </div>
              </div>
            </div>
            <div className="team__right">
              {teamInfo.desc}
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

const teamInfo = {
  member_1 : {
    name : 'Vicky Taneja',
    position : 'Co-Founder',
    imagePath : '/assets/images/team_m1.png',
  },
  member_2 : {
    name : 'amit lal',
    position : 'Co-Founder',
    imagePath : '/assets/images/team_m1.png',
  },
  desc : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. '
}

export default Team