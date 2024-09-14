// import React, { useState } from 'react';

// import ArrowDownIcon1 from '../assets/Img/arrow-down1.svg';
// import ArrowUpIcon1 from '../assets/Img/arrow-up1.svg';
// import CcIcon1 from '../assets/Img/Cc-icon1.svg';
// import CcIcon2 from '../assets/Img/Cc-icon2.svg';
// import CcIcon3 from '../assets/Img/Cc-icon3.svg';
// import CcIcon4 from '../assets/Img/Cc-icon4.svg';

// const RecentCourses = () => {
//   const [expandedCards, setExpandedCards] = useState({});


//   const toggleCard = (cardId) => {
//     setExpandedCards(prevState => ({
//       ...prevState,
//       [cardId]: !prevState[cardId]
//     }));
//   };

//   return (
//     <div className='HHag_Sec'>
//       <div className='Courses_Groups'>

//         <div className={`CCc_Card ${expandedCards['card1'] ? 'show_more_Dlt' : ''}`}>
//           <div className='CCc_Card_1'>
//             <div className='CCc_Card_1_Top'>
//               <p><span>Course category:</span> Healthcare courses1111</p>
//               <h3>NCFE CACHE Level 3 Diploma in Supporting Teaching and Learning 603/2496/X</h3>
//             </div>
//             <div className='CCc_Card_1_Mid'>
//               <h4>About this qualification</h4>
//               <p>
//                 This qualification provides learners with an in-depth understanding of the knowledge and skills needed when working directly with children and young people in school and college environments. It covers all aspects of specialist support including planning, delivering and reviewing assessment strategies to support learning alongside the teacher; bilingual support; special needs support; and personal development and reflective practice.
//               </p>
//               <p>
//                 To achieve the Diploma the learner must complete 16 mandatory units. How is it assessed? This qualification is assessed internally. How long will it take to complete this qualification? The Diploma can usually be completed in 1 year to 18 months.
//               </p>
//               <p>
//                 Do you need to be working to take this qualification? As learners need to show competence in both skills and knowledge, they will need to be working or be on a practical placement during the taught programme of study in a learning environment (school, college, or similar). Are there any other qualifications you may be interested in? This qualification provides progression to other qualifications within education and training, and to a university degree, or specialist roles within the workforce.
//               </p>
//               <div className='Career-Divv'>
//                 <h4>Career opportunities</h4>
//                 <p>This qualification provides you with the knowledge, understanding, and skills to work in a variety of unsupervised job roles that support children and young people’s learning in schools or colleges. Roles this qualification will prepare you for include:</p>
//                 <ul>
//                   <li>Teaching Assistant</li>
//                   <li>Learning Support Assistant</li>
//                   <li>Special Needs Assistant</li>
//                 </ul>
//               </div>
//             </div>
//             <div className='CCc_Card_1_Foot'>
//               <button
//                 className='view-more-btn'
//                 onClick={() => toggleCard('card1')}
//               >
//                 {expandedCards['card1'] ? 'View less' : 'View more'}{' '}
//                 <img
//                   src={expandedCards['card1'] ? ArrowUpIcon1 : ArrowDownIcon1}
//                   alt="Arrow"
//                 />
//               </button>
//             </div>
//           </div>
//           <div className='CCc_Card_2'>
//             <ul>
//               <li><img src={CcIcon1} alt="Icon" /><span>2 HOURS LESSONS</span></li>
//               <li><img src={CcIcon2} alt="Icon" /><span>1 Day</span></li>
//               <li><img src={CcIcon3} alt="Icon" /><span>Online</span></li>
//               <li><span>13/02/2023 - 11.00 pm</span></li>
//               <li><span><span>Recent</span></span></li>
//               <li><button className='enroll_btn complete_btn'> Complete Course</button></li>
//             </ul>
//           </div>
//         </div>

