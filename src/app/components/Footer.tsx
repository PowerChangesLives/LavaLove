export default function Footer() {
  return (
    <>
      {/*==================================================*/}
      {/* Start Footer Section */}
      {/*==================================================*/}
      <div className='footer-section'>
        <div className='container'>
          <div className='row footer-bg'>
            <div className='col-lg-4 col-md-6'>
              <div className='widgets-company-info'>
                <div className='charina-logo'>
                  <a className='logo_img' href='index.html' title='techno'>
                    <img src='assets/images/logo.png' alt='' />
                  </a>
                </div>
                <div className='company-info-desc'>
                  <p>
                    Restoring the dignity of the homeless across New Jersey
                    towards building a better life and a stronger community.
                  </p>
                </div>
                <div className='footer-button'>
                  <a href='about.html'>
                    Donate Now <i className='bi bi-suit-heart' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6'>
              <div className='widget-nav-menu'>
                {/* widget title */}
                <h4 className='widget-title'>Quick Links</h4>
                <div className='menu-quick-link-content'>
                  <ul className='footer-widget-list'>
                    <li>
                      <a href='/about'>
                        {' '}
                        <i className='bi bi-chevron-double-right' /> About{' '}
                      </a>
                    </li>
                    <li>
                      <a href='/contact'>
                        {' '}
                        <i className='bi bi-chevron-double-right' /> Contact{' '}
                      </a>
                    </li>
                    <li>
                      <a href='/events'>
                        {' '}
                        <i className='bi bi-chevron-double-right' /> Events{' '}
                      </a>
                    </li>
                    <li>
                      <a href='donations.html'>
                        {' '}
                        <i className='bi bi-chevron-double-right' /> Donations{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 pl-20'>
              <div className='widget-contact-info'>
                {/* widget title */}
                <h4 className='widget-title'> Contact Info </h4>
                {/* widget content */}
                <div className='footer-widget-content'>
                  {/* wedget title */}
                  <div className='footer-wedget-title'>
                    <h5>Phone Number</h5>
                  </div>
                  {/* footer info desc */}
                  <div className='footer-info-desc'>
                    {/* TODO: link to tel: and mailto: */}
                    <p>
                      <a className='text-white' href='tel:+19738665531'>
                        +1 973-866-5531
                      </a>
                    </p>
                  </div>
                  <div className='footer-wedget-title'>
                    <h5>E-mail</h5>
                  </div>
                  {/* footer info desc */}
                  <div className='footer-info-desc'>
                    {/* TODO: link to tel: and mailto: */}
                    <p>
                      <a
                        className='text-white'
                        href='mailto:info@lavalovenj.com'
                      >
                        info@lavalovenj.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <div className='footer-bottom-content-copy'>
                <p>
                  Copyright © {new Date().getFullYear()} Power Changes Lives;
                  All Rights Reserved.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='footer-bottom-menu text-right'>
                <ul>
                  <li>
                    <a href='about.html'>About</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='service.html'>Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina Footer Section */}
      {/*==================================================*/}
    </>
  );
}
