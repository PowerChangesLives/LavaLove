import Breatcam from '../../components/Breatcam';

export default function Contact() {
  return (
    <>
      <Breatcam breadcrumbs={['Contact']}>Contact Us</Breatcam>
      {/*==================================================*/}
      {/* Start charina Contact Info Section */}
      {/*==================================================*/}
      <div className='contact-info-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 pb-60'>
              <div className='charina-section-title white text-center'>
                <h4>How to Find Us</h4>
                <h1>
                  Contact Us <span>Online</span>
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
                  <a className='text-white' href='tel:+19738665531'>
                    <h6>+1 973-866-5531</h6>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='contact-information'>
                <div className='contacts-icon upper'>
                  <i className='bi bi-envelope' />
                </div>
                <div className='contacts-title'>
                  <h5>Mail Us</h5>
                  <a className='text-white' href='mailto:info@lavalovenj.com'>
                    <h6>info@lavalovenj.com</h6>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='contact-information'>
                <div className='contacts-icon upper2'>
                  <i className='bi bi-globe-americas' />
                </div>
                <div className='contacts-title'>
                  <h5>Find Us</h5>
                  <h6>403 Welsh Place, Morris Plains, NJ 07950</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <p className='whiteImportant'>
            If you want to volunteer with us, please check out the{' '}
            <a href='/volunteer' className='darkLink'>
              volunteering
            </a>{' '}
            subpage. For donation information, check out our{' '}
            <a href='/donate' className='darkLink'>
              donating online
            </a>
            ,{' '}
            <a href='/donate' className='darkLink'>
              donating products
            </a>
            , and{' '}
            <a href='/donate' className='darkLink'>
              donating hygiene
            </a>{' '}
            pages.
          </p>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina Contact Info Section */}
      {/*==================================================*/}
    </>
  );
}
