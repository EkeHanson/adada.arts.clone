import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ContactImg from '../assets/Img/contact-Img.png';
import LocationIcon from '../assets/Img/location-icon.svg';
import CallIcon from '../assets/Img/call-icon.svg';
import EmailIcon from '../assets/Img/email-icon.svg';
import axios from 'axios'; // Add axios for HTTP requests

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    interest_service: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when request starts

    axios.post('https://cmvp.net/api/v1/free/api/register/send-contact-email/', formData)
      .then(response => {
        alert('Message sent successfully!');
        setFormData({
          full_name: '',
          email: '',
          phone_number: '',
          interest_service: '',
          message: ''
        });
        setLoading(false); // Set loading to false when request completes
      })
      .catch(error => {
        alert('Error sending message.');
        console.error(error);
        setLoading(false); // Set loading to false if an error occurs
      });
  };

  return (
    <div>
      <Helmet>
        <title>Contact us | A.R.T.S Training Services </title>
        <meta name="description" content="Accredited Recognized Training Solutions" />
        <meta name="keywords" content="A.R.T.S, training services, accredited health courses, about A.R.T.S training services" />
      </Helmet>

      <section className='Lla_Contact_sec'>
        <div className='site-container'>
          <div className='Lla_Contact_Main'>
            <div className='Lla_Contact_L'>
              <img src={ContactImg} alt="Contact" />
            </div>
            <div className='Lla_Contact_R'>
              <div>
                <h3>Drop a message</h3>
                <form className='Cont_Form' onSubmit={handleSubmit}>
                  <div className='Dd_Flex'>
                    <div className='Cont_Form_Inpt'>
                      <input type='text' name='full_name' value={formData.full_name} onChange={handleChange} placeholder='Full Name' />
                    </div>
                    <div className='Cont_Form_Inpt'>
                      <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email Address' />
                    </div>
                  </div>
                  <div className='Cont_Form_Inpt'>
                    <input type='text' name='phone_number' value={formData.phone_number} onChange={handleChange} placeholder='Phone Number' />
                  </div>
                  <div className='Cont_Form_Inpt'>
                    <input type='text' name='interest_service' value={formData.interest_service} onChange={handleChange} placeholder='Interest Service' />
                  </div>
                  <div className='Cont_Form_Inpt'>
                    <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Type message here'></textarea>
                  </div>
                  <div className='Cont_Form_Inpt'>
                    <button type='submit' disabled={loading}>
                      {loading ? 'Submitting....' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='Cont_DLts'>
        <div className='site-container'>
          <ul>
            <li>
              <img src={LocationIcon} alt="Location" />
              <p>Address</p>
              <span className='p'>Unit 2, Church Farm Court, Capenhurst Ln, Capenhurst, Chester CH1 6HE, United Kingdom</span>
            </li>
            <li>
              <img src={CallIcon} alt="Phone" />
              <p>Phone number</p>
              <span className='p'>03300582044</span>
            </li>
            <li>
              <img src={EmailIcon} alt="Email" />
              <p>Email Address</p>
              <span className='p'>info@artstraining.co.uk, support@artstraining.co.uk</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
