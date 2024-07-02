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
                  What we <span>Do</span>{' '}
                </h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
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
            <div className='col-lg-3 col-md-6'>
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
            <div className='col-lg-3 col-md-6'>
              <div className='project-single-box'>
                {/* project thumb */}
                <div className='project-thumb'>
                  <img src='assets/images/resource/project3.png' alt='' />
                </div>
                {/* project title */}
                <div className='project-title'>
                  <h3>Emergency Aids</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
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
      {/* Start charina Donate Section */}
      {/*==================================================*/}
      <div className='donate-section style-two upper'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='charina-section-title pb-60'>
                <h4> Start Donating Theme </h4>
                <h1>
                  {' '}
                  Our Featured <span>Campaigns</span>{' '}
                </h1>
              </div>
            </div>
          </div>
          <div className='row align-items-center donate-bg'>
            <div className='owl-carousel donate-list2'>
              {/* donate campaigns items */}
              <div className='donate-campaigns-items'>
                {/* donate thumb */}
                <div className='donate-thumb2'>
                  <img src='assets/images/resource/donate.png' alt='' />
                </div>
                {/* donate items content */}
                <div className='donate-items-content'>
                  <div className='donate-section-title'>
                    <h6> Foods </h6>
                    <h2> Donate Money Orphan Funds </h2>
                    <h2 className='section-text'> Helping their Meals </h2>
                    <p>
                      {' '}
                      Phosfluorescently cultivate enabled relationships without
                      sticky empower next-generation e-commerce network{' '}
                    </p>
                  </div>
                  {/* progress ber */}
                  <div className='progress-ber-plugin'>
                    <div id='bar6' className='barfiller'>
                      <div className='tipWrap'>
                        <span className='tip' />
                      </div>
                      <span className='fill up1' data-percentage={50} />
                    </div>
                    <div className='progress-text'>
                      <p>
                        Achived : <span>$50,000</span>{' '}
                      </p>
                    </div>
                    <div className='progress-text-2'>
                      <p className='progress-text'>
                        {' '}
                        Goal : <span>$50,000</span>
                      </p>
                    </div>
                  </div>
                  {/* progress ber end */}
                  <div className='donate-date-text'>
                    <p>
                      {' '}
                      <i className='bi bi-clock-fill' /> 150 Days Remaining
                    </p>
                  </div>
                  {/* button */}
                  <div className='charina-button'>
                    <a href='donations.html'>
                      {' '}
                      Discover More <i className='bi bi-suit-heart' />{' '}
                    </a>
                  </div>
                </div>
              </div>
              {/* donate campaigns items */}
              <div className='donate-campaigns-items'>
                {/* donate thumb */}
                <div className='donate-thumb2'>
                  <img src='assets/images/resource/donate2.jpg' alt='' />
                </div>
                {/* donate items content */}
                <div className='donate-items-content'>
                  <div className='donate-section-title'>
                    <h6> Educations </h6>
                    <h2> Give a Good Education for </h2>
                    <h2 className='section-text'> Orphan Childreens </h2>
                    <p>
                      {' '}
                      Phosfluorescently cultivate enabled relationships without
                      sticky empower next-generation e-commerce network{' '}
                    </p>
                  </div>
                  {/* progress ber */}
                  <div className='progress-ber-plugin'>
                    <div id='bar7' className='barfiller'>
                      <div className='tipWrap'>
                        <span className='tip' />
                      </div>
                      <span className='fill up1' data-percentage={50} />
                    </div>
                    <div className='progress-text'>
                      <p>
                        Achived : <span>$50,000</span>{' '}
                      </p>
                    </div>
                    <div className='progress-text-2'>
                      <p className='progress-text'>
                        {' '}
                        Goal : <span>$50,000</span>
                      </p>
                    </div>
                  </div>
                  {/* progress ber end */}
                  <div className='donate-date-text'>
                    <p>
                      {' '}
                      <i className='bi bi-clock-fill' /> 150 Days Remaining
                    </p>
                  </div>
                  {/* button */}
                  <div className='charina-button'>
                    <a href='donations.html'>
                      {' '}
                      Discover More <i className='bi bi-suit-heart' />{' '}
                    </a>
                  </div>
                </div>
              </div>
              {/* donate campaigns items */}
              <div className='donate-campaigns-items'>
                {/* donate thumb */}
                <div className='donate-thumb2'>
                  <img src='assets/images/resource/donate3.jpg' alt='' />
                </div>
                {/* donate items content */}
                <div className='donate-items-content'>
                  <div className='donate-section-title'>
                    <h6> Medical </h6>
                    <h2> Campaign for Buy Medicine </h2>
                    <h2 className='section-text'> for Street Childreen’s </h2>
                    <p>
                      {' '}
                      Phosfluorescently cultivate enabled relationships without
                      sticky empower next-generation e-commerce network{' '}
                    </p>
                  </div>
                  {/* progress ber */}
                  <div className='progress-ber-plugin'>
                    <div id='bar5' className='barfiller'>
                      <div className='tipWrap'>
                        <span className='tip' />
                      </div>
                      <span className='fill up1' data-percentage={50} />
                    </div>
                    <div className='progress-text'>
                      <p>
                        Achived : <span>$50,000</span>{' '}
                      </p>
                    </div>
                    <div className='progress-text-2'>
                      <p className='progress-text'>
                        {' '}
                        Goal : <span>$50,000</span>
                      </p>
                    </div>
                  </div>
                  {/* progress ber end */}
                  <div className='donate-date-text'>
                    <p>
                      {' '}
                      <i className='bi bi-clock-fill' /> 150 Days Remaining
                    </p>
                  </div>
                  {/* button */}
                  <div className='charina-button'>
                    <a href='donations.html'>
                      {' '}
                      Discover More <i className='bi bi-suit-heart' />{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina Donate Section */}
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
                <h1>Join Now Our Volunteers &amp;</h1>
                <h1 className='section-text'>
                  {' '}
                  Help the <span>Childrens</span>{' '}
                </h1>
              </div>
            </div>
            <div className='col-lg-5 col-md-6'>
              {/* button */}
              <div className='charina-button text-right'>
                <a href='volunteer.html'>
                  {' '}
                  Become Volunteer <i className='bi bi-chevron-double-right' />{' '}
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
      {/*==================================================*/}
      {/* Start charina mission Section */}
      {/*==================================================*/}
      <div className='mission-sectoin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='charina-section-title white pb-60 text-center'>
                <h4> Upcoming Events </h4>
                <h1> Our Mission Vission and </h1>
                <h1>
                  {' '}
                  Targated <span>Goals</span>{' '}
                </h1>
              </div>
            </div>
            {/* mission shape */}
            <div className='mission-shape dance'>
              <img src='assets/images/resource/heart.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina mission section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina mission Section */}
      {/*==================================================*/}
      <div className='vission-sectoin'>
        <div className='container'>
          <div className='row vission-bg'>
            <div className='col-lg-12'>
              {/* / tab */}
              <div className='tab'>
                {/* / tabs */}
                <ul className='tabs'>
                  <li>
                    <a href='#'> Our Mission </a>
                  </li>
                  <li>
                    <a href='#'> How we Work </a>
                  </li>
                  <li>
                    <a href='#'> Our Vission </a>
                  </li>
                  <li>
                    <a href='#'> Goal Achive</a>
                  </li>
                </ul>
                {/* tab content */}
                <div className='tab_content'>
                  {/* tabs_item */}
                  <div className='tabs_item'>
                    <div className='charina-single-mission-items'>
                      {/* mission thumb */}
                      <div className='charina-mission-thumb'>
                        <img src='assets/images/resource/tab1.jpg' alt='' />
                      </div>
                      {/* mission content */}
                      <div className='charina-mission-content'>
                        {/* mission title */}
                        <div className='mission-title'>
                          <h3> Happily People is our Achive </h3>
                        </div>
                        {/* mission items desc */}
                        <div className='mission-items-desc'>
                          <p>
                            Completely create leveraged best practices and B2B
                            interfaces productivate cutting-edge solutions with
                            go forward supply in a Compellingly supply 24/7
                            relationships{' '}
                          </p>
                        </div>
                        {/* mission service list  */}
                        <div className='mission-list'>
                          <ul>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Join Our
                              Charity Team and Helps the{' '}
                            </li>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Donate
                              Money for Poor Childreens help{' '}
                            </li>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Help for
                              Orphan Kids Healthy foods{' '}
                            </li>
                          </ul>
                        </div>
                        {/* mission button */}
                        <div className='mission-button'>
                          <a href='events.html'>
                            {' '}
                            Doscover More{' '}
                            <i className='bi bi-chevron-double-right' />{' '}
                          </a>
                        </div>
                      </div>
                      {/* / mission content */}
                    </div>
                  </div>
                  {/* tabs_item */}
                  <div className='tabs_item'>
                    <div className='charina-single-mission-items'>
                      {/* mission thumb */}
                      <div className='charina-mission-thumb'>
                        <img src='assets/images/resource/tab2.jpg' alt='' />
                      </div>
                      {/* mission content */}
                      <div className='charina-mission-content'>
                        {/* mission title */}
                        <div className='mission-title'>
                          <h3> Street Childreen Education </h3>
                        </div>
                        {/* mission items desc */}
                        <div className='mission-items-desc'>
                          <p>
                            Completely create leveraged best practices and B2B
                            interfaces productivate cutting-edge solutions with
                            go forward supply in a Compellingly supply 24/7
                            relationships{' '}
                          </p>
                        </div>
                        {/* mission service list  */}
                        <div className='mission-list'>
                          <ul>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Join Our
                              Charity Team and Helps the{' '}
                            </li>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Donate
                              Money for Poor Childreens help{' '}
                            </li>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Help for
                              Orphan Kids Healthy foods{' '}
                            </li>
                          </ul>
                        </div>
                        {/* mission button */}
                        <div className='mission-button'>
                          <a href='#'>
                            {' '}
                            Doscover More{' '}
                            <i className='bi bi-chevron-double-right' />{' '}
                          </a>
                        </div>
                      </div>
                      {/* / mission content */}
                    </div>
                  </div>
                  {/* / tabs_item */}
                  <div className='tabs_item'>
                    <div className='charina-single-mission-items'>
                      {/* mission thumb */}
                      <div className='charina-mission-thumb'>
                        <img src='assets/images/resource/tab3.jpg' alt='' />
                      </div>
                      {/* mission content */}
                      <div className='charina-mission-content'>
                        {/* mission title */}
                        <div className='mission-title'>
                          <h3> Donationg Process System </h3>
                        </div>
                        {/* mission items desc */}
                        <div className='mission-items-desc'>
                          <p>
                            Completely create leveraged best practices and B2B
                            interfaces productivate cutting-edge solutions with
                            go forward supply in a Compellingly supply 24/7
                            relationships{' '}
                          </p>
                        </div>
                        {/* mission service list  */}
                        <div className='mission-list'>
                          <ul>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Join Our
                              Charity Team and Helps the{' '}
                            </li>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Donate
                              Money for Poor Childreens help{' '}
                            </li>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Help for
                              Orphan Kids Healthy foods{' '}
                            </li>
                          </ul>
                        </div>
                        {/* mission button */}
                        <div className='mission-button'>
                          <a href='#'>
                            {' '}
                            Doscover More{' '}
                            <i className='bi bi-chevron-double-right' />{' '}
                          </a>
                        </div>
                      </div>
                      {/* / mission content */}
                    </div>
                  </div>
                  {/* tabs_item */}
                  <div className='tabs_item'>
                    <div className='charina-single-mission-items'>
                      {/* mission thumb */}
                      <div className='charina-mission-thumb'>
                        <img src='assets/images/resource/tab4.jpg' alt='' />
                      </div>
                      {/* mission content */}
                      <div className='charina-mission-content'>
                        {/* mission title */}
                        <div className='mission-title'>
                          <h3> Finished Poverty Our Mission </h3>
                        </div>
                        {/* mission items desc */}
                        <div className='mission-items-desc'>
                          <p>
                            Completely create leveraged best practices and B2B
                            interfaces productivate cutting-edge solutions with
                            go forward supply in a Compellingly supply 24/7
                            relationships{' '}
                          </p>
                        </div>
                        {/* mission service list  */}
                        <div className='mission-list'>
                          <ul>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Join Our
                              Charity Team and Helps the{' '}
                            </li>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Donate
                              Money for Poor Childreens help{' '}
                            </li>
                            <li>
                              {' '}
                              <i className='bi bi-check-circle-fill' /> Help for
                              Orphan Kids Healthy foods{' '}
                            </li>
                          </ul>
                        </div>
                        {/* mission button */}
                        <div className='mission-button'>
                          <a href='#'>
                            {' '}
                            Doscover More{' '}
                            <i className='bi bi-chevron-double-right' />{' '}
                          </a>
                        </div>
                      </div>
                      {/* / mission content */}
                    </div>
                  </div>
                </div>{' '}
                {/* / tab_content */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina mission section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina Blog Section */}
      {/*==================================================*/}
      <div className='blog-section style-two'>
        <div className='container'>
          <div className='row blog-bg'>
            <div className='col-lg-12'>
              <div className='charina-section-title pb-50 text-center'>
                <h4> Read Latest Articles </h4>
                <h1>Directly from the Latest</h1>
                <h1 className='section-text'>
                  {' '}
                  News &amp; <span>Articles</span>{' '}
                </h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='charina-single-blog-box'>
                {/* blog thumb */}
                <div className='charina-blog-thumb'>
                  <img src='assets/images/resource/blog1.jpg' alt='' />
                  {/* meta blog */}
                  <div className='meta-blog'>
                    <span>16 Jun, 2023</span>
                  </div>
                </div>
                {/* blog content */}
                <div className='charina-blog-content'>
                  {/* post categories */}
                  <div className='post-categories'>
                    <p>
                      <i className='bi bi-person-fill' /> John Alex{' '}
                      <span className='post'>
                        {' '}
                        <i className='bi bi-chat-dots-fill' /> 2 Comments{' '}
                      </span>{' '}
                    </p>
                  </div>
                  {/* blog title */}
                  <div className='blog-title'>
                    <h2>
                      <a href='blog-details.html'>
                        {' '}
                        Help for Kids Education Donate Money{' '}
                      </a>
                    </h2>
                  </div>
                  <div className='blog-button'>
                    <a href='blog-details.html'>
                      {' '}
                      Read More <i className='bi bi-arrow-right' />{' '}
                    </a>
                  </div>
                  <div className='share-icon'>
                    <a href='blog-details.html'>
                      <i className='bi bi-share-fill' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='charina-single-blog-box upper'>
                {/* blog thumb */}
                <div className='charina-blog-thumb'>
                  <img src='assets/images/resource/blog2.jpg' alt='' />
                  {/* meta blog */}
                  <div className='meta-blog'>
                    <span>16 Jun, 2023</span>
                  </div>
                </div>
                {/* blog content */}
                <div className='charina-blog-content'>
                  {/* post categories */}
                  <div className='post-categories'>
                    <p>
                      <i className='bi bi-person-fill' /> John Alex{' '}
                      <span className='post'>
                        {' '}
                        <i className='bi bi-chat-dots-fill' /> 2 Comments{' '}
                      </span>{' '}
                    </p>
                  </div>
                  {/* blog title */}
                  <div className='blog-title'>
                    <h2>
                      <a href='blog-details.html'>
                        {' '}
                        Organic Food Reserved for Childreens{' '}
                      </a>
                    </h2>
                  </div>
                  <div className='blog-button'>
                    <a href='blog-details.html'>
                      {' '}
                      Read More <i className='bi bi-arrow-right' />{' '}
                    </a>
                  </div>
                  <div className='share-icon'>
                    <a href='blog-details.html'>
                      <i className='bi bi-share-fill' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='charina-single-blog-box upper2'>
                {/* blog thumb */}
                <div className='charina-blog-thumb'>
                  <img src='assets/images/resource/blog3.jpg' alt='' />
                  {/* meta blog */}
                  <div className='meta-blog'>
                    <span>16 Jun, 2023</span>
                  </div>
                </div>
                {/* blog content */}
                <div className='charina-blog-content'>
                  {/* post categories */}
                  <div className='post-categories'>
                    <p>
                      <i className='bi bi-person-fill' /> John Alex{' '}
                      <span className='post'>
                        {' '}
                        <i className='bi bi-chat-dots-fill' /> 2 Comments{' '}
                      </span>{' '}
                    </p>
                  </div>
                  {/* blog title */}
                  <div className='blog-title'>
                    <h2>
                      <a href='blog-details.html'>
                        {' '}
                        How to Make good Health childreen Campaign{' '}
                      </a>
                    </h2>
                  </div>
                  <div className='blog-button'>
                    <a href='blog-details.html'>
                      {' '}
                      Read More <i className='bi bi-arrow-right' />{' '}
                    </a>
                  </div>
                  <div className='share-icon'>
                    <a href='blog-details.html'>
                      <i className='bi bi-share-fill' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start charina Blog Section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start charina galary Section */}
      {/*==================================================*/}
      <div className='galary-section style-two'>
        <div className='container-fluid'>
          <div className='row galary-bg'>
            <div className='col-lg-12'>
              <div className='galary-title text-center'>
                <h2> Our Galary </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='galary-list2 owl-carousel'>
              <div className='col-lg-12'>
                <div className='galary-single-box'>
                  {/* galary thumb */}
                  <div className='galary-thumb'>
                    <img src='assets/images/resource/galary1.jpg' alt='' />
                    {/* galary text */}
                    <div className='galary-text'>
                      <a href='gallery-details.html'>Education for Childreen</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='galary-single-box'>
                  {/* galary thumb */}
                  <div className='galary-thumb'>
                    <img src='assets/images/resource/galary2.jpg' alt='' />
                    {/* galary text */}
                    <div className='galary-text'>
                      <a href='gallery-details.html'>Organic Foods for Kids</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='galary-single-box'>
                  {/* galary thumb */}
                  <div className='galary-thumb'>
                    <img src='assets/images/resource/galary3.jpg' alt='' />
                    {/* galary text */}
                    <div className='galary-text'>
                      <a href='gallery-details.html'>Donate Homeless Kids</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='galary-single-box'>
                  {/* galary thumb */}
                  <div className='galary-thumb'>
                    <img src='assets/images/resource/galary4.jpg' alt='' />
                    {/* galary text */}
                    <div className='galary-text'>
                      <a href='gallery-details.html'>Food for Orphan People</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='galary-single-box'>
                  {/* galary thumb */}
                  <div className='galary-thumb'>
                    <img src='assets/images/resource/galary5.jpg' alt='' />
                    {/* galary text */}
                    <div className='galary-text'>
                      <a href='gallery-details.html'>Donate for Happiness</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='galary-single-box'>
                  {/* galary thumb */}
                  <div className='galary-thumb'>
                    <img src='assets/images/resource/galary6.jpg' alt='' />
                    {/* galary text */}
                    <div className='galary-text'>
                      <a href='gallery-details.html'>Education for Childreen</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina galary Section */}
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
