import Breatcam from '../../components/Breatcam';

export default function Volunteer() {
  return (
    <>
      <Breatcam breadcrumbs={['Volunteer']}>Volunteering</Breatcam>
      {/*==================================================*/}
      {/* Start charina about section  */}
      {/*==================================================*/}
      <div className='about-section about-three'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              {/* about thumb */}
              <div className='about-thumb2'>
                <img src='assets/images/resource/about3.png' alt='' />
                {/* about counter */}
                <div className='about-couner'>
                  <div className='about-counter-thumb'>
                    <div className='about-counter-title'>
                      <h2 className='counter'>12</h2>
                      <h2>K+</h2>
                    </div>
                    <div className='counter-text2'>
                      <p>Volunteers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 pr-0'>
              <div className='charina-section-title'>
                <h4> Become a Volunteers </h4>
                <h1> Let’s Join our Community </h1>
                <h1 className='section-text'>
                  {' '}
                  Become a <span>Volunteers</span>{' '}
                </h1>
                <p>
                  {' '}
                  Monotonectally enable quality users via stand-alone strategic
                  theme areas. Quickly productize timely synergy with compelling
                  processes. Rapidiously provide access holistic results with
                  user friendly.{' '}
                </p>
              </div>
              {/* charina check list */}
              <div className='charina-check-list upper'>
                <p className='charina-icon'>
                  {' '}
                  <i className='bi bi-check-circle-fill' /> Completely architect
                  competitive information{' '}
                </p>
                <p className='charina-icon'>
                  {' '}
                  <i className='bi bi-check-circle-fill' /> Must be Maintain
                  Every Rules &amp; Regulations{' '}
                </p>
                <p className='charina-icon'>
                  {' '}
                  <i className='bi bi-check-circle-fill' /> You should be a
                  honest &amp; powerful{' '}
                </p>
              </div>
              {/* charina button */}
              <div className='about-right-button-box'>
                <div className='about-button2'>
                  <a href='#'>
                    {' '}
                    <i className='bi bi-telephone' />{' '}
                  </a>
                </div>
                <div className='about-button-title'>
                  <p>Call Anytime</p>
                  <h6>+98 678 (960) 280</h6>
                </div>
              </div>
            </div>
            {/* about shape */}
            <div className='about-shape2 dance'>
              <img src='assets/images/resource/most.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina about section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina Form Section */}
      {/*==================================================*/}
      <div className='form-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='charina-section-title white text-center'>
                <h4> Join Community </h4>
                <h1> Fill Up the Form and Join our </h1>
                <h1 className='section-text'>
                  {' '}
                  Biggest <span>Community</span>{' '}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start charina Form Section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina contact form Section */}
      {/*==================================================*/}
      <div className='contact-form-section'>
        <div className='container'>
          <div className='row contact-bg align-items-center'>
            <div className='col-lg-6 col-md-6 pr-25'>
              <div className='contact-form-box'>
                {/* sidebar title */}
                <div className='sidebar-title'>
                  <h1>Write Your Information</h1>
                </div>
                {/* form  */}
                <form
                  action='https://formspree.io/f/myyleorq'
                  method='POST'
                  id='dreamit-form'
                >
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='form_box mb-20'>
                        <input type='text' placeholder='Enter Your Name*' />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 pr-2'>
                      <div className='form_box mb-20'>
                        <input type='text' placeholder='Email Address' />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 pl-2'>
                      <div className='form_box mb-20'>
                        <input type='text' placeholder='Phone No' />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form_box mb-20'>
                        <input type='text' placeholder='Your Address' />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form_box mb-20'>
                        <select id='cars' name='carlist' form='carform'>
                          <option value='service'>Occupation</option>
                          <option value='volvo'>Student</option>
                          <option value='saab'>Goverment Sector</option>
                          <option value='opel'>Private Sector</option>
                          <option value='audi'>Bussiness</option>
                          <option value='audi'>Others</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form_box mb-20'>
                        <input type='date' id='myDate' placeholder='Phone No' />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='contact-form'>
                        <button type='submit'> Send Message </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id='status' />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 pl-25'>
              <div className='contact-form-thumb'>
                <img src='assets/images/resource/contact.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start charina contact form Section */}
      {/*==================================================*/}
    </>
  );
}
