import React, { useEffect, useState } from 'react'; 
import DashboardNav from './DashboardNav';
import AllArrow from './Img/all-arrow.svg';
import FileIcon from './Img/file-icon.svg';
import CoursesNAv from './CoursesNAv';
import CoursesCards from './CoursesCards';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    full_name: "",
    number_of_enrolled_courses: 0,
    ongoing_courses: 0,
    completed_courses: 0,
  });

  useEffect(() => {
    // Fetch the API data
    const fetchDashboardData = async () => {
      try {
        const userId = localStorage.getItem('userId'); 
        const response = await fetch(`https://cmvp.net/api/v1/free/api/register/users/${userId}/`);
        const data = await response.json();

        // Update the state with the fetched data, handling null values
        setDashboardData({
          full_name: data.full_name || " ",
          number_of_enrolled_courses: data.number_of_enrolled_courses || 0,
          ongoing_courses: data.ongoing_courses || 0,
          completed_courses: data.completed_courses || 0,
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

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
                    <h3>Welcome Back {dashboardData.full_name}</h3>
                    <span>User Dashboard</span>
                  </div>
                  <div className='TD_Dash_Card_Sec'>

                    {/* All Courses */}
                    <div className='TD_Dash_Card_1'>
                      <div className='GGha_Grid'>
                        <div className='GG_Bans'>
                          <img src={FileIcon} alt='File Icon'></img>
                        </div>
                        <div className='GG_TxtX'>
                          <div>
                            <h4>
                              <img src={AllArrow} alt='All Arrow'></img>
                              <img src={AllArrow} alt='All Arrow'></img>
                              {dashboardData.number_of_enrolled_courses}
                            </h4>
                            <p>All Courses</p>
                          </div>
                        </div>
                      </div>
                      <div className='GG_Foot'>
                        <p>A.R.T.S <img src={AllArrow} alt='All Arrow'></img> User Dashboard</p>
                      </div>
                    </div>

                    {/* Completed Courses */}
                    <div className='TD_Dash_Card_1'>
                      <div className='GGha_Grid'>
                        <div className='GG_Bans'>
                          <img src={FileIcon} alt='File Icon'></img>
                        </div>
                        <div className='GG_TxtX'>
                          <div>
                            <h4>
                              <img src={AllArrow} alt='All Arrow'></img>
                              <img src={AllArrow} alt='All Arrow'></img>
                              {dashboardData.completed_courses}
                            </h4>
                            <p>Completed Courses</p>
                          </div>
                        </div>
                      </div>
                      <div className='GG_Foot'>
                        <p>A.R.T.S <img src={AllArrow} alt='All Arrow'></img> User Dashboard</p>
                      </div>
                    </div>

                    {/* Ongoing Courses */}
                    <div className='TD_Dash_Card_1'>
                      <div className='GGha_Grid'>
                        <div className='GG_Bans'>
                          <img src={FileIcon} alt='File Icon'></img>
                        </div>
                        <div className='GG_TxtX'>
                          <div>
                            <h4>
                              <img src={AllArrow} alt='All Arrow'></img>
                              <img src={AllArrow} alt='All Arrow'></img>
                              {dashboardData.number_of_enrolled_courses}
                            </h4>
                            <p>Ongoing Courses</p>
                          </div>
                        </div>
                      </div>
                      <div className='GG_Foot'>
                        <p>A.R.T.S <img src={AllArrow} alt='All Arrow'></img> User Dashboard</p>
                      </div>
                    </div>

                    {/* Recent Courses */}
                    <div className='TD_Dash_Card_1'>
                      <div className='GGha_Grid'>
                        <div className='GG_Bans'>
                          <img src={FileIcon} alt='File Icon'></img>
                        </div>
                        <div className='GG_TxtX'>
                          <div>
                            <h4>
                              <img src={AllArrow} alt='All Arrow'></img>
                              <img src={AllArrow} alt='All Arrow'></img>
                              {dashboardData.number_of_enrolled_courses}
                            </h4>
                            <p>Recent Courses</p>
                          </div>
                        </div>
                      </div>
                      <div className='GG_Foot'>
                        <p>A.R.T.S <img src={AllArrow} alt='All Arrow'></img> User Dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Page_Top'>
                  <div className='Main_Page_Top'>
                    <div className='Left_AA_Pp_Sec'>
                      <h2>Recent Courses</h2>
                      <p>You have about <b>{dashboardData.number_of_enrolled_courses}</b> recent courses</p> {/* Displaying the count */}
                    </div>
                    <div className='Right_AA_Pp_Sec'>
                      <CoursesNAv />
                    </div>
                  </div>
                </div>

                <CoursesCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
