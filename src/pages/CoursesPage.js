import React, { useState, useEffect, lazy} from 'react';
import { Helmet } from 'react-helmet';
import {useNavigate, useParams, useLocation } from 'react-router-dom'; // Import useParams
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AngleLeft from '../assets/Img/angle-right.svg';
import FilterIcon from '../assets/Img/filter-icon.svg';
import CourserIcon1 from '../assets/Img/student.png';
import CourserIcon2 from '../assets/Img/write.png';
import ArrowDownIcon1 from '../assets/Img/arrow-down1.svg';
import ArrowUpIcon1 from '../assets/Img/arrow-up1.svg';
import AbtImg3 from '../assets/Img/AbtImg3.png';
import CcIcon1 from '../assets/Img/Cc-icon1.svg';
import CcIcon2 from '../assets/Img/Cc-icon2.svg';
import CcIcon3 from '../assets/Img/Cc-icon3.svg';
import CcIcon4 from '../assets/Img/Cc-icon4.svg';

// Import NavbarWrapper using lazy loading
const NavbarWrapper = lazy(() => import('./NavbarWrapper'));

const CoursesPage = () => {

      
  const navigate = useNavigate(); // Initialize useNavigate
    // Extract the category ID from the URL
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryName = queryParams.get('name');
    const mainCategoryName = queryParams.get('Maincategory');
    const categoryId = queryParams.get('id');


    function insertIntoUrl(url) {
        const insertString = "api/v1/free/";
        const insertPosition = url.indexOf("api/v1/free") + insertString.length;
        const updatedUrl = url.slice(0, insertPosition) + insertString + url.slice(insertPosition);
        return updatedUrl;
    }
    

    const [courseStatus, setCourseStatus] = useState('all-courses');
    const [methodOfLearning, setMethodOfLearning] = useState('all-courses');
    const [fees, setFees] = useState('all-courses');
    const [date, setDate] = useState('all-courses');
    const [expandedCards, setExpandedCards] = useState({});
    const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
    const [price, setPrice] = useState(0);
    const [course_id, setCourse_id] = useState(0);
    const [courses, setCourses] = useState([]);
    const [categoryImage, setCategoryImage] = useState([]);

    const handleCheckboxChange = (group, value) => {
        if (group === 'courseStatus') {
            setCourseStatus(value);
        } else if (group === 'methodOfLearning') {
            setMethodOfLearning(value);
        } else if (group === 'fees') {
            setFees(value);
        } else if (group === 'date') {
            setDate(value);
        }
    };

    // Fetch courses from the API using the category ID from the URL
    useEffect(() => {
        if (categoryId) {
            fetch(`https://cmvp.net/api/v1/free/api/courses/category/${categoryId}`)
                .then(response => response.json())
                .then(data => {
                    //console.log('Fetched data:', data); // Log the fetched data
                    if (data && Array.isArray(data.courses)) {
                      setCategoryImage(data.image)
                        setCourses(data.courses); 
                    } else {
                        console.error('Expected data to have a "courses" key with an array value, but got:', data);
                    }
                })
                .catch(error => console.error('Error fetching courses:', error));
        }
    }, [categoryId]);

    const handleEnrollClick = (price, courseID) => {
        // console.log(`Course Title: ${title}, Course Price: ${price}`);
        setShowPaymentDropdown(true);
        setPrice(price);
        setCourse_id(courseID);
    };
    
    
    const handleCloseDropdown = () => {
        setShowPaymentDropdown(false);
    };

    const toggleCard = (cardId) => {
        setExpandedCards(prevState => ({
            ...prevState,
            [cardId]: !prevState[cardId]
        }));
    };

    useEffect(() => {
        if (showPaymentDropdown) {
            // Load PayPal SDK script dynamically sb-0wsmz23447938@personal.example.com  #xX#@653
            const script = document.createElement("script");
            script.src = "https://www.paypal.com/sdk/js?client-id=AZ6ch7kDKITSE27sHoNVsSsXIOn2oE4Xsx41rloJwvSil1NRF9-fm0475cOLxXmXGchuEbJ4Hd5FxtOE"; // Add your PayPal client ID here
            script.async = true;
            script.onload = () => {
                window.paypal.Buttons({
                    createOrder: function (data, actions) {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: price // Set the amount to be charged here
                                }
                            }]
                        });
                    },
                    onApprove: function (data, actions) {
                        return actions.order.capture().then(async function (details) {
                            console.log('Transaction completed by ' + details.payer.name.given_name);
                            
                            // Define your userId and courseId variables
                            const userId = localStorage.getItem("userId");
                            const courseId = course_id; // Replace with actual courseId
                            
                            try {
                                // Make GET request to the endpoint
                                await fetch(`https://cmvp.net/api/v1/free/api/register/add_course/${userId}/${courseId}`, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        // Add any required headers here
                                    }
                                });
    
                                // Redirect to the dashboard after the API call succeeds
                                navigate('/dashboard'); // Redirect to the instructor page after adding
                            } catch (error) {
                                console.error('Error during API call', error);
                            }
                        });
                    },
                    onError: (err) => {
                        console.error('Error during PayPal transaction', err);
                    }
                }).render('#paypal-button-container');
            };
            document.body.appendChild(script);
        }
    }, [showPaymentDropdown]);
    

    // Conditionally add class to payment_DropDown section
    const dropdownClass = showPaymentDropdown ? "payment_DropDown show_payment_DropDown" : "payment_DropDown";


    return (
        <div className='courses-page'>
            <Helmet>
                <title>Health And Social Care Accredited Courses | A.R.T.S Training Services</title>
                <meta name="description" content="Healthcare Courses | A.R.T.S Training Services" />
                <meta name="keywords" content="A.R.T.S, training services, accredited health courses" />
            </Helmet>

            <div className='navigateTo-Top'>
                <div className='site-container'>
                    <ul>
                        <li><a href='#'>Courses</a></li>
                        <li><img src={AngleLeft} alt="Angle Left" /></li>
                        <li><a href='#'>{mainCategoryName}</a></li>
                        <li><img src={AngleLeft} alt="Angle Left" /></li>
                        <li><a href='#'>{categoryName}</a></li>
                    </ul>
                </div>
            </div>

            <section className='All_Courses_Sec'>
                <div className='site-container'>
                    <div className='All_Course_Main'>
                        <div className='filter_Sec'>
                            <div className='filter-box'>
                                <h3>Filter <img src={FilterIcon} alt="Filter Icon" /></h3>
                                {/* Filter options here */}

                                
                                <ul>
                                    <p>Course status</p>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={courseStatus === 'all-courses'} 
                                                onChange={() => handleCheckboxChange('courseStatus', 'all-courses')}
                                            />
                                            All courses
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={courseStatus === 'qualifications'} 
                                                onChange={() => handleCheckboxChange('courseStatus', 'qualifications')}
                                            />
                                            Qualifications
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={courseStatus === 'mandatory-courses'} 
                                                onChange={() => handleCheckboxChange('courseStatus', 'mandatory-courses')}
                                            />
                                            Mandatory Courses
                                        </label>
                                    </li>
                                </ul>

                                <ul>
                                    <p>Method of learning</p>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={methodOfLearning === 'all-courses'} 
                                                onChange={() => handleCheckboxChange('methodOfLearning', 'all-courses')}
                                            />
                                            All courses
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={methodOfLearning === 'online-courses'} 
                                                onChange={() => handleCheckboxChange('methodOfLearning', 'online-courses')}
                                            />
                                            Online courses
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={methodOfLearning === 'on-demand-courses'} 
                                                onChange={() => handleCheckboxChange('methodOfLearning', 'on-demand-courses')}
                                            />
                                            On Demand courses
                                        </label>
                                    </li>
                                </ul>

                                <ul>
                                    <p>Fees</p>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={fees === 'all-courses'} 
                                                onChange={() => handleCheckboxChange('fees', 'all-courses')}
                                            />
                                            All courses
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={fees === 'free-courses'} 
                                                onChange={() => handleCheckboxChange('fees', 'free-courses')}
                                            />
                                            Free courses
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={fees === 'paid-courses'} 
                                                onChange={() => handleCheckboxChange('fees', 'paid-courses')}
                                            />
                                            Paid courses
                                        </label>
                                    </li>
                                </ul>

                                <ul>
                                    <p>Date</p>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={date === 'all-courses'} 
                                                onChange={() => handleCheckboxChange('date', 'all-courses')}
                                            />
                                            All courses
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={date === 'most-recent-courses'} 
                                                onChange={() => handleCheckboxChange('date', 'most-recent-courses')}
                                            />
                                            Most Recent courses
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                className='custom-checkbox' 
                                                checked={date === 'old-courses'} 
                                                onChange={() => handleCheckboxChange('date', 'old-courses')}
                                            />
                                            Old courses
                                        </label>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className='Courses_Groups'>
                            <div className='Topp_Seck'>
                                <div className='Topp_Seck_Img'>
                                    <img src={insertIntoUrl(categoryImage)} alt="Course" />
                                </div>
                                <div className='Topp_Seck_Txt'>
                                    <div>
                                        <h3 className='mid-text'>{categoryName}</h3>
                                        <span><img src={CourserIcon1} alt="Course Icon" />{mainCategoryName}</span>
                                        <span><img src={CourserIcon2} alt="Course Icon" />{courses.length} courses</span>
                                    </div>
                                </div>
                            </div>

                            {Array.isArray(courses) && courses.length > 0 ? (
                                courses.map((course, index) => (
                                    <div key={course.id} className={`CCc_Card ${expandedCards[`card${index}`] ? 'show_more_Dlt' : ''}`}>
                                        <div className='CCc_Card_1'>
                                            <div className='CCc_Card_1_Top'>
                                                <h3>{course.title}</h3>
                                            </div>
                                            <div className='CCc_Card_1_Mid'>
                                                {/* <h4>About this qualification</h4> */}
                                                <p dangerouslySetInnerHTML={{ __html: course.details }}></p>
                                                {/* <p>{course.details}</p> */}

                                                <div className='Career-Divv'>
                                                    {/* <h4>Career opportunities</h4> */}
                                                    <p>{course.careerOpportunities}</p>
                                                </div>
                                            </div>
                                            <div className='CCc_Card_1_Foot'>
                                                <button className='view-more-btn' onClick={() => toggleCard(`card${index}`)}>
                                                    {expandedCards[`card${index}`] ? 'View less' : 'View more'} 
                                                    {/* <img src={expandedCards[`card${index}`] ? ArrowUpIcon1 : ArrowDownIcon1} alt="Arrow" /> */}
                                                </button>
                                            </div>
                                        </div>
                                        <div className='CCc_Card_2'>
                                            <ul>
                                                <li><img src={CcIcon1} alt="Icon" /><span>{course.lessons} HOURS LESSONS</span></li>
                                                <li><img src={CcIcon2} alt="Icon" /><span>{course.duration}</span></li>
                                                <li><h3>&pound;{course.amount}</h3></li>
                                                <li><img src={CcIcon3} alt="Icon" /> <span>{course.methodOfLearning}</span></li>
                                                <li>
                                                <button 
                                                    className='enroll_btn' 
                                                    onClick={() => handleEnrollClick(course.amount, course.id)}
                                                >
                                                    <img src={CcIcon4} alt="Icon" /> Enroll Now
                                                </button>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No courses available</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='DaNns_Footd'>
                <div className='site-container'>
                    <div className='DaNns_Footd_1'>
                        <Link to='/health-category' className='btn btn-light'>View All Healthcare Courses</Link>
                    </div>
                    <div className='DaNns_Footd_2'>
                        <ul>
                            <li>
                                <p>Similar courses:</p>
                                <span>
                                    <a href='#'>Adult Care Mandatory Courses</a>
                                    <a href='#'>Residential Children Services Accredited Courses</a>
                                    <a href='#'>Facilitated Adult Career Induction Package</a>
                                    <a href='#'>Education and Training</a>
                                </span>
                            </li>
                            <li>
                                <p>Related searches:</p>
                                <span>
                                    <a href='#'>Facilitated Adult Career Induction Package</a>
                                    <a href='#'>Education and Training</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section> */}



            <section className={dropdownClass}>
                <div className="payment_Box">
                    <h3 className="semi-mid-text">Paypal Dropdown</h3>
                    <div id="paypal-button-container"></div>
                </div>
                <button className="close_payment_DropDown" onClick={handleCloseDropdown}>Close</button>
            </section>
           
    
     <section className='Maihs_sec Glans_Bg'>
        <div className='mid-container'>        
     
        <div className='Abt_Sec'>
            
            <div className='Abt_Dlt'>
              <div>
                <h2 className='Semi-mid-text'>Learn. Innovate. Improve</h2>
               <p className='p'>Virtual, classroom and e-learning skills development courses designed to help your people and businesses.</p>

            <div className='Abt_Btns'>
             <a href='#'>Get started</a>
            </div>
              
              </div>
              
            </div>
            <div className='Abt_Banner'>
              <img src={AbtImg3}></img>
            </div>

            </div>

          </div>
           </section>
        </div>
    );
};

export default CoursesPage;
