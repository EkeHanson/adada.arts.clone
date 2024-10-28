import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Make sure this context is set up correctly
import HelpIcon from '../assets/Img/help-icon.svg';
import ArrowDownIcon from '../assets/Img/arrow-down1.svg';
import GlobeIcon from '../assets/Img/globe-icon.svg';
import Logo from '../assets/Img/site-logo.png';

const Navbar = ({ toggleSubNav, isSubNavVisible }) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();



  const handleNavToggle = () => {
    setIsNavActive(!isNavActive);
  };

  const handleNavClick = () => {
    setIsNavActive(false);
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    toggleSubNav();
    handleNavClick();
  };

  const toggleSectionVisibility = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home page after logout
  };

  const handleDashboardClick = () => {
    if (user) {
      navigate(user.role === 'admin' ? '/admin' : '/dashboard'); // Redirect based on role
    }
  };

  const [industryCategories, setIndustryCategories] = useState([]);
  const [careerCategories, setCareerCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://cmvp.net/api/v1/free/api/courses/category/');
        const data = await response.json();

        // console.log("Industry Category Data")
        // console.log(data)
        // console.log("Industry Category Data")

        // const industry = data.filter(category => category[0].mainCategory.name === "Health Care");
        const career = data.filter(category => category.mainCategory.id === 2);

        setIndustryCategories(data);
        setCareerCategories(career);

      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);



  return (
    <nav className={`NaVbar ${isNavActive ? 'active-Navbar' : ''}`}>
      <div className='Top_Nav'>
        <div className='site-container'>
          <div className='Nav_Content'>
            <Link to='/' className='site-logo' onClick={handleNavClick}>
              <img src={Logo} alt="Site Logo" />
            </Link>
            <div className='Nav_Icons'>
              <ul className='Ll_Nav_Ul'>
                {/* <li className={`explore-Cc-Icon ${isSubNavVisible ? 'active-explore-Cc' : ''}`}>
                  <a href='#' onClick={handleExploreClick}>
                    Explore courses <img src={ArrowDownIcon} alt="Arrow-down Icon" />
                  </a>
                </li> */}

                  {industryCategories.map(category => (
                        <li key={category.id}>
                          <Link to={`/courses?name=${encodeURIComponent(category.title)}&id=${category.id}&Maincategory=Industry Sector`} onClick={handleNavClick}>
                            {category.title}
                            {/* <img src={ArrowDownIcon} alt="Arrow-down Icon" className='Arrow_Down_Icons' />gi */}
                          </Link>

                          {/* <div className='Courses_DropDown'>
                    <ul>
                    <li><a href="#">Click to open</a></li>
                    </ul>
                  </div> */}
                        </li>
                      ))}


                {/* <li>
                  <Link to='/arts-training'  onClick={handleNavClick}>
                    A.R.T.S Training
                  </Link>
                </li> */}
               
              </ul>
              <ul className='Rr_Nav_Ul'>
              <li>
                  <Link to='/about' onClick={handleNavClick}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='/help' onClick={handleNavClick}>
                  Contact us <img src={HelpIcon} alt="Help Icon" />
                  </Link>
                </li>
                {user ? (
                  <>
                    <li><a href="javascript:void(0);" className='uL_login_btn' onClick={handleDashboardClick}>Dashboard</a></li>
                    <li><a href="javascript:void(0);" className='signup_btn' onClick={handleLogout}>Logout</a></li>
                  </>
                ) : (
                  <>
                    <li><Link to='/login' className='uL_login_btn' onClick={handleNavClick}>Log in</Link></li>
                    <li><Link to='/signup' className='signup_btn' onClick={handleNavClick}>Get Started</Link></li>
                  </>
                )}
              </ul>
            </div>
            <div className='Rr_Sec_D'>
              {/* <div className='lang_Div'>
                <span><img src={GlobeIcon} alt="Globe Icon" /></span>
                <p>EN</p>
                <ul className='lang_DropDown'>
                  <li>EN</li>
                </ul>
              </div> */}
              <div className='Nav_Toggler' onClick={handleNavToggle}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
