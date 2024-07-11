import Breatcam from '../components/Breatcam';
import events from './events.json';

export default function Events() {
  const currentDate = new Date();

  // Events are sorted by date. The first event is the oldest event and so on
  const sortedEvents = events.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
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
      <Breatcam breadcrumbs={["Donations", "Events"]}>
        Upcoming Events
      </Breatcam>
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
                  <img src='assets/images/resource/event.png' alt='' />
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
              {/* END CURRENT EVENT INFO */}

              {/* UPCOMING EVENTS */}
              <div className='categories-title'>
                <h4> Upcoming Events </h4>
              </div>

              <div
                className='widget-items'
                style={{ marginTop: '-15px', marginBottom: '40px' }}
              >
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
              </div>

              {/* PAST EVENTS */}

              <div className='categories-title'>
                <h4> Past Events </h4>
              </div>

              <div
                className='widget-items'
                style={{ marginTop: '-15px', marginBottom: '40px' }}
              >
                {threePreviousEvents.map((event, i) => (
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
                ))}
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
      {/* End charina donate Section */}
      {/*==================================================*/}
    </>
  );
}
