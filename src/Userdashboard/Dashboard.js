import React from 'react';

import DashboardNav from './DashboardNav';

import AllArrow from './Img/all-arrow.svg';

import FileIcon from './Img/file-icon.svg';

import CoursesNAv from './CoursesNAv';

import CoursesCards from './CoursesCards';

const Dashboard = () => {
  return (
   <section className='User_Dashboard'>
    <div className='site-container'>
      <div className='User_Dashboard_main'>
        <div className='UuD_Dash_Left'>
          <div className='UuD_Dash_NAV'>
            <DashboardNav />
          </div>
        </div>
        <div className='UuD_Dash_Right'>
          <div className='site-container'>
            <div className='Main_Dash_Content'>
              <div className='Top_TD_Dash'>
                <div className='TD_Dash_Intro'>
                  <h3>Welcome Back Prince !</h3>
                  <span>User Dashboard</span>
                </div>
              <div className='TD_Dash_Card_Sec'>


                <div className='TD_Dash_Card_1'>
                <div className='GGha_Grid'>
                  <div className='GG_Bans'>
                    <img src={FileIcon} alt='File Icon'></img>
                  </div>
                  <div className='GG_TxtX'>
                    <div>
                    <h4><img src={AllArrow} alt='All Arrow'></img> <img src={AllArrow} alt='All Arrow'></img> 0</h4>
                    <p>All Courses</p>
                    </div>
                  </div>
                </div>
                <div className='GG_Foot'>
                  <p>A.R.T.S  <img src={AllArrow} alt='All Arrow'></img> User Dashboard</p>
                </div>
                </div>


                 <div className='TD_Dash_Card_1'>
                <div className='GGha_Grid'>
                  <div className='GG_Bans'>
                    <img src={FileIcon} alt='File Icon'></img>
                  </div>
                  <div className='GG_TxtX'>
                    <div>
                    <h4><img src={AllArrow} alt='All Arrow'></img> <img src={AllArrow} alt='All Arrow'></img> 0</h4>
                    <p>Completed Courses</p>
                    </div>
                  </div>
                </div>
                <div className='GG_Foot'>
                  <p>A.R.T.S  <img src={AllArrow} alt='All Arrow'></img> User Dashboard</p>
                </div>
                </div>


                <div className='TD_Dash_Card_1'>
                <div className='GGha_Grid'>
                  <div className='GG_Bans'>
                    <img src={FileIcon} alt='File Icon'></img>
                  </div>
                  <div className='GG_TxtX'>
                    <div>
                    <h4><img src={AllArrow} alt='All Arrow'></img> <img src={AllArrow} alt='All Arrow'></img> 0</h4>
                    <p>Ongoing Courses</p>
                    </div>
                  </div>
                </div>
                <div className='GG_Foot'>
                  <p>A.R.T.S  <img src={AllArrow} alt='All Arrow'></img> User Dashboard</p>
                </div>
                </div>


                <div className='TD_Dash_Card_1'>
                <div className='GGha_Grid'>
                  <div className='GG_Bans'>
                    <img src={FileIcon} alt='File Icon'></img>
                  </div>
                  <div className='GG_TxtX'>
                    <div>
                    <h4><img src={AllArrow} alt='All Arrow'></img> <img src={AllArrow} alt='All Arrow'></img> 0</h4>
                    <p>Recent Courses</p>
                    </div>
                  </div>
                </div>
                <div className='GG_Foot'>
                  <p>A.R.T.S  <img src={AllArrow} alt='All Arrow'></img> User Dashboard</p>
                </div>
                </div>



              </div>
              </div>


              <div className='Page_Top'>
          <div className='Main_Page_Top'>
            <div className='Left_AA_Pp_Sec'>
              <h2>Recent Courses</h2>
              <p>You have about <b>7</b> recent courses</p> {/* Displaying the count */}
            </div>
            <div className='Right_AA_Pp_Sec'>
              <CoursesNAv />
            </div>
          </div>
        </div>

        <CoursesCards />





            </div>
            {/* Main_Dash_Content */}

            
          </div>
        </div>
      </div>
    </div>
   </section>
  );
};

export default Dashboard;
