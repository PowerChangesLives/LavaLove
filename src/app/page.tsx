'use client';

import EndScripts from './components/EndScripts';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      {/*==================================================*/}
      {/* Start charina hero section */}
      {/*==================================================*/}
      <div className='hero_list owl-carousel responsive'>
        <div className='hero-section hero4 d-flex align-items-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                {/* hero content */}
                <div className='hero-content text-center'>
                  {/* hero icon */}
                  <div className='hero-icon dance'>
                    <img src='assets/images/resource/heart2.png' alt='' />
                  </div>
                  {/* hero sub title */}
                  <div className='hero-sub-title'>
                    <h5>Helping Today, Helping Tomorrow</h5>
                  </div>
                  {/* hero title */}
                  <div className='hero-title'>
                    <h1> Giving a Helping</h1>
                    <h1>
                      {' '}
                      Hand for the <span>Homeless</span>{' '}
                    </h1>
                  </div>
                  {/* hero button */}
                  <div className='hero-button'>
                    <a href='/about'>
                      Learn More
                      <i className='bi bi-chevron-double-right' />
                    </a>
                  </div>
                  <div className='hero-button'>
                    <a href='/volunteer'>
                      Volunteer
                      <i className='bi bi-chevron-double-right' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*End charina hero section  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina feature Section */}
      {/*==================================================*/}
      <div className='feature-section'>
        <div className='container'>
          <div className='row feature-bg'>
            <div className='col-lg-4 col-md-6'>
              <div className='feature-single-box'>
                {/* feature thumb */}
                <div className='feature-thumb'>
                  <img src='assets/images/resource/feature1.png' alt='' />
                </div>
                {/* feature title */}
                <div className='feature-content'>
                  {/* feature title */}
                  <div className='feature-title'>
                    <h3>Send Donations</h3>
                  </div>
                  {/* feature desc */}
                  <div className='feature-description'>
                    <p>
                      We need resources and energy to keep LavaLove going.
                      The best way to help is through your generous donations.
                    </p>
                  </div>
                </div>
                <div className='feature-button'>
                  <a href='service.html'>
                    {' '}
                    Donate Now <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='feature-single-box upper'>
                {/* feature thumb */}
                <div className='feature-thumb'>
                  <img src='assets/images/resource/feature2.png' alt='' />
                </div>
                {/* feature title */}
                <div className='feature-content'>
                  {/* feature title */}
                  <div className='feature-title'>
                    <h3>Become A Volunteer</h3>
                  </div>
                  {/* feature desc */}
                  <div className='feature-description'>
                    <p>
                      Personnel on the truck aid in providing amenities and showers for all.
                      Your contribution can change a life.
                    </p>
                  </div>
                </div>
                <div className='feature-button'>
                  <a href='service.html'>
                    {' '}
                    Volunteer <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='feature-single-box upper2'>
                {/* feature thumb */}
                <div className='feature-thumb'>
                  <img src='assets/images/resource/feature3.png' alt='' />
                </div>
                {/* feature title */}
                <div className='feature-content'>
                  {/* feature title */}
                  <div className='feature-title'>
                    <h3>Latest Events</h3>
                  </div>
                  {/* feature desc */}
                  <div className='feature-description'>
                    <p>
                      Want to support us in different ways?<br />
                      Come see our events and help bolster <br />
                      the community around LavaLove.
                    </p>
                  </div>
                </div>
                <div className='feature-button'>
                  <a href='service.html'>
                    See Events <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              {/* about thumb */}
              <div className='about-thumb2'>
                <img src='assets/images/resource/about2.jpg' alt='' className="base-home-image" />
                {/* about counter */}
                <div className='about-couner'>
                  <div className='about-counter-thumb'>
                    <div className='about-counter-title'>
                      <h2 className='counter'>93</h2>
                      <h2>K+</h2>
                    </div>
                    <div className='counter-text2'>
                      <p>Water Insecure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pl-4 pr-0'>
              <div className='charina-section-title'>
                <h4>Join Us and Start Donating</h4>
                <h1>Make it your goal to support the <span>Homeless</span>.</h1>
                <p>
                LavaLove® is a 29 foot custom-designed trailer,
                which provides a multi-unit shower, sink, toilet, washing machine,
                dryer, barber station and resource room for ancillary services 
                for our most vulnerable in the community.
                </p>
              </div>
              {/* about items */}
              <div className='charina-about-items'>
                {/* about icon */}
                <div className='items-icon'>
                  <img src='assets/images/resource/item2.png' alt='' />
                </div>
                {/* item content */}
                <div className='about-item-content'>
                  <h3>Quick Fundraising</h3>
                  <p>
                    Distinctively empower next-generation charity and
                    idea-sharing and extensible
                  </p>
                </div>
                {/* about icon */}
                <div className='items-icon'>
                  <img src='assets/images/resource/item1.png' alt='' />
                </div>
                {/* item content */}
                <div className='about-item-content'>
                  <h3>Join Our Team</h3>
                  <p>
                    Distinctively empower next-generation charity and
                    idea-sharing and extensible
                  </p>
                </div>
              </div>
              <div className='charina-button upp'>
                <a href='about.html'>
                  {' '}
                  Discover More <i className='bi bi-chevron-double-right' />{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*End charina slider section  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina project section  */}
      {/*==================================================*/}
      <div className='project-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='charina-section-title white pb-70 text-center'>
                <h4>LavaLove{"'"}s Mission</h4>
                <h1>
                  {' '}
                  What We <span>Do</span>
                </h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='project-single-box'>
                {/* project thumb */}
                <div className='project-thumb'>
                  <img src='assets/images/resource/project1.png' alt='' />
                </div>
                {/* project title */}
                <div className='project-title'>
                  <h3>Ancillary Services</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='project-single-box'>
                {/* project thumb */}
                <div className='project-thumb'>
                  <img src='assets/images/resource/project2.png' alt='' />
                </div>
                {/* project title */}
                <div className='project-title'>
                  <h3>Project F.E.E.D</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='project-single-box'>
                {/* project thumb */}
                <div className='project-thumb'>
                  <img src='assets/images/resource/project4.png' alt='' />
                </div>
                {/* project title */}
                <div className='project-title'>
                  <h3>Restoring Dignity</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina project Secton */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina call to action */}
      {/*==================================================*/}
      <div className='call-to-action style-two'>
        <div className='container'>
          <div className='row call-bg align-items-center'>
            <div className='col-lg-7 col-md-6'>
              <div className='charina-section-title white'>
                <h4> Join Our Volunteers </h4>
                <h1>Join Our Volunteers Now &amp;</h1>
                <h1 className='section-text'>
                  {' '}
                  Help the <span>Homeless</span>{' '}
                </h1>
              </div>
            </div>
            <div className='col-lg-5 col-md-6'>
              {/* button */}
              <div className='charina-button text-right'>
                <a href='volunteer.html'>
                  {' '}
                  Become Vulonteer <i className='bi bi-chevron-double-right' />{' '}
                </a>
              </div>
            </div>
            {/* call shape */}
            <div className='call-to-shape dance'>
              <img src='assets/images/resource/heart.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina call to action */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina Subscribe Section */}
      {/*==================================================*/}
      <div className='counter-section style-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='row pr-2'>
                <div className='col-lg-6 col-md-6'>
                  <div className='counter-single-box up'>
                    {/* counter thumb */}
                    <div className='counter-icon'>
                      <img src='assets/images/resource/count1.png' alt='' />
                    </div>
                    {/* counter title */}
                    <div className='counter-title2'>
                      <h1 className='counter'>12</h1>
                      <h1 className='counter-title2'>M</h1>
                    </div>
                    {/* counter text */}
                    <div className='counter-text'>
                      <p>Total Donations</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='counter-single-box upper'>
                    {/* counter thumb */}
                    <div className='counter-icon'>
                      <img src='assets/images/resource/count2.png' alt='' />
                    </div>
                    {/* counter title */}
                    <div className='counter-title2'>
                      <h1 className='counter'>12</h1>
                      <h1 className='counter-title2'>M</h1>
                    </div>
                    {/* counter text */}
                    <div className='counter-text'>
                      <p>Total Donations</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='counter-single-box upper2'>
                    {/* counter thumb */}
                    <div className='counter-icon'>
                      <img src='assets/images/resource/count3.png' alt='' />
                    </div>
                    {/* counter title */}
                    <div className='counter-title2'>
                      <h1 className='counter'>12</h1>
                      <h1 className='counter-title2'>M</h1>
                    </div>
                    {/* counter text */}
                    <div className='counter-text'>
                      <p>Total Donations</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='counter-single-box upper3'>
                    {/* counter thumb */}
                    <div className='counter-icon'>
                      <img src='assets/images/resource/count4.png' alt='' />
                    </div>
                    {/* counter title */}
                    <div className='counter-title2'>
                      <h1 className='counter'>12</h1>
                      <h1 className='counter-title2'>M</h1>
                    </div>
                    {/* counter text */}
                    <div className='counter-text'>
                      <p>Total Donations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 pl-5'>
              <div className='charina-section-title'>
                <h4> Suport Us Help Them </h4>
                <h1> Join your Hands with Us </h1>
                <h1 className='section-text'>
                  {' '}
                  For Support <span>Them’s</span>{' '}
                </h1>
                <p>
                  {' '}
                  Completely create leveraged best practices and B2B interfaces
                  events productivate cutting-edge solutions with go forward
                  supply chains has Compellingly supply 24/7 relationships and
                  effective human capital tha Appropriately target market
                  positioning
                </p>
              </div>
              {/* button */}
              <div className='charina-button'>
                <a href='contact.html'>
                  {' '}
                  Discover More <i className='bi bi-chevron-double-right' />{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start charina Subscribe Section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina events section */}
      {/*==================================================*/}
      <div className='events-section style-two'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-2' />
            <div className='col-lg-10'>
              <div className='charina-section-title pb-60'>
                <h4> Upcoming Events </h4>
                <h1>
                  {' '}
                  Join Our Latest <span>Events</span>{' '}
                </h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='event-list owl-carousel'>
              <div className='col-lg-12'>
                <div className='events-single-box'>
                  {/* events content */}
                  <div className='events-content'>
                    {/* event title */}
                    <div className='event-title'>
                      <h4>
                        {' '}
                        <span>27</span> February
                      </h4>
                      <h3>
                        <a href='event-details.html'>
                          Learn Exactly how we Arrange a Event
                        </a>
                      </h3>
                    </div>
                    {/* event text */}
                    <div className='event-text'>
                      <p>
                        {' '}
                        <i className='bi bi-clock' /> 8.30 am{' '}
                        <span>
                          {' '}
                          <i className='bi bi-geo-alt-fill' /> Sandigo,
                          California - USA
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='events-single-box upper'>
                  {/* events content */}
                  <div className='events-content'>
                    {/* event title */}
                    <div className='event-title'>
                      <h4>
                        {' '}
                        <span>08</span> January
                      </h4>
                      <h3>
                        <a href='event-details.html'>
                          100+ Orphan Childreens Bootcampaigns
                        </a>
                      </h3>
                    </div>
                    {/* event text */}
                    <div className='event-text'>
                      <p>
                        {' '}
                        <i className='bi bi-clock' /> 8.30 am{' '}
                        <span>
                          {' '}
                          <i className='bi bi-geo-alt-fill' /> Sandigo,
                          California - USA
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='events-single-box upper2'>
                  {/* events content */}
                  <div className='events-content'>
                    {/* event title */}
                    <div className='event-title'>
                      <h4>
                        {' '}
                        <span>27</span> February
                      </h4>
                      <h3>
                        <a href='event-details.html'>
                          Learn Exactly how we Arrange a Event
                        </a>
                      </h3>
                    </div>
                    {/* event text */}
                    <div className='event-text'>
                      <p>
                        {' '}
                        <i className='bi bi-clock' /> 8.30 am{' '}
                        <span>
                          {' '}
                          <i className='bi bi-geo-alt-fill' /> Sandigo,
                          California - USA
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='events-single-box upper'>
                  {/* events content */}
                  <div className='events-content'>
                    {/* event title */}
                    <div className='event-title'>
                      <h4>
                        {' '}
                        <span>08</span> January
                      </h4>
                      <h3>
                        <a href='event-details.html'>
                          100+ Orphan Childreens Bootcampaigns
                        </a>
                      </h3>
                    </div>
                    {/* event text */}
                    <div className='event-text'>
                      <p>
                        {' '}
                        <i className='bi bi-clock' /> 8.30 am{' '}
                        <span>
                          {' '}
                          <i className='bi bi-geo-alt-fill' /> Sandigo,
                          California - USA
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina events section */}
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
              defaultValue=''
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
  );
}
