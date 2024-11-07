
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import RecImg from '../assets/Img/rec-img.png';
import GlobeIcon from '../assets/Img/globe-icon.svg';
import Logo from '../assets/Img/site-logo.png';
import FacebookIcon from '../assets/Img/facebook-icon.svg';
import LinkedinIcon from '../assets/Img/linkedin-icon.svg';
import TwitterIcon from '../assets/Img/twitter-icon.svg';

const Footer = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      // Fetch data from the API
      fetch('https://cmvp.net/api/v1/free/api/courses/category/')
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
        })
        .catch((error) => console.error('Error fetching categories:', error));
    }, []);
  
  return (
    <div>
      <footer className='site-footer'>
        <div className='mid-container'>
            <div className='footer-content'>
                <div className='foot-Card'>
                    <div>
                    <img src={Logo} className='foot-logo' alt="Site Logo" />
                    <p className='p'>We have designed our training programmes and platforms to help meet 
                        both individuals and corporate organizational training needs.</p>

                        <h4>We are recognized by:</h4>

                        <img src={RecImg} alt="Recognized By" />

                        </div>
                </div>
                <div className='foot-Card'>
                    <div>
                    <h4>Company</h4>

                        <ul>
                            {categories.length > 0 ? (
                                categories.map((category) => (
                                <li key={category.id}>
                                    {/* <Link to={`/${category.slug}`}>{category.title}</Link> */}
                                     <Link to={`/courses?name=${encodeURIComponent(category.title)}&id=${category.id}&Maincategory=Industry Sector`} className='course_card'>{category.title}</Link>
                                </li>
                                ))
                            ) : (
                                <li>Loading categories...</li>
                            )}
                        </ul>
                    <ul>
                        {/* <li><Link to='/health-category'>Healthcare courses</Link></li>
                        <li><Link to='/leadership-category'>Leadership courses</Link></li> */}
                        {/* <li><Link to='/others'>Other courses</Link></li> */}
                        {/* <li><Link to='/arts-training'>A.R.T.S Training</Link></li> */}
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/help'>Help and support</Link></li>
                        <li><Link to='/terms'>Terms and conditions</Link></li>
                        <li><Link to='/privacy'>Privacy Policy</Link></li>

                    </ul>
                    </div>
                </div>
                <div className='foot-Card'>
                    <div className='SsLla-Div'>
                    <button><img src={GlobeIcon} alt="Globe Icon" /> English</button>
                    <div className="foot-Card-foot">
                        <div className='social-icon'>
                            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                                <img src={FacebookIcon} alt="Facebook Icon" />
                            </a>
                            <a href='https://www.linkedin.com/company/a-r-t-s-training-services-ltd/' target='_blank' rel='noopener noreferrer'>
                                <img src={LinkedinIcon} alt="LinkedIn Icon" />
                            </a>
                            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                                <img src={TwitterIcon} alt="Twitter Icon" />
                            </a>
                        </div>
                        <h6>© {new Date().getFullYear()} A.R.T.S</h6>
                        <p style={{ fontSize: '12px' }}>
                            Developed by <a href='https://prolianceltd.com/' style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Proliance LTD</a>
                            </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