//         <div className={`CCc_Card ${expandedCards['card2'] ? 'show_more_Dlt' : ''}`}>
//           <div className='CCc_Card_1'>
//             <div className='CCc_Card_1_Top'>
//               <p><span>Course category:</span>We are Healthcare courses</p>
//               <h3>009  NCFE CACHE Level 3 Diploma in Supporting Teaching and Learning 603/2496/X</h3>
//             </div>
//             <div className='CCc_Card_1_Mid'>
//               <h4>About this qualification</h4>
//               <p>
//                 88 This qualification provides learners with an in-depth understanding of the knowledge and skills needed when working directly with children and young people in school and college environments. It covers all aspects of specialist support including planning, delivering and reviewing assessment strategies to support learning alongside the teacher; bilingual support; special needs support; and personal development and reflective practice.
//               </p>
//               <p>
//                 77 To achieve the Diploma the learner must complete 16 mandatory units. How is it assessed? This qualification is assessed internally. How long will it take to complete this qualification? The Diploma can usually be completed in 1 year to 18 months.
//               </p>
//               <p>
//                09 Do you need to be working to take this qualification? As learners need to show competence in both skills and knowledge, they will need to be working or be on a practical placement during the taught programme of study in a learning environment (school, college, or similar). Are there any other qualifications you may be interested in? This qualification provides progression to other qualifications within education and training, and to a university degree, or specialist roles within the workforce.
//               </p>
//               <div className='Career-Divv'>
//                 <h4>Career opportunities</h4>
//                 <p>56 This qualification provides you with the knowledge, understanding, and skills to work in a variety of unsupervised job roles that support children and young people’s learning in schools or colleges. Roles this qualification will prepare you for include:</p>
//                 <ul>
//                   <li>009 Teaching Assistant</li>
//                   <li>18 Learning Support Assistant</li>
//                   <li>001 Special Needs Assistant</li>
//                 </ul>
//               </div>
//             </div>
//             <div className='CCc_Card_1_Foot'>
//               <button
//                 className='view-more-btn'
//                 onClick={() => toggleCard('card2')}
//               >
//                 {expandedCards['card1'] ? 'View less' : 'View more'}{' '}
//                 <img
//                   src={expandedCards['card1'] ? ArrowUpIcon1 : ArrowDownIcon1}
//                   alt="Arrow"
//                 />
//               </button>
//             </div>
//           </div>
//           <div className='CCc_Card_2'>
//             <ul>
//               <li><img src={CcIcon1} alt="Icon" /><span>5 HOURS LESSONS</span></li>
//               <li><img src={CcIcon2} alt="Icon" /><span>7 Days</span></li>
//               <li><img src={CcIcon3} alt="Icon" /><span>Odemand</span></li>
//               <li><span>1/07/2024 - 11.00 pm</span></li>
//               <li><span><span>Recent</span></span></li>
//               <li><button className='enroll_btn complete_btn'> Complete Course</button></li>
//             </ul>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default RecentCourses;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ArrowDownIcon1 from '../assets/Img/arrow-down1.svg';
import ArrowUpIcon1 from '../assets/Img/arrow-up1.svg';
import CcIcon1 from '../assets/Img/Cc-icon1.svg';
import CcIcon2 from '../assets/Img/Cc-icon2.svg';
import CcIcon3 from '../assets/Img/Cc-icon3.svg';
import CcIcon4 from '../assets/Img/Cc-icon4.svg';

const RecentCourses = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [courses, setCourses] = useState([]);

  // Fetch course data from the API endpoint
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const userId = localStorage.getItem('userId'); 
        const response = await axios.get(`https://cmvp.net/api/v1/free/api/register/user_courses/${userId}/`);
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const toggleCard = (cardId) => {
    setExpandedCards(prevState => ({
      ...prevState,
      [cardId]: !prevState[cardId]
    }));
  };

  return (
    <div className='HHag_Sec'>
      <div className='Courses_Groups'>
        {courses.map((course, index) => (
          <div className={`CCc_Card ${expandedCards[`card${index}`] ? 'show_more_Dlt' : ''}`} key={course.courseId}>
            <div className='CCc_Card_1'>
              <div className='CCc_Card_1_Top'>
                <p><span>Course category:</span> {course.category}</p>
                <h3>{course.title}</h3>
              </div>
              <div className='CCc_Card_1_Mid'>
                <h4>About this qualification</h4>
                <p dangerouslySetInnerHTML={{ __html: course.details }}></p>
                {/* <div className='Career-Divv'>
                  <h4>Career opportunities</h4>
                  <p>This qualification provides you with the knowledge, understanding, and skills to work in a variety of unsupervised job roles that support children and young people’s learning in schools or colleges. Roles this qualification will prepare you for include:</p>
                  <ul>
                    <li>Teaching Assistant</li>
                    <li>Learning Support Assistant</li>
                    <li>Special Needs Assistant</li>
                  </ul>
                </div> */}
              </div>
              <div className='CCc_Card_1_Foot'>
                <button
                  className='view-more-btn'
                  onClick={() => toggleCard(`card${index}`)}
                >
                  {expandedCards[`card${index}`] ? 'View less' : 'View more'}{' '}
                  <img
                    src={expandedCards[`card${index}`] ? ArrowUpIcon1 : ArrowDownIcon1}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
            <div className='CCc_Card_2'>
              <ul>
                <li><img src={CcIcon1} alt="Icon" /><span>{course.days_per_week} DAYS LESSONS </span></li>
                <li><img src={CcIcon2} alt="Icon" /><span>{course.duration}</span></li>
                <li><img src={CcIcon3} alt="Icon" /><span>{course.course_type}</span></li>
                <li><span>{new Date().toLocaleDateString()}</span></li>
                <li><span><span>Recent</span></span></li>
                <li><button className='enroll_btn complete_btn'> Complete Course</button></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCourses;
