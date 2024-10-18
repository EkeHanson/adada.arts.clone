import React, { useEffect, useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import ProfilePlaceholder from './Img/profile-placeholder.png';
import EditIcon from './Img/edit-icon.svg';
import AllArrow from './Img/all-arrow.svg';
import DashboardIcon from './Img/dashboard.svg';
import ProfileIcon from './Img/profileicon.svg';
import LogoutIcon from './Img/logout.svg';
import MyCoursesIcon from './Img/my-courses.svg';

const DashboardNav = () => {

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
    <div className='Dashboard_Content'>
      <div className='Tt_Ddda_1'>
        <h3>Dashboard <span>{new Date().toLocaleDateString()}</span></h3>
      </div>
      <div className='Tt_Ddda_2'>
        <div className='Tt_Ddda_20'>
          <img src={ProfilePlaceholder} alt='Profile Image' className='profil_Img' />
          <span><img src={EditIcon} alt='Edit Icon' /></span>
        </div>
        <div className='Tt_Ddda_21'>
          <div>
            <h4>{dashboardData.full_name}</h4>
            <p><span>ID <img src={AllArrow} alt='All Arrow' /></span> ARTS11109</p>
          </div>
        </div>
      </div>

      <div className='Tt_Ddda_3'>
        <h3>Menu</h3>

        <ul>
          <li>
            <NavLink 
              to="/dashboard" 
              end 
              className={({ isActive }) => isActive ? 'Active_UuD_Nav_Icon' : ''}
            >
              <span><img src={DashboardIcon} alt='Dashboard Icon' /> Dashboard</span>
            </NavLink>
          </li>



          <li>
            <NavLink 
              to="/dashboard/profile" 
              className={({ isActive }) => isActive ? 'Active_UuD_Nav_Icon' : ''}
            >
              <span><img src={ProfileIcon} alt='Profile Icon' /> Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/logout" 
              className={({ isActive }) => isActive ? 'Active_UuD_Nav_Icon' : ''}
            >
              <span><img src={LogoutIcon} alt='Logout Icon' /> Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNav;
