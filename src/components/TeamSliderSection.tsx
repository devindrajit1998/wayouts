'use client';

import React from 'react';
import Link from 'next/link';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const defaultTeam: TeamMember[] = [
  { name: 'Jason Walker', position: 'Adventure Specialist', image: '/assets/img/team/1.jpg' },
  { name: 'Mia Taylor', position: 'Customer Success Manager', image: '/assets/img/team/2.jpg' },
  { name: 'Frank Mitchell', position: 'Operations Director', image: '/assets/img/team/3.jpg' },
  { name: 'Olivia Carter', position: 'Travel Designer', image: '/assets/img/team/4.jpg' },
];

export default function TeamSliderSection({ team = defaultTeam }: { team?: TeamMember[] }) {
  return (
    <section className="team section-padding">
      <div className="bg-text-style3 duru-slide-up">Experts</div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-30">
            <div className="section-subtitle wow fadeInRight">Travel Advisors</div>
            <div className="section-title d-rotate wow">
              <span className="rotate-text">Meet the WAYOUTS Team</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="swiper team-slider">
              <div className="swiper-wrapper">
                {team.map((member, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div className="item">
                      <div className="wrapper">
                        <div className="img">
                          <img src={member.image} className="img-fluid" alt={member.name} />
                        </div>
                        <div className="icon">
                          <Link href="/team" className="arrow">
                            <span className="fa-solid fa-info default-icon"></span>
                            <span className="ti-arrow-top-right hover-icon"></span>
                          </Link>
                        </div>
                      </div>
                      <div className="text">
                        <h4 className="name">{member.name}</h4>
                        <h6 className="position">{member.position}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
