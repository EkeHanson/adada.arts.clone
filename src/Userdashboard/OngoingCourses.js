import React, { useEffect, useState } from 'react'; 

import DashboardNav from './DashboardNav';

import AllArrow from './Img/all-arrow.svg';

import FileIcon from './Img/file-icon.svg';

import CoursesNAv from './CoursesNAv';

import CoursesCards from './CoursesCards';

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    ongoing_courses: 0
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
          ongoing_courses: data.number_of_enrolled_courses || 0
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


              <div className='Page_Top'>
          <div className='Main_Page_Top'>
            <div className='Left_AA_Pp_Sec'>
              <h2>Ongoing Courses</h2>
              <p>You have about <b>{dashboardData.number_of_enrolled_courses}</b> ongoing courses</p> {/* Displaying the count */}
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
