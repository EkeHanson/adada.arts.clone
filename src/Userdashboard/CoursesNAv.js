import React from 'react';
import { NavLink } from 'react-router-dom';

function CoursesNav() {
  return (
    <div className='Sub_Aa_Nav Nnav'>
      <ul>
        <li>
          <NavLink 
            to="/dashboard" 
            end 
            className={({ isActive }) => isActive ? 'active_Aa_NV_Icn' : ''}
          >
            Overview
          </NavLink>
        </li>
       
        <li>
          <NavLink 
            to="/dashboard/ongoing-courses" 
            className={({ isActive }) => isActive ? 'active_Aa_NV_Icn' : ''}
          >
            Ongoing Courses
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/dashboard/completed-courses" 
            className={({ isActive }) => isActive ? 'active_Aa_NV_Icn' : ''}
          >
            Completed Courses
          </NavLink>
        </li>
        
        <li className='Pc_Hiden'>
          <NavLink 
            to="/dashboard/profile" 
            className={({ isActive }) => isActive ? 'active_Aa_NV_Icn' : ''}
          >
            Profile
          </NavLink>
        </li>
       
      </ul>
    </div>
  );
}

export default CoursesNav;
