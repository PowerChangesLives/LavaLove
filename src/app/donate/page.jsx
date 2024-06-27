import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import EndScripts from '../components/EndScripts';

export default function Donate() {
  return (
    <>
      <Navbar />
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
                      <span>/</span> Donations{' '}
                    </li>
                    <li>
                      <span>/</span> Donations Details
                    </li>
                  </ul>
                </div>
                {/* breadcumb title */}
                <div className='breatcam-title'>
                  <h1> Give Education for Orphan Children </h1>
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
      {/* Start charina donate section  */}
      {/*==================================================*/}
      <div className='donation-details-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-6'>
              <div className='donations-single-box'>
                {/* donations thumb */}
                <div className='donations-thumb'>
                  <img src='assets/images/resource/donations.png' alt />
                </div>
                <div className='row'>
                  <div className='col-lg-8 col-md-6 pr-30'>
                    {/* progress ber */}
                    <div className='progress-ber-plugin style-two'>
                      <div id='bar4' className='barfiller'>
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
                    </div>{' '}
                    {/* progress ber end */}
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    {/* button */}
                    <div className='charina-button responsive text-right'>
                      <a href='donate.html'>
                        {' '}
                        Donate Now <i className='bi bi-suit-heart' />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* donations title */}
              <div className='donations-detials-title pt-30'>
                <h2>
                  <a href='donate.html'>
                    Give a good education orphan children
                  </a>
                </h2>
              </div>
              {/* donation description */}
              <div className='donation-description'>
                <p>
                  Assertively harness ethical networks and business networks.
                  Monotonectally integrate highly effic initiatives vis-a-vis
                  strategic markets. Proactively matrix enterprise
                  functionalities rather extensive benefits. Energistically
                  pontificate cutting-edge paradigms with 2.0 e-tailers.
                  Uniquely syndicate installed base web services whereas enabled
                </p>
              </div>
              {/* donations title */}
              <div className='donations-detials-title pt-3'>
                <h2>
                  <a href='donate.html'>Donation’s Summary</a>
                </h2>
              </div>
              {/* donation description */}
              <div className='donation-description'>
                <p>
                  Credibly deliver empowered leadership skills with go forward
                  materials. Synergistically parallel task empowered mindshare
                  after leading-edge results.
                </p>
              </div>
              {/* donation list */}
              <div className='donation-list'>
                <ul>
                  <li>
                    {' '}
                    <i className='bi bi-check-circle-fill' /> Completely
                    architect competitive information
                  </li>
                  <li>
                    <i className='bi bi-check-circle-fill' /> Must be Maintain
                    Every Rules &amp; Regulations{' '}
                  </li>
                  <li>
                    {' '}
                    <i className='bi bi-check-circle-fill' /> You should be a
                    honest &amp; powerful{' '}
                  </li>
                </ul>
              </div>
              {/* charina donars */}
              <div className='donar-title'>
                <h3>Recent Donars</h3>
              </div>
              <div className='charina-donars'>
                <div className='row'>
                  <div className='donar-single-box mr-55'>
                    {/* donar thumb */}
                    <div className='donars-thumb'>
                      <img src='assets/images/resource/donar1.png' alt />
                    </div>
                    {/* donar title */}
                    <div className='donar-title'>
                      <h5>David Meza</h5>
                      <h6>$25</h6>
                    </div>
                  </div>
                  <div className='donar-single-box mr-55'>
                    {/* donar thumb */}
                    <div className='donars-thumb'>
                      <img src='assets/images/resource/donar2.png' alt />
                    </div>
                    {/* donar title */}
                    <div className='donar-title'>
                      <h5>John Alexon</h5>
                      <h6>$35</h6>
                    </div>
                  </div>
                  <div className='donar-single-box mr-55'>
                    {/* donar thumb */}
                    <div className='donars-thumb'>
                      <img src='assets/images/resource/donar3.png' alt />
                    </div>
                    {/* donar title */}
                    <div className='donar-title'>
                      <h5>Louse Kerin</h5>
                      <h6>$15</h6>
                    </div>
                  </div>
                  <div className='donar-single-box mr-55'>
                    {/* donar thumb */}
                    <div className='donars-thumb'>
                      <img src='assets/images/resource/donar4.png' alt />
                    </div>
                    {/* donar title */}
                    <div className='donar-title'>
                      <h5>Amy D. Vida </h5>
                      <h6>$25</h6>
                    </div>
                  </div>
                  <div className='donar-single-box'>
                    {/* donar thumb */}
                    <div className='donars-thumb'>
                      <img src='assets/images/resource/donar5.png' alt />
                    </div>
                    {/* donar title */}
                    <div className='donar-title'>
                      <h5>Sonia Sara</h5>
                      <h6>$10</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog details comment box */}
              <div className='blog-details-comments-box'>
                <div className='widget-comments-title pb-45'>
                  <h2>
                    Comments <span>(2)</span>
                  </h2>
                </div>
                {/* post comment */}
                <div className='post-comment'>
                  {/* post comment thumb */}
                  <div className='post-comment-thumb'>
                    <a href='blog-details.html'>
                      <img src='assets/images/resource/man.png' alt />
                    </a>
                  </div>
                  {/* post comment content */}
                  <div className='post-comment-content'>
                    <div className='post-title'>
                      <h4>David Alexon</h4>
                      <h6>October 01, 2023</h6>
                    </div>
                    {/* post reply */}
                    <div className='posts-reply'>
                      <p>
                        Dramatically reinvent adaptive bandwidth vis reliable
                        infrastructures to the progressively iterate distributed
                        interfaces nice day with our fundraising donation
                      </p>
                    </div>
                    {/* post button */}
                    <div className='post-button'>
                      <a href='#'>Reply</a>
                    </div>
                  </div>
                </div>
                {/* post comment 2 */}
                <div className='post-comment2'>
                  {/* post comment thumb */}
                  <div className='post-comment-thumb'>
                    <a href='blog-details.html'>
                      <img src='assets/images/resource/man.png' alt />
                    </a>
                  </div>
                  {/* post comment content */}
                  <div className='post-comment-content upper'>
                    <div className='post-title'>
                      <h4>louse Kerin</h4>
                      <h6>October 01, 2023</h6>
                    </div>
                    <div className='posts-reply'>
                      <p>
                        Dramatically reinvent adaptive bandwidth vis reliable
                        infrastructures to the progressively iterate distributed
                        interfaces nice day with our fundraising donation
                      </p>
                    </div>
                    {/* post button */}
                    <div className='post-button'>
                      <a href='#'>Reply</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* contact form box */}
              <div className='contact-form-box'>
                {/* form title */}
                <div className='forms-title'>
                  <h1>Add New Comments</h1>
                </div>
                <form
                  action='https://formspree.io/f/myyleorq'
                  method='POST'
                  id='dreamit-form'
                >
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='form-box'>
                        <input type='text' placeholder='Your Name' />
                      </div>
                    </div>
                    <div className='col-lg-6'>
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
                      <div className='contact-form style-two'>
                        <button type='submit'> Submit Comment </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id='status' />
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              {/* widget items */}
              <div className='organizer-items'>
                {/* organizer thumb */}
                <div className='organizer-thumb'>
                  <img src='assets/images/resource/organiz.png' alt />
                </div>
                {/* organizer content */}
                <div className='organiz-content'>
                  <h4>Louise A. Kelly</h4>
                  <h6>Organizer</h6>
                  <p>Created : Nov 28, 2022</p>
                </div>
                {/* organizer social */}
                <div className='organizer-social'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='bi bi-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-linkedin-in' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* widget items */}
              <div className='widget-items'>
                {/* categories title */}
                <div className='categories-title'>
                  <h4> Category </h4>
                </div>
                {/* widget recent post */}
                <div className='widget-recent-post d-flex'>
                  <div className='rpost-thumb'>
                    <a href='#'>
                      <img
                        src='assets/images/resource/post1.png'
                        alt='post thumb'
                      />
                    </a>
                  </div>
                  <div className='rpost-content'>
                    <div className='rpost-title'>
                      <h4>
                        <a href='#'>
                          {' '}
                          Raise fund for clean &amp; healthy foods{' '}
                        </a>
                      </h4>
                      <span>January 01, 2023</span>
                    </div>
                  </div>
                </div>
                {/* widget recent post */}
                <div className='widget-recent-post d-flex'>
                  <div className='rpost-thumb'>
                    <a href='#'>
                      <img
                        src='assets/images/resource/post2.png'
                        alt='post thumb'
                      />
                    </a>
                  </div>
                  <div className='rpost-content'>
                    <div className='rpost-title'>
                      <h4>
                        <a href='#'>
                          {' '}
                          Collect Funds for Kids Foods &amp; Bevarage{' '}
                        </a>
                      </h4>
                      <span>february 12, 2023</span>
                    </div>
                  </div>
                </div>
                {/* widget recent post */}
                <div className='widget-recent-post upper d-flex'>
                  <div className='rpost-thumb'>
                    <a href='#'>
                      <img
                        src='assets/images/resource/post3.png'
                        alt='post thumb'
                      />
                    </a>
                  </div>
                  <div className='rpost-content'>
                    <div className='rpost-title'>
                      <h4>
                        <a href='#'> Donate Money for Kids Educations </a>
                      </h4>
                      <span>January 10, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* categoreis thumb */}
              <div className='widget-categories-thumb'>
                {/* widget categories content  */}
                <div className='widget-categories-content text-center'>
                  <div className='logo-thumb'>
                    <a href='index.html'>
                      {' '}
                      <img src='assets/images/resource/logo.png' alt />{' '}
                    </a>
                  </div>
                  <div className='widget-title2'>
                    <h3>helping Orphan People</h3>
                  </div>
                  <div className='charina-button'>
                    <a href='donate.html'>
                      {' '}
                      Donate Now <i className='bi bi-suit-heart' />{' '}
                    </a>
                  </div>
                </div>
              </div>
              {/* widget items */}
              <div className='widget-items up'>
                {/* category title */}
                <div className='categories-title'>
                  <h4>Tag Cloud</h4>
                </div>
                <div className='tag-item'>
                  <a href='#'>Charity</a>
                  <a href='#'>Educations</a>
                  <a href='#'>Water</a>
                  <a href='#'>Foods</a>
                  <a href='#'>Orphans</a>
                  <a href='#'>Donations</a>
                  <a href='#'>Healths</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina donate Secton */}
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
  );
}
