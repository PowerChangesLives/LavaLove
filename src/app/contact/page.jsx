import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EndScripts from "../components/EndScripts";

export default function Contact() {
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
                  <span>/</span>Contact Us{' '}
                </li>
              </ul>
            </div>
            {/* breadcumb title */}
            <div className='breatcam-title'>
              <h1>Contact Us</h1>
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
  {/* Start charina Contac us Section */}
  {/*==================================================*/}
  <div className='contact-us-section'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 pb-60'>
          <div className='charina-section-title text-center'>
            <h4> Contact with Us </h4>
            <h1>
              {' '}
              Feel free to write us <span>Anytime</span>{' '}
            </h1>
            <h1 className='section-text'> Your Question </h1>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          {/* contact form box */}
          <div className='contact-form-box'>
            <form
              action='https://formspree.io/f/myyleorq'
              method='POST'
              id='dreamit-form'
            >
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='form-box'>
                    <input type='text' placeholder='Your Name' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='form-box'>
                    <input type='text' placeholder='E-Mail Address' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='form-box'>
                    <input type='text' placeholder='Your Name' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='form-box'>
                    <input type='text' placeholder='E-Mail Address' />
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='form-box'>
                    <textarea
                      name='massage'
                      id='massage'
                      cols={30}
                      rows={10}
                      placeholder='Write Comment'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='contact-form style-two text-center'>
                    <button type='submit'> Submit Comment </button>
                  </div>
                </div>
              </div>
            </form>
            <div id='status' />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina Contac us Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Contac Inf Section */}
  {/*==================================================*/}
  <div className='contact-info-section'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 pb-60'>
          <div className='charina-section-title white text-center'>
            <h4> How to Find Us </h4>
            <h1>
              {' '}
              Find Us on Google <span>Maps</span>{' '}
            </h1>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6'>
          <div className='contact-information'>
            <div className='contacts-icon'>
              <i className='bi bi-telephone' />
            </div>
            <div className='contacts-title'>
              <h5>Call Us Now</h5>
              <h6>+98 678 (960) 280</h6>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='contact-information'>
            <div className='contacts-icon upper'>
              <i className='bi bi-telephone' />
            </div>
            <div className='contacts-title'>
              <h5>Call Us Now</h5>
              <h6>example123@gmail.com</h6>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='contact-information'>
            <div className='contacts-icon upper2'>
              <i className='bi bi-telephone' />
            </div>
            <div className='contacts-title'>
              <h5>Call Us Now</h5>
              <h6>example123@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina Contac Inf Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Contac Inf Section */}
  {/*==================================================*/}
  <div className='map-section'>
    <div className='container'>
      <div className='row map-bg'>
        <div className='col-lg-12'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.6194043224186!2d89.61168491495718!3d25.650754283687256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd33c03fbe69cb%3A0x273671e159f8b39e!2sRDRS%20Ulipur!5e0!3m2!1sen!2sbd!4v1636872467628!5m2!1sen!2sbd'
            width={1140}
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
          />
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina Contac Inf Section */}
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
          defaultValue
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