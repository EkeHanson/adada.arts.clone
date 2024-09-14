import React, { useEffect, useState } from 'react'; 
import DashboardNav from './DashboardNav';
import AllArrow from './Img/all-arrow.svg';
import EditIcon from './Img/edit-icon.svg';
import ProfilePlaceholder from './Img/profile-placeholder.png';

const UserProfile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false); // for loader during submit
  const userId = localStorage.getItem('userId'); 

  // Fetch user data from the API and prepopulate the form
  useEffect(() => {
    const fetchUserData = async () => {
      try { 
        const response = await fetch(`https://cmvp.net/api/v1/free/api/register/users/${userId}/`);
        const data = await response.json();
        setFullName(data.full_name || '');
        setEmail(data.email || '');
        setPhone(data.phone || '');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [userId]);

  // Handle form submission and send PATCH request
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader when submitting

    const updatedUser = {
      full_name: fullName,
      email: email,
      phone: phone,
    };

    try {
      const response = await fetch(`https://cmvp.net/api/v1/free/api/register/users/${userId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error('Failed to update user profile');
      }

      const data = await response.json();
      console.log('User profile updated:', data);
      setLoading(false); // Hide loader after submission
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating user profile:', error);
      setLoading(false);
      alert('Failed to update profile. Please try again.');
    }
  };

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
                            <h4>{fullName}</h4>
                            <p><span>ID <img src={AllArrow} alt='All Arrow' /></span> ARTS11109</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form className='Reg_Form' onSubmit={handleSubmit}>
                      <div className='Reg_Input'>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className='Reg_Input'>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className='Reg_Input'>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                          required
                        />
                      </div>

                      <div className='Reg_Input'>
                        <button type="submit" className='submit-button' disabled={loading}>
                          {loading ? 'Saving...' : 'Save changes'}
                        </button>
                      </div>
                    </form>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
