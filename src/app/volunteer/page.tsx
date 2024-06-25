import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EndScripts from "../components/EndScripts";

export default function Volunteer() {
  return <>
  <Navbar />
  {/*==================================================*/}
  {/* End charina Main Menu Area */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina breatcam section  */}
  {/*==================================================*/}
  <div className='breatcam-section d-flex align-items-center'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='breatcam-content text-center'>
            {/* breatcam menu */}
            <div className='breatcam-menu'>
              <ul>
                <li>
                  <a href='index.html'>Home</a>
                </li>
                <li>
                  <span>/</span>Become Volunteer{' '}
                </li>
              </ul>
            </div>
            {/* breadcumb title */}
            <div className='breatcam-title'>
              <h1>Become Volunteer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina breatcam section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina about section  */}
  {/*==================================================*/}
  <div className='about-section about-three'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
          {/* about thumb */}
          <div className='about-thumb2'>
            <img src='assets/images/resource/about3.png' alt="" />
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
              processes. Rapidiously provide access holistic results with user
              friendly.{' '}
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
              <i className='bi bi-check-circle-fill' /> Must be Maintain Every
              Rules &amp; Regulations{' '}
            </p>
            <p className='charina-icon'>
              {' '}
              <i className='bi bi-check-circle-fill' /> You should be a honest
              &amp; powerful{' '}
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
          <img src='assets/images/resource/most.png' alt="" />
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
            <img src='assets/images/resource/contact.png' alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* Start charina contact form Section */}
  {/*==================================================*/}
  <Footer />
  {/*==================================================*/}
  {/* Start scrollup section Section */}
  {/*==================================================*/}
  <div className='prgoress_indicator active-progress'>
    <svg
      className='progress-circle svg-content'
      width='100%'
      height='100%'
      viewBox='-1 -1 102 102'
    >
      <path
        d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98'
        style={{
          transition: 'stroke-dashoffset 10ms linear 0s',
          strokeDasharray: '307.919, 307.919',
          strokeDashoffset: '270.456',
        }}
      />
    </svg>
  </div>
  {/*==================================================*/}
  {/* Start scrollup section Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start Search Popup Area */}
  {/*==================================================*/}
  <div className='search-popup'>
    <button className='close-search style-two'>
      <span className='flaticon-multiply'>
        <i className='far fa-times-circle' />
      </span>
    </button>
    <button className='close-search'>
      <i className='fas fa-arrow-up' />
    </button>
    <form method='post' action='#'>
      <div className='form-group'>
        <input
          type='search'
          name='search-field'
          placeholder='Search Here'
          required
        />
        <button type='submit'>
          <i className='fa fa-search' />
        </button>
      </div>
    </form>
  </div>
  {/*==================================================*/}
  {/* Start Search Popup Area */}
  {/*==================================================*/}
  <EndScripts />
</>
}