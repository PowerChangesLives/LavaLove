import EndScripts from '../components/EndScripts';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import events from './events.json';

export default function Events() {
  const currentDate = new Date();

  // Events are sorted by date. The first event is the oldest event and so on
  const sortedEvents = events.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const upComingEvents = sortedEvents.filter(
    (event) => new Date(event.date) > currentDate
  );
  const previousEvents = sortedEvents.filter(
    (event) => new Date(event.date) <= currentDate
  );

  let mainEvent;

  // if there are upcoming events then set the soonest even as the main event to display
  if (upComingEvents.length > 0) {
    mainEvent = upComingEvents[0]; // This is the soonest event
  }
  // if there are no upcoming events then set the main event to be the most recently passed event
  else {
    mainEvent = previousEvents[previousEvents.length - 1];
  }

  const threeUpcomingEvents = upComingEvents.slice(1, 4);
  const threePreviousEvents = previousEvents.slice(-3).reverse();

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
                      <span>/</span> Donate
                    </li>
                  </ul>
                </div>
                {/* breadcumb title */}
                <div className='breatcam-title'>
                  <h1> Upcoming Events </h1>
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
      {/* Main Event */}
      {/*==================================================*/}
      <div className='donate-section event-details'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-6'>
              <div className='donations-single-box'>
                {/* donations thumb */}
                <div className='donations-thumb'>
                  <img src='assets/images/resource/event.png' alt />
                </div>
              </div>
              {/* donations title */}
              <div className='donations-detials-title pt-20'>
                <h2>
                  <a href='donate.html'>{mainEvent.title}</a>
                </h2>
              </div>
              {/* donation description */}
              <div className='donation-description'>
                <p>{mainEvent.description}</p>
              </div>
              {/* donation description */}
              <div className='donation-description up'>
                <p>{mainEvent.notes}</p>
              </div>
              {/* donation description */}
              <div className='donation-description'>
                <p>{mainEvent.additionalInfo}</p>
              </div>
              <div className='row mt-55'>
                <div className='col-lg-6 col-md-6'>
                  <div className='event-thumb'>
                    <img src='assets/images/resource/1-event.png' alt />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='event-thumb'>
                    <img src='assets/images/resource/2-event.png' alt />
                  </div>
                </div>
              </div>
            </div>

            {/* --------------- EVENTS ---------------*/}

            <div className='col-md-6 col-lg-4'>
              {/* widget items */}
              {/* START CURRENT EVENT INFO */}
              <div className='event-details-items'>
                {/* event title */}
                <div className='event-title2'>
                  <h4>{mainEvent.title}</h4>
                </div>
                {/* event text */}
                <div className='event-text2'>
                  <p>
                    <i className='bi bi-clock' /> Time{' '}
                  </p>
                  <p>
                    <span>{mainEvent.time}</span>
                  </p>
                </div>
                {/* event text */}
                <div className='event-text2'>
                  <p>
                    <i className='bi bi-calendar2-check' /> Date{' '}
                  </p>
                  <p>
                    <span>{mainEvent.date}</span>
                  </p>
                </div>
                {/* event text */}
                <div className='event-text2'>
                  <p>
                    <i className='bi bi-geo-alt-fill' /> Locations{' '}
                  </p>
                  <p>
                    <span>{mainEvent.location}</span>
                  </p>
                </div>
              </div>
              {/* START OGRANIZER INFO */}
              {/* widget items */}
              <div className='organizer-items'>
                {/* organizer thumb */}
                <div className='organizer-thumb'>
                  <img src='assets/images/resource/organiz2.png' alt />
                </div>
                {/* organizer content */}
                <div className='organiz-content'>
                  <h4>{mainEvent.organizerName}</h4>
                  <h6>{mainEvent.organizerRole}</h6>
                  <p>Created : {mainEvent.created}</p>
                </div>
                {/* organizer social */}
                <div className='organizer-social'>
                  <ul>
                    {mainEvent.organizerFacebook && (
                      <li>
                        <a href={mainEvent.organizerFacebook}>
                          <i className='fab fa-facebook-f' />
                        </a>
                      </li>
                    )}
                    {mainEvent.organizerTwitter && (
                      <li>
                        <a href={mainEvent.organizerTwitter}>
                          <i className='bi bi-twitter' />
                        </a>
                      </li>
                    )}
                    {mainEvent.organizerLinkedIn && (
                      <li>
                        <a href={mainEvent.organizerLinkedIn}>
                          <i className='fab fa-linkedin-in' />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              {/* END ORGANIZER INFO */}
              {/* END CURRENT EVENT INFO */}
              {/* widget items */}
              {/* UPCOMING EVENTS */}
              <div className='categories-title'>
                <h4> Upcoming Events </h4>
              </div>

              <div>{mainEvent.title} Main Event (REMOVE LATER)</div>

              <div className='widget-items'>
                {threeUpcomingEvents.map((event, i) => {
                  return (
                    <div className='widget-recent-post upper d-flex' key={i}>
                      <div className='rpost-thumb'>
                        <a href='blog-details.html'>
                          <img
                            src='assets/images/resource/post3.png'
                            alt='post thumb'
                          />
                        </a>
                      </div>
                      <div className='rpost-content'>
                        <div className='rpost-title'>
                          <h4>
                            <a href='event-details.html'> {event.title} </a>
                          </h4>
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <p> (Potential button to view all upcoming events ^^^ ) </p>
              </div>

              <div className='categories-title'>
                <p> (Or maybe add button under the orange box ) </p>
                <p>
                  {' '}
                  (Maybe leave each upcoming and past event in their own
                  seperate orange box?)
                </p>
              </div>

              {/* PAST EVENTS */}

              <div className='categories-title'>
                <h4> Past Events </h4>
              </div>

              {threePreviousEvents.map((event, i) => (
                <div className='widget-items' key={i}>
                  <div className='widget-recent-post upper d-flex'>
                    <div className='rpost-thumb'>
                      <a href='blog-details.html'>
                        <img
                          src='assets/images/resource/post3.png'
                          alt='post thumb'
                        />
                      </a>
                    </div>
                    <div className='rpost-content'>
                      <div className='rpost-title'>
                        <h4>
                          <a href='event-details.html'> {event.title} </a>
                        </h4>
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className='categories-title'>
                <p> (Potential area to view all previous events ^^^ ) </p>
              </div>

              {/* END PAST EVENTS */}

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
                    <h3>Restore the Dignity of the Homeless</h3>
                  </div>
                  <div className='charina-button'>
                    <a href='donate.html'>
                      {' '}
                      Donate Now <i className='bi bi-suit-heart' />{' '}
                    </a>
                  </div>
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
