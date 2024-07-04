import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import EndScripts from '../components/EndScripts';
import ScrollUp from '../components/ScrollUp';

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
                      <span>/</span> Donations Online
                    </li>
                  </ul>
                </div>
                {/* breadcumb title */}
                <div className='breatcam-title'>
                  <h1>Give Back <span>Dignity</span> to the Homeless.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End charina breatcam section */}
      {/*==================================================*/}
    </>
  );
}
