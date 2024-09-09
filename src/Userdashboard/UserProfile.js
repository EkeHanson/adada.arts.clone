import React from 'react';

import DashboardNav from './DashboardNav';

import AllArrow from './Img/all-arrow.svg';
import EditIcon from './Img/edit-icon.svg';
import ProfilePlaceholder from './Img/profile-placeholder.png';

const UserProfile = () => {
  return (
   <section className='User_Dashboard Profile_Pppa'>
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
              <h2>User Profile</h2>
            </div>
          </div>
        </div>

        <div className='Reg_Form_Sec'>
            <div className='Reg_Form_Box'>
              <div className='Yh_Reg_Header'>
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
                </div>

                <form className='Reg_Form'>
                <div className='Reg_Input'>
                  <input
                    type="text"
                    name=""
                    value="Prince Godson"
                  />
                </div>
                <div className='Reg_Input'>
                  <input
                    type="text"
                    name=""
                    value="princegodson24@gmail.com"
                  />
                </div>

                <div className='Reg_Input'>
                  <input
                    type="number"
                    name=""
                    value="09037494084"
                  />
                </div>

                <div className='Reg_Input'>
                  <input
                    type="text"
                    name=""
                    placeholder='Home Address'
                  />
                </div>

                <div className='Reg_Input'>
                  <button type="submit"  className='submit-button'>
                    Save changes
                  </button>
                  </div>


                </form>

                </div>
                </div>





            </div>
            {/* Main_Dash_Content */}

            
          </div>
        </div>
      </div>
    </div>
   </section>
  );
};

export default UserProfile;
