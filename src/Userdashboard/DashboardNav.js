import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePlaceholder from './Img/profile-placeholder.png';
import EditIcon from './Img/edit-icon.svg';
import AllArrow from './Img/all-arrow.svg';
import DashboardIcon from './Img/dashboard.svg';
import ProfileIcon from './Img/profileicon.svg';
import LogoutIcon from './Img/logout.svg';
import MyCoursesIcon from './Img/my-courses.svg';

const DashboardNav = () => {
  return (
    <div className='Dashboard_Content'>
      <div className='Tt_Ddda_1'>
        <h3>Dashboard <span>16.05.2024</span></h3>
      </div>
      <div className='Tt_Ddda_2'>
        <div className='Tt_Ddda_20'>
          <img src={ProfilePlaceholder} alt='Profile Image' className='profil_Img' />
          <span><img src={EditIcon} alt='Edit Icon' /></span>
        </div>
        <div className='Tt_Ddda_21'>
          <div>
            <h4>Ndubuisi Prince Godson</h4>
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
