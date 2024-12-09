
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import AbtImg3 from '../assets/Img/AbtImg3.png';

import { Link } from 'react-router-dom';

const ConsentPage = () => {
  return (
    <div>

      <Helmet>
        <title>ARTS Consent Information | A.R.T.S Training Services </title>
        <meta name="description" content="Accredited Recognized Training Solutions" />
        <meta name="keywords" content="A.R.T.S, training services, accredited health courses, about A.R.T.S training services" />
      </Helmet>

      <section className='Hha_Secks Policy'>
        <div className='mid-container'>


    <div className="consent-information">
      <h1 className='Semi-mid-text'>Consent Information</h1>

      <p>
        A.R.T.S Training Services processes personal data on behalf of employers
        and private individuals who enroll on our courses, using the lawful
        bases provided by GDPR, such as Legitimate Interests and Special
        Category Data (Article 9(2)(h)), for training purposes. In many cases,
        consent is not required for processing activities necessary for
        compliance with training standards and requirements.
      </p>

      <p>
        However, explicit consent will be obtained in specific situations, such
        as:
      </p>
      <ul>
        <li>Sharing personal data with third-party professionals (e.g., evaluators or specialists).</li>
        <li>Contacting external professionals for further information.</li>
        <li>Providing recommendations beyond standard training assessments.</li>
      </ul>

      <h3>Our Role as a Service Provider</h3>
      <p>
        A.R.T.S Training Services provides professional training programs to
        employers and individuals to ensure participants meet required standards
        for their roles or personal development. Our services include:
      </p>
      <ul>
        <li>Accredited and mandatory training courses.</li>
        <li>
          Online training services, where personal data (including training
          progress and completion) is processed to confirm fulfilment of course
          requirements.
        </li>
      </ul>

      <h3>Methods for Obtaining Consent</h3>
      <p>
        A.R.T.S Training Services uses multiple methods to ensure that explicit
        consent is obtained from participants before any services are conducted.
        These methods are aligned with GDPR standards to ensure that all consent
        is fully informed, specific, and freely given. Methods for obtaining
        consent include, but are not limited to:
      </p>
      <ul>
        <li>
          <strong>Written Consent:</strong> Obtained through completing
          enrolment forms and consent for escalation to third-party
          professionals if necessary.
        </li>
        <li>
          <strong>Online Consent:</strong> For online training, consent is
          obtained when participants access and engage with training materials.
          By completing the training, participants consent to processing their
          data for progress tracking and results sharing.
        </li>
        <li>
          <strong>Verbal Consent:</strong> In specific cases, verbal consent may
          be documented, particularly during consultations or follow-up
          evaluations.
        </li>
      </ul>
      <p>
        A.R.T.S Training Services may also implement additional methods to
        obtain consent based on the nature of the service or the requirements of
        clients and auditors.
      </p>

      <h3>Right to Withdraw Consent</h3>
      <p>
        Participants can withdraw their consent at any time, either verbally or
        in writing, without any negative consequences. Withdrawing consent will
        not affect the lawfulness of data processing before withdrawal. Upon
        withdrawal of consent, all further processing of personal data will
        cease unless legally required. Employers and participants will be
        promptly informed of any impacts on completing services, such as
        training programs.
      </p>
      <p>
        To withdraw consent, participants must contact A.R.T.S Training Services
        directly.
      </p>

      <h3>Compliance with GDPR Standards</h3>
      <p>
        A.R.T.S Training Services is committed to maintaining the highest data
        protection standards as outlined by GDPR. All data processing
        activities, including obtaining consent, are designed to meet these
        standards and ensure full transparency for participants and auditors.
      </p>
      <p>
        Requests for data access, erasure, or rectification must be directed to
        A.R.T.S Training Services, who will act upon these requests in
        compliance with GDPR.
      </p>

      <h3>Audit and Monitoring</h3>
      <p>
        Participant data may be subject to periodic audits and performance
        reviews in compliance with quality assurance processes. Auditors may
        review data to ensure compliance with best practices and regulatory
        standards. All auditing activities strictly adhere to confidentiality
        and data protection protocols.
      </p>

      <h3>Your Rights and Responsibilities</h3>
      <p>Participants have the right to:</p>
      <ul>
        <li>Understand how their personal data is processed and used.</li>
        <li>Access, correct, or amend their data as needed.</li>
        <li>Withdraw consent without penalty.</li>
      </ul>
      <p>Employers have the responsibility to:</p>
      <ul>
        <li>
          Ensure participants are fully informed about A.R.T.S Training Services’
          role in the consent process.
        </li>
        <li>
          Support A.R.T.S Training Services in compliance with data protection
          standards.
        </li>
      </ul>

      <h3>Contact Us for More Information</h3>
      <p>
        For more detailed information on how consent is obtained, processed, and
        managed, or to understand your rights and responsibilities in full,
        please request a copy of our Consent Procedure by contacting us
        directly at:
      </p>
      <ul>
        <li>Phone: 0330 058 2044</li>
        <li>Email: support@artstraining.co.uk</li>
      </ul>
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

export default ConsentPage;