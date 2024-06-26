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
  {/* Start charina Contac Inf Section */}
  {/*==================================================*/}
  <div className='contact-info-section'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 pb-60'>
          <div className='charina-section-title white text-center'>
            <h4> How to Find Us </h4>
            <h1>
              Contact us <span>Online</span>
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
              <h6>+1 973 (866) 5531</h6>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='contact-information'>
            <div className='contacts-icon upper'>
              <i className='bi bi-telephone' />
            </div>
            <div className='contacts-title'>
              <h5>Mail Us</h5>
              <h6>info@lavalovenj.com</h6>
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