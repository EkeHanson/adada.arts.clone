
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import AbtImg3 from '../assets/Img/AbtImg3.png';

import { Link } from 'react-router-dom';

const MSlaveryPage = () => {
  return (
    <div>

      <Helmet>
        <title>ARTS Modern Slavery Statemen | A.R.T.S Training Services </title>
        <meta name="description" content="Accredited Recognized Training Solutions" />
        <meta name="keywords" content="A.R.T.S, training services, accredited health courses, about A.R.T.S training services" />
      </Helmet>

      <section className='Hha_Secks Policy'>
        <div className='mid-container'>

    <div className="modern-slavery-statement">
      <h1 className='Semi-mid-text'>Modern Slavery Statement</h1>
      
      <section>
        <h3>Introduction</h3>
        <p>
          Modern slavery is an international crime affecting an estimated 40.3
          million people worldwide. This global issue transcends age, gender,
          and ethnicity. It includes victims trafficked from overseas as well as
          vulnerable people in the UK who are illegally forced to work against
          their will in sectors such as agriculture, hospitality, construction,
          retail, and manufacturing.
        </p>
        <p>
          Although A.R.T.S Training Services does not meet the £36 million
          turnover threshold required under the Modern Slavery Act 2015, we
          voluntarily adopt this statement to demonstrate our commitment to
          preventing modern slavery and human trafficking in our operations and
          supply chain.
        </p>
      </section>

      <section>
        <h3>Our Commitment</h3>
        <p>
          We are committed to assessing and mitigating the risks of modern
          slavery and human trafficking in all aspects of our business. We aim
          to ensure that all employees, clients, and suppliers are aligned with
          our dedication to upholding ethical standards and values.
        </p>
      </section>

      <section>
        <h3>Our Policy</h3>
        <ul>
          <li>
            <strong>Ethical Conduct:</strong> Our company values define the
            standards of ethical behaviour we expect from our employees,
            clients, and suppliers.
          </li>
          <li>
            <strong>Fair Treatment:</strong> We are committed to treating all
            individuals fairly, creating a transparent, open, and trusted work
            environment.
          </li>
          <li>
            <strong>Compliance with Laws:</strong> We uphold procedures to
            ensure compliance with anti-modern slavery legislation, even though
            we are not legally obligated to publish this statement.
          </li>
        </ul>
      </section>

      <section>
        <h3>Our Structure</h3>
        <p>
          A.R.T.S Training Services provides professional training services to
          employers and private individuals. We collaborate with various
          professionals, consultants, and contractors to deliver high-quality
          training courses across the UK.
        </p>
      </section>

      <section>
        <h3>Procedures to Prevent Modern Slavery</h3>

        <h3>Employment Practices</h3>
        <ul>
          <li><strong>Fair Pay:</strong> We ensure fair compensation for all employees and contractors.</li>
          <li>
            <strong>Verification Checks:</strong> We follow robust recruitment
            processes in line with UK employment laws, including right-to-work
            document checks and Disclosure and Barring Service (DBS) checks.
          </li>
          <li>
            <strong>Employee Wellbeing:</strong> We offer various well-being
            initiatives to promote our staff’s physical and mental health.
          </li>
        </ul>

        <h3>Supply Chain Transparency</h3>
        <ul>
          <li>
            Conduct thorough due diligence on all suppliers and partners to
            ensure compliance with modern slavery laws.
          </li>
          <li>
            Regularly assess the risks associated with our contractors and
            consultants.
          </li>
          <li>Monitor and report any concerns related to modern slavery.</li>
        </ul>
      </section>

      <section>
        <h3>Supporting Our Employees and Clients</h3>
        <ul>
          <li>
            <strong>Resources and Training:</strong> We provide training
            materials and guidance on recognising and reporting modern slavery.
          </li>
          <li>
            <strong>Whistleblowing Procedure:</strong> Employees have access to
            a confidential whistleblowing procedure to report concerns
            regarding modern slavery or unethical behaviour within the company
            or its partners.
          </li>
        </ul>
      </section>

      <section>
        <h3>Performance Indicators</h3>
        <ul>
          <li>
            Percentage of staff trained annually on modern slavery awareness.
          </li>
          <li>Number of reports filed through our whistleblowing procedure.</li>
          <li>
            Number of audits conducted on suppliers and contractors to ensure
            compliance with anti-slavery policies.
          </li>
        </ul>
      </section>

      <section>
        <h3>Annual Review and Continuous Improvement</h3>
        <p>
          We are committed to annually reviewing this Modern Slavery Statement
          to ensure its relevance and effectiveness. This review includes:
        </p>
        <ul>
          <li>Internal audits to evaluate compliance with anti-slavery policies.</li>
          <li>
            Senior management review of performance metrics and risk
            assessments.
          </li>
          <li>
            Stakeholder consultation, including feedback from employees,
            clients, and suppliers.
          </li>
        </ul>
        <p>
          Results from these reviews will be discussed during management
          meetings to ensure any necessary improvements are implemented.
        </p>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>
          While not legally required, A.R.T.S Training Services remains
          committed to preventing modern slavery and human trafficking within
          our business and supply chain. We will continue to uphold the highest
          ethical conduct and standards of business practices.
        </p>
      </section>

      <section>
        <h3>Contact Us</h3>
        <p>For further information, please contact us directly:</p>
        <ul>
          <li><strong>Phone:</strong> 0330 058 2044</li>
          <li><strong>Email:</strong> support@artstraining.co.uk</li>
        </ul>
      </section>
    </div>


        </div>
      </section>


      <section className='Maihs_sec Glans_Bg'>
        <div className='mid-container'>        
     
        <div className='Abt_Sec'>
            
            <div className='Abt_Dlt'>
              <div>
                <h3 className='Semi-mid-text'>Learn. Innovate. Improve</h3>
               <p className='p'>Virtual, classroom and e-learning skills development courses designed to help your people and businesses achieve.</p>

            <div className='Abt_Btns'>
             <Link to="/login">Get started</Link>
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

export default MSlaveryPage;