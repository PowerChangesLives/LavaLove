export default function Navbar() {
  return (
    <>
      {/*==================================================*/}
      {/* Start charina Main Menu Area */}
      {/*==================================================*/}
      <div
        id='sticky-header'
        className='charina_nav_manu style-three align-items-center'
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-2'>
              <div className='logo'>
                <a className='logo_img' href='/' title='LavaLove'>
                  <img src='assets/images/logo.png' alt='' />
                </a>
                <a className='main_sticky' href='/' title='LavaLove'>
                  <img src='assets/images/logo.png' alt='astute' />
                </a>
              </div>
            </div>
            <div className='col-lg-8'>
              <nav className='charina_menu'>
                <ul className='nav_scroll'>
                  <li>
                    <a href='/'>
                      Home{' '}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Pages{' '}
                      <span>
                        <i className='bi bi-chevron-down' />
                      </span>
                    </a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='about.html'>About</a>
                      </li>
                      <li>
                        <a href='volunteer.html'>Volunteer</a>
                      </li>
                      <li>
                        <a href='volunteer-2.html'>Volunteer Two</a>
                      </li>
                      <li>
                        <a href='gallery.html'>Gallery </a>
                      </li>
                      <li>
                        <a href='gallery-details.html'>Gallery Details</a>
                      </li>
                      <li>
                        <a href='/contact'>Contact Us</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      Donations{' '}
                      <span>
                        <i className='bi bi-chevron-down' />
                      </span>
                    </a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='donate.html'>Donate</a>
                      </li>
                      <li>
                        <a href='donations.html'>Donations</a>
                      </li>
                      <li>
                        <a href='donations-details.html'>Donations Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      Events{' '}
                      <span>
                        <i className='bi bi-chevron-down' />
                      </span>
                    </a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='/events'>Events</a>
                      </li>
                      <li>
                        <a href='event-details.html'>Event Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='/contact'>Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='col-lg-2 pl-0'>
              <div className='header-button'>
                <a href='donate.html'>
                  {' '}
                  Donate Now <i className='bi bi-suit-heart' />{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* charina Mobile Menu Area */}
      <div className='mobile-menu-area d-sm-block d-md-block d-lg-none sticky'>
        <div className='mobile-menu'>
          <nav className='charina_menu'>
            <ul className='nav_scroll'>
              <li>
                <a href='/'>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>
                  Pages{' '}
                  <span>
                    <i className='bi bi-chevron-down' />
                  </span>
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a href='about.html'>About</a>
                  </li>
                  <li>
                    <a href='volunteer.html'>Volunteer</a>
                  </li>
                  <li>
                    <a href='volunteer-2.html'>Volunteer Two</a>
                  </li>
                  <li>
                    <a href='gallery.html'>Gallery </a>
                  </li>
                  <li>
                    <a href='gallery-details.html'>Gallery Details</a>
                  </li>
                  <li>
                    <a href='/contact'>Contact Us</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  Donations{' '}
                  <span>
                    <i className='bi bi-chevron-down' />
                  </span>
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a href='donate.html'>Donate</a>
                  </li>
                  <li>
                    <a href='donations.html'>Donations</a>
                  </li>
                  <li>
                    <a href='donations-details.html'>Donations Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  Events{' '}
                  <span>
                    <i className='bi bi-chevron-down' />
                  </span>
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a href='/events'>Events</a>
                  </li>
                  <li>
                    <a href='event-details.html'>Event Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  Blog{' '}
                  <span>
                    <i className='bi bi-chevron-down' />
                  </span>
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a href='blog-grid.html'>Blog Grid</a>
                  </li>
                  <li>
                    <a href='blog.html'>Blog List</a>
                  </li>
                  <li>
                    <a href='blog-details.html'>Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina Main Menu Area */}
      {/*==================================================*/}
    </>
  );
}
